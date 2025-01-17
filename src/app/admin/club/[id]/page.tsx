import LogoIcon from '@/assets/icons/logo.svg';
import { getClubs } from '@/app/_lib';
import { Metadata } from 'next';
import { getClub } from '@/app/club/[id]/_lib';
import ClubHeading from '@/app/club/[id]/_components/ClubHeading';
import ClubIntroduction from '@/app/club/[id]/_components/ClubIntroduction';
import Link from 'next/link';

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
      />
      <div className={'flex justify-around text-white mt-auto font-semibold'}>
        <button className={'bg-orange-400 p-4 rounded-xl'}>
          <Link href={`/admin/data-form/${id}`}>수정하기</Link>
        </button>
        <button className={'bg-rose-500 p-4 rounded-xl'}>삭제하기</button>
      </div>
    </div>
  );
};

export default ClubDetailPage;
