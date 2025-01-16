import { ClubFeed } from '@/types/club';
import Link from 'next/link';
import Image from 'next/image';
import Instagram from '@/assets/icons/instagram.svg';
import ActionButton from '@/app/_components/ActionButton';

const ClubIntroduction = (ClubFeed: ClubFeed) => {
  const {
    recruitmentPeriod,
    introduction,
    membershipMethod,
    recruitmentUrl,
    instagram,
  } = ClubFeed;

  return (
    <div className={'h-full flex flex-col'}>
      <Section title={'우리 동아리를 소개할게요'} content={introduction} />
      <Section
        title={'모집 방법'}
        content={membershipMethod || '추후 공개하도록 하겠습니다!'}
      />
      <Section
        title={'모집 기간'}
        content={recruitmentPeriod || '현재 모집을 하고 있지 않아요 🥲'}
      />
      {instagram && (
        <div
          className={
            'flex flex-col gap-1 mt-6 text-lg font-bold md:mt-8 md:text-xl'
          }
        >
          Instagram
          <Link
            href={`https://www.instagram.com/${instagram}`}
            target={'_blank'}
          >
            <Image src={Instagram} alt={''} width={30} />
          </Link>
        </div>
      )}

      {recruitmentUrl && (
        <ActionButton>
          <Link target='_blank' href={recruitmentUrl}>
            지원하기
          </Link>
        </ActionButton>
      )}
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
        {content
          ?.split('\n')
          .map((line: string, index: number) => <p key={index}>{line}</p>)}
      </div>
    </section>
  );
};
