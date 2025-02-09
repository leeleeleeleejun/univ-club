import { ClubFeed } from '@/types/club';
import Link from 'next/link';
import Image from 'next/image';
import Instagram from '@/assets/icons/instagram.svg';
import LinkifyText from '@/app/club/[id]/_components/LinkifyText';

const ClubIntroduction = (ClubFeed: ClubFeed) => {
  const {
    recruitmentPeriod,
    introduction,
    membershipMethod,
    instagram,
    contact,
  } = ClubFeed;

  return (
    <div className={'flex flex-col mb-10'}>
      <Section
        title={'우리 동아리를 소개할게요'}
        content={introduction}
        useLinkifyText
      />
      {contact && <Section title={'회장단(관계자) 번호'} content={contact} />}
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
            className={'w-fit'}
            href={`https://www.instagram.com/${instagram}`}
            target={'_blank'}
          >
            <Image src={Instagram} alt={''} width={30} />
          </Link>
        </div>
      )}
    </div>
  );
};
export default ClubIntroduction;

const Section = ({
  title,
  content,
  useLinkifyText = false,
}: {
  title: string;
  content: string;
  useLinkifyText?: boolean;
}) => {
  return (
    <section>
      <h3 className={'mt-6 text-lg font-bold md:mt-8 md:text-xl'}>{title}</h3>
      <div
        className={
          'mt-1 bg-white text-base font-medium text-gray-500 whitespace-pre-wrap md:mt-2 md:text-lg'
        }
      >
        {useLinkifyText ? <LinkifyText text={content} /> : content}
      </div>
    </section>
  );
};
