import { getClubs } from '@/app/_lib';
import PageComponent from '@/app/admin/_components/PageComponent';

const Page = async () => {
  const data = await getClubs();
  return <PageComponent data={data} />;
};

export default Page;
