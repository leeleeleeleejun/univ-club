'use client';
import SearchBar from '@/app/_components/SearchBar';
import ClubCard from '@/app/admin/_components/ClubCard';
import { Club } from '@/types/club';
import ActionButton from '@/app/_components/ActionButton';
import Link from 'next/link';
import useFilter from '@/app/admin/_hooks/useFilter';

const PageComponent = ({ data }: { data: Club[] }) => {
  const { filterData, handleSearch } = useFilter(data);

  return (
    <>
      <div className={'sticky flex items-center justify-between'}>
        <div className={'w-full'}>
          <SearchBar handleSearch={handleSearch} />
        </div>
        <Link href={'/admin/data-form'} className={'w-1/4 pr-4'}>
          <ActionButton>만들기</ActionButton>
        </Link>
      </div>
      <ul className='flex flex-col gap-4 p-5 overflow-y-scroll'>
        {filterData.map((club) => (
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
};

export default PageComponent;
