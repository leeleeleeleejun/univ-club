import { create } from 'zustand';
import { Filters } from '@/types/club';

interface FilterStore {
  filters: Filters;
  setFilters: (state: Filters) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  filters: { category: [], campus: '', tag: [] },
  setFilters: (state: Filters) => set({ filters: state }),
}));
