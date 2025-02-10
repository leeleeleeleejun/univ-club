import { useState } from 'react';
import { Club, FilterType } from '@/types/club';
import { useFilterStore } from '@/store/filter';

const useFilters = (initialData: Club[]) => {
  const { filters, setFilters } = useFilterStore();
  const [searchTerm, setSearchTerm] = useState<string>('');

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

  return { handleFilter, handleSearch, getFilteredAndSearchedData };
};
export default useFilters;
