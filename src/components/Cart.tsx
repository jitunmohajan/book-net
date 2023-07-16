import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { HiOutlineTrash } from 'react-icons/hi';
import { Button } from './ui/button';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import {
  removeFromCart,
} from '@/redux/features/cart/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { books } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost">
          Wish List
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto relative">
        <SheetHeader>
          <SheetTitle>Wish List</SheetTitle>
        </SheetHeader>
        <div className="space-y-5">
          {books.map((book) => (
            <div
              className="border h-44 p-5 flex justify-between rounded-md"
              key={book.title}
            >
              <Link to={`/book-details/${book._id}`}>
                <div className="px-2 w-full flex flex-col gap-3">
                  <h1 className="text-2xl self-center">{book?.title}</h1>
                  <p  className="text-2xl self-center">Author: {book.author}</p>
                
                </div>
              </Link>
              <div className="border-l pl-5 flex flex-col justify-between">
                
                <Button
                  onClick={() => dispatch(removeFromCart(book))}
                  variant="destructive"
                  className="bg-red-500 hover:bg-red-400"
                >
                  <HiOutlineTrash size="20" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
