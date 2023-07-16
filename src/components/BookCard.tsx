import { IBook } from '@/types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hook';
import { addToCart } from '@/redux/features/cart/cartSlice';

interface IProps {
  book: IBook;
}

export default function BookCard({ book }: IProps) {
  const dispatch = useAppDispatch();

  const handleAddBook = (book: IBook) => {
    dispatch(addToCart(book));
    toast({
      description: 'Book Added',
    });
  };
  return (
    <div>
      <div className="rounded-2xl  flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/book-details/${book._id}`} className="w-full">
          {/* <img src={book?.image} alt="book" /> */}
          <h1 className="text-xl font-semibold">{book?.title}</h1>
        
        <p>{book?.author}</p>
        <p className="text-sm">
         Publication Date: {book?.publication_date }
        </p>
        </Link>
        {/* <p className="text-sm">Price: {book?.price}</p> */}
        <Button variant="default" onClick={() => handleAddBook(book)}>
          Add to wish list
        </Button>
        
      </div>
    </div>
  );
}
