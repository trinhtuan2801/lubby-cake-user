'use client';

import { Cake } from '@/api/cake';
import CakeList from '@/components/CakeList/CakeList';
import CardSwiper from '@/components/CardSwiper/CardSwiper';
import FilterBox from '@/components/FilterBox/FilterBox';
import useFilter from '@/zustand/useFilter';
import { Box } from '@mui/joy';
import { useMemo } from 'react';

interface Props {
  cakes: Cake[];
}

export default function FilterContainer({ cakes }: Props) {
  const { age, gender } = useFilter();

  const filteredCakes = useMemo(() => {
    let result = cakes.slice();
    if (age !== null)
      result = result.filter((cake) => cake.age === null || cake.age === age);
    if (gender !== null)
      result = result.filter(
        (cake) => cake.gender === null || cake.gender === gender,
      );
    return result;
  }, [cakes, age, gender]);

  return (
    <>
      <Box p={0.5}>
        <CakeList cakes={filteredCakes} />
      </Box>
      <FilterBox />

      <CardSwiper cakes={filteredCakes} />
    </>
  );
}
