import BookReview from '@/components/BookReview';
import { useSingleBookQuery } from '@/redux/features/books/bookApi';
import { useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();

  const { data: book } = useSingleBookQuery(id);

  return (
    <>
      <div className="flex max-w- p-11 ml-20 items-center border-b border-gray-300">
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl">Author: {book?.author}</p>
          <p className="text-xl">Genre: {book?.genre}</p>
          <p className="text-xl">Publication Date: {book?.publication_date}</p>
        </div>
      </div>
      <BookReview id={id!} />
    </>
  );
}
