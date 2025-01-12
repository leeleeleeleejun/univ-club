import SearchBar from '@/app/_components/SearchBar';
import FilterBar from '@/app/_components/Filter';
import ClubCard from '@/app/_components/ClubCard';
import Footer from '@/app/_components/Footer';

export default function Home() {
  return (
    <>
      <SearchBar />
      <FilterBar />
      <div className={'h-full mt-[16px] flex flex-col overflow-y-scroll'}>
        <ul className='grid w-full grid-cols-1 gap-4 grow p-[20px]'>
          <ClubCard
            id={1}
            name={'Zero'}
            category={'학술'}
            tag={'창업'}
            recruitStatus={'모집 중'}
          />
          <ClubCard
            id={2}
            name={'Guts'}
            category={'체육'}
            tag={'창업'}
            recruitStatus={'모집마감'}
          />
          <ClubCard
            id={1}
            name={'Zero'}
            category={'학술'}
            tag={'창업'}
            recruitStatus={'모집 중'}
          />
          <ClubCard
            id={2}
            name={'Guts'}
            category={'체육'}
            tag={'창업'}
            recruitStatus={'모집마감'}
          />
          <ClubCard
            id={1}
            name={'Zero'}
            category={'학술'}
            tag={'창업'}
            recruitStatus={'모집 중'}
          />
          <ClubCard
            id={2}
            name={'Guts'}
            category={'체육'}
            tag={'창업'}
            recruitStatus={'모집마감'}
          />
        </ul>
        <Footer />
      </div>
    </>
  );
}
