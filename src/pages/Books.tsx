import BookCard from '@/components/BookCard';
import { useGetBooksQuery } from '@/redux/features/books/bookApi';

import { IBook } from '@/types/globalTypes';

export default function Books() {
  const { data } = useGetBooksQuery(undefined);
  console.log(data);

  const booksData = data?.data;
  return (
    <div className="ms-5 me-5 mx-auto relative mt-10">
      <h1 className='text-2xl mb-5'>All Books</h1>
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {booksData?.map((book: IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
}
