import { getClubs } from '@/app/_lib';
import HomeComponent from './_components/HomeComponent';

export default async function Page() {
  const data = await getClubs();
  return <HomeComponent initialData={data} />;
}
