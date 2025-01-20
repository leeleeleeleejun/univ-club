import Image from 'next/image';
import { deptCaptionColor } from '@/constants/color';
import { ClubInfo } from '@/types/club';
import CampusTag from '@/app/_components/CampusTag';

export default function ClubHeading(info: ClubInfo) {
  const { name, category, tag, campus, logoImageUrl } = info;

  return (
    <>
      <div className='flex gap-2'>
        <div className='flex shrink-0 w-14 h-14 relative md:w-20 md:h-20'>
          <Image
            src={logoImageUrl}
            className='object-cover object-center rounded-full border-solid border-[1px] border-gray-100'
            fill
            sizes='80px'
            priority
            alt='logo'
          />
        </div>
        <div className=''>
          <h1 className='shrink-0 font-bold text-2xl'>{name}</h1>
          <div className='flex items-center mt-0.5 text-base font-semibold md:text-lg'>
            <div className={`${deptCaptionColor[category]}`}>{category}</div>
            <div className='px-1.5 font-medium text-gray-300'>|</div>
            <div className='text-gray-500'>{tag}</div>
          </div>
        </div>
        <CampusTag campus={campus} />
      </div>
    </>
  );
}
