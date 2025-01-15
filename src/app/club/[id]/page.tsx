import ClubHeading from './_components/ClubHeading';
import ClubIntroduction from './_components/ClubIntroduction';
import { getClub } from './_lib';
import LogoIcon from '@/assets/icons/logo.svg';
import { getClubs } from '@/app/_lib';

export async function generateStaticParams() {
  const posts = await getClubs();

  return posts.map((post) => ({
    id: post.id,
  }));
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
