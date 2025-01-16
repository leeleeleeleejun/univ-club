import ClubHeading from './_components/ClubHeading';
import ClubIntroduction from './_components/ClubIntroduction';
import { getClub } from './_lib';
import LogoIcon from '@/assets/icons/logo.svg';
import { getClubs } from '@/app/_lib';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const clubs = await getClubs();

  return clubs.map((club) => ({
    id: String(club.id),
  }));
}

// export const revalidate = 3600; // 1시간마다 데이터 체크 & 업데이트
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;

  const data = await getClub(Number(id));
  const { name } = data;
  return {
    title: name,
    description: name,
    openGraph: {
      title: name,
      description: `${name}`,
      locale: 'ko-KR',
      siteName: 'univ-club.vercel.app',
      url: `https://univ-club.vercel.app/club/1`,
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
  const data = await getClub(Number(id));

  return (
    <div className={'h-full p-[20px]'}>
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
        recruitmentUrl={data.recruitmentUrl}
      />
    </div>
  );
};

export default ClubDetailPage;
