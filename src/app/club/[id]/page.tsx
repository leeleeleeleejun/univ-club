import ClubHeading from './_components/ClubHeading';
import ClubIntroduction from './_components/ClubIntroduction';
import { getClub } from './_lib';
import LogoIcon from '@/assets/icons/logo.svg';
// import { getClubs } from '@/app/_lib';
import { Metadata } from 'next';
import ActionButton from '@/app/_components/ActionButton';
import Link from 'next/link';

// export async function generateStaticParams() {
//   const clubs = await getClubs();
//
//   return clubs.map((club) => ({
//     id: String(club.id),
//   }));
// }

// export const revalidate = 3600; // 1시간마다 데이터 체크 & 업데이트

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const data = await getClub(id);
  const { name } = data;
  return {
    title: name,
    description: name,
    openGraph: {
      title: name,
      description: `${name}`,
      locale: 'ko-KR',
      siteName: 'univ-club.vercel.app',
      url: `https://univ-club.vercel.app/club/${id}`,
      type: 'website',
    },
  };
}

const ClubDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const data = await getClub(id);

  return (
    <div className={'h-full flex flex-col p-[20px]'}>
      <ClubHeading
        logoImageUrl={data.logoImageUrl || LogoIcon}
        name={data.name}
        category={data.category}
        tag={data.tag}
        campus={data.campus}
      />
      <ClubIntroduction
        recruitmentPeriod={data.recruitmentPeriod}
        introduction={data.introduction}
        membershipMethod={data.membershipMethod}
        instagram={data.instagram}
        contact={data.contact}
      />
      {data.recruitmentUrl && (
        <Link target='_blank' href={data.recruitmentUrl}>
          <ActionButton>지원하기</ActionButton>
        </Link>
      )}
    </div>
  );
};

export default ClubDetailPage;
