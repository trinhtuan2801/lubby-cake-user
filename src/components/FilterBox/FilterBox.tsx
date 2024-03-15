'use client';

import useFilter from '@/zustand/useFilter';
import { FilterAlt } from '@mui/icons-material';
import { Badge, Box, IconButton } from '@mui/joy';
import { useMemo } from 'react';

export default function FilterBox() {
  const { age, gender, setIsOpenFilter } = useFilter();

  const badgeContent = useMemo(() => {
    if (gender !== null && age !== null) return 2;
    if (gender === null && age === null) return 0;
    return 1;
  }, [gender, age]);

  return (
    <Box
      position='fixed'
      width='100%'
      bottom={0}
      left={0}
      display='flex'
      justifyContent='center'
      p={2}
    >
      <Box
        flexGrow={1}
        maxWidth='1200px'
        display='flex'
        justifyContent='flex-end'
      >
        <Badge
          badgeContent={badgeContent}
          color='primary'
          size='sm'
          sx={{
            '& .MuiBadge-badge': {
              top: 5,
              right: 5,
              bgcolor: 'purple',
            },
          }}
        >
          <IconButton
            color='primary'
            variant='solid'
            size='lg'
            sx={{
              borderRadius: '50%',
              border: '2px solid white',
              background: 'linear-gradient(315deg,#07a3b2,#d9ecc7)',
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            }}
            onClick={() => setIsOpenFilter(true)}
            aria-label='filter button'
          >
            <FilterAlt />
          </IconButton>
        </Badge>
      </Box>
    </Box>
  );
}
