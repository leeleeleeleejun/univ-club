'use client';
import { useState } from 'react';
import SearchBar from '@/app/_components/SearchBar';
import FilterBar from '@/app/_components/Filter';
import ClubCard from '@/app/_components/ClubCard';
import { Club, Filters, FilterType } from '@/types/club';
interface HomeProps {
  initialData: Club[];
}

export default function Home({ initialData }: HomeProps) {
  const [filteredData, setFilteredData] = useState<Club[]>(initialData);
  const [filters, setFilters] = useState<Filters>({
    category: [],
    campus: [],
    tag: [],
  });

  const handleFilter = (filterType: FilterType, value: string) => {
    let newFilters;

    if (value) {
      newFilters = {
        ...filters,
        [filterType]: filters[filterType].includes(value)
          ? filters[filterType].filter((item) => item !== value)
          : [...filters[filterType], value],
      };
    } else {
      newFilters = {
        ...filters,
        [filterType]: [],
      };
    }

    setFilters(newFilters);

    // Apply all active filters
    let result = initialData;

    if (newFilters.category.length > 0) {
      result = result.filter((club) =>
        newFilters.category.includes(club.category)
      );
    }

    if (newFilters.campus.length > 0) {
      result = result.filter((club) => newFilters.campus.includes(club.campus));
    }

    if (newFilters.tag.length > 0) {
      result = result.filter((club) => newFilters.tag.includes(club.tag));
    }

    setFilteredData(result);
  };

  return (
    <>
      <div className='flex flex-col sticky top-0 bg-white'>
        <SearchBar />
        <FilterBar ClubsLength={filteredData.length} onFilter={handleFilter} />
      </div>
      <ul className='flex flex-col gap-4 p-5 overflow-y-scroll'>
        {filteredData.map((club) => (
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
