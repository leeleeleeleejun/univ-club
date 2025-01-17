import PageComponent from '@/app/admin/data-form/[[...id]]/_components/PageComponent';
import { getClub } from '@/app/club/[id]/_lib';

const Page = async ({ params }: { params: Promise<{ id?: string[] }> }) => {
  const { id } = await params;
  const data = id && (await getClub(Number(id[0])));

  return <PageComponent initialData={data} />;
};

export default Page;
