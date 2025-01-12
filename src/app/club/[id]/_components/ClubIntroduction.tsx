import { ClubFeed } from '@/types/club';
import Link from 'next/link';
import Image from 'next/image';
import Instagram from '@/assets/icons/instagram.svg';

const ClubIntroduction = (ClubFeed: ClubFeed) => {
  const {
    recruitmentPeriod,
    introduction,
    membershipMethod,
    formUrl,
    instagram,
  } = ClubFeed;

  return (
    <div className={'h-full flex flex-col'}>
      <Section title={'우리 동아리를 소개할게요'} content={introduction} />
      <Section title={'모집 방법'} content={membershipMethod} />
      <Section title={'모집 기간'} content={recruitmentPeriod} />
      <div
        className={
          'flex flex-col gap-1 mt-6 text-lg font-bold md:mt-8 md:text-xl'
        }
      >
        Instagram
        <Link href={`https://www.instagram.com/${instagram}`} target={'_blank'}>
          <Image src={Instagram} alt={''} width={30} />
        </Link>
      </div>
      <button
        className={
          'mt-auto mb-[100px] w-full rounded-xl bg-blue-500 font-bold text-white transition-colors hover:bg-blue-600 md:text-lg md:mb-[120px]'
        }
      >
        <Link
          target='_blank'
          href={formUrl}
          className='inline-block w-full py-4'
        >
          지원하기
        </Link>
      </button>
    </div>
  );
};
export default ClubIntroduction;

const Section = ({ title, content }: { title: string; content: string }) => {
  return (
    <section>
      <h3 className={'mt-6 text-lg font-bold md:mt-8 md:text-xl'}>{title}</h3>
      <div
        className={
          'mt-1 bg-white text-base font-medium text-gray-500 md:mt-2 md:text-lg'
        }
      >
        {content}
      </div>
    </section>
  );
};
