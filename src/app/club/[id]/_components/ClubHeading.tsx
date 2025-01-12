import Image from 'next/image';
import { deptCaptionColor } from '@/constants/color';
import { ClubInfo } from '@/types/club';
import CampusTag from '@/app/_components/CampusTag';

export default function ClubHeading(info: ClubInfo) {
  const { name, category, tag, campus, logoImageUrl } = info;

  return (
    <>
      <div className='flex flex-col'>
        <div className='flex flex-row'>
          <div className='h-14 w-14 overflow-hidden rounded-full border-solid border-[1.5px] border-gray-100 md:h-20 md:w-20'>
            <Image
              src={logoImageUrl}
              width={80}
              height={80}
              priority
              alt='logo'
            />
          </div>
          <div className='ml-3'>
            <h1 className='text-2xl font-bold md:text-4xl'>{name}</h1>
            <div className='flex items-center mt-0.5'>
              <div
                className={`rounded-lg text-base font-semibold md:text-lg ${deptCaptionColor[category]}`}
              >
                {category}
              </div>
              <div className='px-1.5 font-medium text-gray-300 text-lg'>|</div>
              <div className='rounded-lg font-semibold text-gray-500 text-lg'>
                {tag}
              </div>
            </div>
          </div>
          <CampusTag campus={campus} />
        </div>
      </div>
    </>
  );
}
