import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';
import { useGetRecentBooksQuery } from '@/redux/features/books/bookApi';
import BookCard from '@/components/BookCard';
import { IBook } from '@/types/globalTypes';

export default function Home() {
  const { data } = useGetRecentBooksQuery(undefined);
  const booksData = data?.data;
  
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            Welcome <br /> To Book Net
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Priceless reading at your phone
          </p>
          <div className="text-primary mt-20">
            <p>Easy to Read and Use for lifetime</p>
            <p>Purchase and get discount now</p>
          </div>
          <Button className="mt-5">Learn more</Button>
        </div>
      
      </div>
      <div className="mb-96">
       
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase mt-10">
            The most recent Books
          </h1>

          <div className="col-span-9 grid grid-cols-3 gap-10 pb-20 mt-10">
            {booksData?.map((book: IBook) => (
              <BookCard book={book} />
            ))}
          </div>
          <Button className="mt-10" asChild>
            <Link to="/books">Browse all books</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
