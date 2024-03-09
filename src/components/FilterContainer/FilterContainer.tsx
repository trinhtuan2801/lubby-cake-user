'use client';

import { Cake } from '@/api/cake';
import CakeList from '@/components/CakeList/CakeList';
import CardSwiper from '@/components/CardSwiper/CardSwiper';
import FilterBox from '@/components/FilterBox/FilterBox';
import { AgeStr, GenderStr } from '@/constants';
import useFilter from '@/zustand/useFilter';
import { Box, Chip } from '@mui/joy';
import { useMemo } from 'react';
import FilterModal from '../FilterBox/FilterModal';

interface Props {
  cakes: Cake[];
}

export default function FilterContainer({ cakes }: Props) {
  const { age, gender, setIsOpenFilter } = useFilter();

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
        {(age !== null || gender !== null) && (
          <Box display='flex' gap={1} mb={1}>
            {gender !== null && (
              <Chip
                variant='solid'
                color='primary'
                onClick={() => setIsOpenFilter(true)}
                sx={{ cursor: 'pointer' }}
              >
                {GenderStr[gender]}
              </Chip>
            )}
            {age !== null && (
              <Chip
                variant='solid'
                color='primary'
                onClick={() => setIsOpenFilter(true)}
                sx={{ cursor: 'pointer' }}
              >
                {AgeStr[age]} tuổi
              </Chip>
            )}
          </Box>
        )}
        <CakeList cakes={filteredCakes} />
      </Box>

      <FilterBox />
      <FilterModal />

      <CardSwiper cakes={filteredCakes} />
    </>
  );
}
