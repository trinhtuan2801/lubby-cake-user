import { Age, Gender } from '@/constants';
import { create } from 'zustand';

interface UseFilter {
  gender: Gender | null;
  age: Age | null;
  setGender: (gender: Gender | null) => void;
  setAge: (age: Age | null) => void;
  isOpenFilter: boolean;
  setIsOpenFilter: (isOpenFilter: boolean) => void;
}

const useFilter = create<UseFilter>((set) => ({
  gender: null,
  age: null,
  setGender: (gender) => {
    set({ gender });
  },
  setAge: (age) => {
    set({ age });
  },
  isOpenFilter: true,
  setIsOpenFilter: (isOpenFilter) => {
    set({ isOpenFilter });
  },
}));

export default useFilter;
