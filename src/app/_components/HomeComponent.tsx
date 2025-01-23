'use client';

import SearchBar from '@/app/_components/SearchBar';
import FilterBar from '@/app/_components/Filter';
import ClubCard from '@/app/_components/ClubCard';
import { Club } from '@/types/club';
import useFilters from '@/app/_hooks/useFilters';

interface HomeProps {
  initialData: Club[];
}

export default function Home({ initialData }: HomeProps) {
  const { handleFilter, handleSearch, getFilteredAndSearchedData } =
    useFilters(initialData);

  const filteredAndSearchedData = getFilteredAndSearchedData();

  return (
    <>
      <div className='flex flex-col sticky top-0 bg-white'>
        <SearchBar handleSearch={handleSearch} />
        <FilterBar
          ClubsLength={filteredAndSearchedData.length}
          onFilter={handleFilter}
        />
      </div>
      <ul className='flex flex-col gap-4 p-5 overflow-y-scroll'>
        {filteredAndSearchedData.map((club) => (
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
