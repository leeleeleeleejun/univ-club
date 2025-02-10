import { ClubFeed } from '@/types/club';
import Link from 'next/link';
import Image from 'next/image';
import InstagramIcon from '@/assets/icons/instagram.svg';
import YoutubeIcon from '@/assets/icons/youtube.svg';
import HomeIcon from '@/assets/icons/home.svg';

import LinkifyText from '@/app/club/[id]/_components/LinkifyText';

const ClubIntroduction = (ClubFeed: ClubFeed) => {
  const {
    recruitmentPeriod,
    introduction,
    membershipMethod,
    contact,
    instagram,
    youtubeUrl,
    homepageUrl,
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
        useLinkifyText
      />
      <Section
        title={'모집 기간'}
        content={recruitmentPeriod || '현재 모집을 하고 있지 않아요 🥲'}
      />
      {(instagram || youtubeUrl || homepageUrl) && (
        <section>
          <h3 className={'mt-6 text-lg font-bold md:mt-8 md:text-xl'}>SNS</h3>
          <div className='mt-1 flex gap-4'>
            {instagram && (
              <Link
                className={'w-fit'}
                href={`https://www.instagram.com/${instagram}`}
                target={'_blank'}
              >
                <Image src={InstagramIcon} alt={''} width={30} />
              </Link>
            )}
            {youtubeUrl && (
              <Link className={'w-fit'} href={youtubeUrl} target={'_blank'}>
                <Image src={YoutubeIcon} alt={''} width={30} />
              </Link>
            )}
            {homepageUrl && (
              <Link className={'w-fit'} href={homepageUrl} target={'_blank'}>
                <Image src={HomeIcon} alt={''} width={30} />
              </Link>
            )}
          </div>
        </section>
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
