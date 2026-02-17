import Link from 'next/link';
import { Club } from '@/types/club';
import CampusTag from '@/app/_components/CampusTag';

const ClubCard = ({ id, name, tag, category, campus, updatedAt }: Club) => {
  return (
    <li key={id} className='border-solid border-b-[1.5px] border-gray-100'>
      <Link
        href={`/admin/club/${id}`}
        className='flex flex-col w-full py-4 gap-1'
        prefetch={false}
      >
        <div className='flex w-full justify-between'>
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
        </div>
        <p className='text-right text-sm text-zinc-400'>마지막 업데이트: {updatedAt.slice(0, 10)}</p>
      </Link>
    </li>
  );
};

export default ClubCard;


