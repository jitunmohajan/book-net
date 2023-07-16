import { Button } from '@/components/ui/button';
import { ChangeEvent, FormEvent } from 'react';
import { DatePickerWithPresets } from '@/components/ui/datePickerWithPreset';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
// import { useAppSelector } from '@/redux/hook';
// import { IBook } from '@/types/globalTypes';
import { usePostBookMutation } from '@/redux/features/books/bookApi';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  // const [scheduled, setScheduled] = useState<boolean>(false);

  // const { books } = useAppSelector((state) => state.cart);

  const [postBook, { isLoading, isError, isSuccess }] =
  usePostBookMutation();

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const publication_date = form.publication_date.value;
    const data ={
      title:title,
      author:author,
      genre:genre,
      publication_date:publication_date,
      reviews:[],
    }
    console.log(data);

    // const options = {
    //   id: id,
    //   data: { comment: inputValue },
    // };

    postBook(data);
    navigate('/books')

    
    // setInputValue('');
  };

  return (
    <form  onSubmit={handleSubmit} className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-3xl w-full">
        <h1 className="mb-2">Add New Book</h1>
        <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
          <div className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="name">Title</Label>
                <Input type="text" id="title" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="name">Author</Label>
                <Input type="text" id="author" className="mt-2" />
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="name">Genre</Label>
                <Input type="text" id="genre" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="name">Publication Date</Label>
                <Input type="text" id="publication_date" className="mt-2" />
              </div>
            </div>
          </div>

          <Button type='submit' className="w-full space-y-5 my-5">AddBook</Button>
         
        </div>
      </div>
      
    </form>
  );
}
