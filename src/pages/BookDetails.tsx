import BookReview from '@/components/BookReview';
// import { Button } from '@/components/ui/button';
import { useSingleBookQuery } from '@/redux/features/books/bookApi';
// import { IBook } from '@/types/globalTypes';
// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();

  const { data: book } = useSingleBookQuery(id);

  return (
    <>
      <div className="flex max-w- p-11 ml-20 items-center border-b border-gray-300">
        {/* <div className="w-[50%]">
          <img src={book?.image} alt="" />
        </div> */}
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl">Author: {book?.author}</p>
          <p className="text-xl">Genre: {book?.genre}</p>
          <p className="text-xl">Publication Date: {book?.publication_date}</p>
          {/* <ul className="space-y-1 text-lg">
            {book?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul> */}
          {/* <Button>Add to cart</Button> */}
        </div>
      </div>
      <BookReview id={id!} />
    </>
  );
}
