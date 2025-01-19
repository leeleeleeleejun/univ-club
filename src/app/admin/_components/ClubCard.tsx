import Link from 'next/link';
import { deptCaptionColor } from '@/constants/color';
import { Club } from '@/types/club';
import CampusTag from '@/app/_components/CampusTag';

const ClubCard = ({ id, name, tag, category, campus }: Club) => {
  return (
    <li
      key={id}
      className='rounded-xl border-solid border-[1.5px] border-gray-100 transition-colors hover:border-gray-200 hover:bg-gray-50'
    >
      <Link
        href={`admin/club/${id}`}
        className='flex w-full justify-between p-5 gap-1'
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
        <CampusTag campus={campus} />
      </Link>
    </li>
  );
};

export default ClubCard;
