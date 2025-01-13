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
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({
    category: [],
    campus: '',
    tag: [],
  });

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleFilter = (filterType: FilterType, value: string) => {
    let newFilters;

    if (filterType === 'campus') {
      newFilters = {
        ...filters,
        campus: value,
      };
    } else {
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
    }

    setFilters(newFilters);
  };

  const getFilteredAndSearchedData = () => {
    let result = initialData;

    // 필터 적용
    if (filters.category.length > 0) {
      result = result.filter((club) =>
        filters.category.includes(club.category)
      );
    }

    if (filters.campus) {
      result = result.filter((club) => club.campus === filters.campus);
    }

    if (filters.tag.length > 0) {
      result = result.filter((club) => filters.tag.includes(club.tag));
    }

    if (searchTerm.trim()) {
      const term = searchTerm.trim().toLowerCase();
      result = result.filter(
        (club) =>
          club.name.toLowerCase().includes(term) ||
          club.category.toLowerCase().includes(term) ||
          club.tag.toLowerCase().includes(term)
      );
    }

    return result;
  };

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
