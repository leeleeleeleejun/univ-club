import ClubCard from './_components/ClubCard';
import { getClubs } from '@/app/_lib';

const Page = async () => {
  const data = await getClubs();

  return (
    <ul className='flex flex-col gap-4 p-5 overflow-y-scroll'>
      {data.map((club) => (
        <ClubCard
          key={club.id}
          id={club.id}
          name={club.name}
          category={club.category}
          tag={club.tag}
          campus={club.campus}
        />
      ))}
    </ul>
  );
};

export default Page;
