
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

import {
  useGetReviewQuery,
} from '@/redux/features/books/bookApi';

interface IProps {
  id: string;
}

export default function BookReview({ id }: IProps) {

  const { data } = useGetReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  console.log(data);
  
  return (

    <div className="max-w-7xl mx-auto mt-5">
     
      <div>
        <h1>Reviews</h1>
      </div>
      <div className="mt-10">
        {data?.reviews?.map((review: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
