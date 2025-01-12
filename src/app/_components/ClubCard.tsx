import Link from 'next/link';
import { deptCaptionColor } from '@/constants/color';
import { Club } from '@/types/club';

const ClubCard = ({ id, name, tag, category, campus }: Club) => {
  return (
    <li
      key={id}
      className='rounded-xl border-solid border-[1.5px] border-gray-100 transition-colors hover:border-gray-200 hover:bg-gray-50'
    >
      <Link
        href={`/club/${id}`}
        className='flex h-full w-full justify-between p-5'
      >
        <div>
          <div className='font-bold text-xl'>{name}</div>
          <div className='flex items-center'>
            <div
              className={`rounded-lg text-sm font-semibold ${deptCaptionColor[category]}`}
            >
              {category}
            </div>
            <div className='px-1 text-sm font-medium text-gray-300'>|</div>
            <div className='rounded-lg text-sm font-semibold text-gray-500'>
              {tag}
            </div>
          </div>
        </div>
        <div className='flex items-center'>
          <div
            className={`rounded-lg px-2 py-1 text-sm font-semibold ${
              campus === '모집 중'
                ? 'bg-green-100 text-green-500'
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            {campus}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ClubCard;
