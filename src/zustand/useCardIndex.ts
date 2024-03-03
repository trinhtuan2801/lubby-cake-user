import { create } from 'zustand';

interface UseCardIndex {
  activeIndex: number;
  open: boolean;
  setActiveIndex: (activeIndex: number) => void;
  setOpen: (open: boolean) => void;
}

const useCardIndex = create<UseCardIndex>((set) => ({
  activeIndex: 0,
  setActiveIndex: (activeIndex: UseCardIndex['activeIndex']) => {
    set({ activeIndex });
  },
  open: false,
  setOpen: (open) => {
    set({ open });
  },
}));

export default useCardIndex;
