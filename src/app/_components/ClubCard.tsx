import Link from 'next/link';
import { Club } from '@/types/club';
import CampusTag from '@/app/_components/CampusTag';

const ClubCard = ({ id, name, tag, category, campus }: Club) => {
  return (
    <li key={id} className='border-solid border-b-[1.5px] border-gray-100'>
      <Link
        href={`/club/${id}`}
        className='flex w-full justify-between items-center py-4 gap-1'
      >
        <div>
          <div className='font-bold text-xl'>{name}</div>
          <div className='flex items-center'>
            <div className={`rounded-lg text-sm font-semibold text-zinc-400`}>
              {category}
            </div>
            <div className='px-1 text-sm font-medium text-gray-300'>|</div>
            <div className='rounded-lg text-sm font-semibold text-zinc-400'>
              {tag}
            </div>
          </div>
        </div>
        <CampusTag campus={campus} />
      </Link>
    </li>
  );
};

export default ClubCard;
