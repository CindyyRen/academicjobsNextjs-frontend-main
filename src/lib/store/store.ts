import create from 'zustand';

interface Store {
  region: string;
  setRegion: (region: string) => void;
  searchJobCriteria: { q?: string; l?: string };
  setSearchJobCriteria: (criteria: { q?: string; l?: string }) => void;
}

export const useStore = create<Store>((set) => ({
  region: 'Global',
  setRegion: (region) => set({ region }),
  searchJobCriteria: {},
  setSearchJobCriteria: (criteria) => set({ searchJobCriteria: criteria }),
}));
