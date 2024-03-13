'use client';

import { Cake } from '@/api/cake';
import Image from 'next/image';
import { Box } from '@mui/joy';
import { useRef } from 'react';
import ViewMode from './ViewMode';

interface Props extends Cake {}

export default function CakeItem(props: Props) {
  const { images, blurImages } = props;
  const viewModeRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Box
        overflow='hidden'
        height='100%'
        borderRadius={6}
        onClick={() => {
          viewModeRef.current?.click?.();
        }}
        sx={{ cursor: 'pointer' }}
      >
        <Box position='relative' sx={{ aspectRatio: '1 / 1' }}>
          <Image
            alt='cake image'
            src={images[0]}
            fill
            sizes='(max-width: 1200px) 12vw, 260px'
            style={{ objectFit: 'cover' }}
            quality={100}
            placeholder='blur'
            blurDataURL={blurImages[0]}
          />
        </Box>
      </Box>
      <ViewMode ref={viewModeRef} {...props} />
    </>
  );
}
