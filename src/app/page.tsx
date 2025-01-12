import SearchBar from '@/app/_components/SearchBar';
import FilterBar from '@/app/_components/Filter';
import ClubCard from '@/app/_components/ClubCard';
import { getClubs } from '@/app/_lib';

export default async function Home() {
  const data = await getClubs();
  return (
    <>
      <div className={'flex flex-col sticky top-0 bg-white'}>
        <SearchBar />
        <FilterBar />
      </div>
      <ul className='grid w-full grid-cols-1 gap-4 grow p-[20px] overflow-y-scroll'>
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
    </>
  );
}
