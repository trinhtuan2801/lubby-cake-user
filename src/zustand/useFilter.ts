import { Age, Gender } from '@/constants';
import { create } from 'zustand';

interface UseFilter {
  gender: Gender | null;
  age: Age | null;
  setGender: (gender: Gender | null) => void;
  setAge: (age: Age | null) => void;
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
}));

export default useFilter;
