'use client';

import { Cake } from '@/api/cake';
import Image from 'next/image';
import { Box } from '@mui/joy';
import useCardIndex from '@/zustand/useCardIndex';

interface Props extends Cake {
  cardIndex: number;
}

export default function CakeItem({ images, cardIndex }: Props) {
  const { setActiveIndex, setOpen } = useCardIndex();

  return (
    <Box
      position='relative'
      overflow='hidden'
      height='100%'
      borderRadius={6}
      onClick={() => {
        setOpen(true);
        setActiveIndex(cardIndex);
      }}
      sx={{ cursor: 'pointer' }}
    >
      <Box position='relative' sx={{ aspectRatio: '1 / 1' }}>
        <Image
          alt='cake image'
          src={images[0]}
          fill
          sizes='(max-width: 600px) 30vw, (max-width: 900px) 20vw, (max-width: 1200px) 15vw, 260px'
          style={{ objectFit: 'cover' }}
          loading='lazy'
        />
      </Box>
    </Box>
  );
}