import { useState } from 'react';
import { Club } from '@/types/club';

const useFilter = (data: Club[]) => {
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

  return { filterData, handleSearch };
};

export default useFilter;
