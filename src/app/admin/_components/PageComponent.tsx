'use client';
import { useState } from 'react';
import SearchBar from '@/app/_components/SearchBar';
import ClubCard from '@/app/admin/_components/ClubCard';
import { Club } from '@/types/club';

const PageComponent = ({ data }: { data: Club[] }) => {
  const [filterData, setFilterData] = useState(data);

  const handleSearch = (value: string) => {
    if (!value.trim()) {
      return setFilterData(data);
    }
    let result = data;
    const term = value.trim().toLowerCase();
    result = result.filter(
      (club) =>
        club.name.toLowerCase().includes(term) ||
        club.category.toLowerCase().includes(term) ||
        club.tag.toLowerCase().includes(term)
    );
    setFilterData(result);
  };
  return (
    <>
      <SearchBar handleSearch={handleSearch} />

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
