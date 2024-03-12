'use client';

import { Cake } from '@/api/cake';
import Image from 'next/image';
import { Box, Typography } from '@mui/joy';
import useCardIndex from '@/zustand/useCardIndex';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import PriceSelect from './PriceSelect';
interface Props extends Cake {
  cardIndex: number;
}

export default function CakeItem({
  images,
  cardIndex,
  blurImages,
  name,
  prices,
}: Props) {
  const { setActiveIndex, setOpen } = useCardIndex();

  return (
    <PhotoView
      src={images[0]}
      overlay={
        <Box p={2} pb={3}>
          <Typography textColor='common.white' fontWeight='bold'>
            {name}
          </Typography>
          <PriceSelect prices={prices} mt={0.5} />
        </Box>
      }
    >
      <Box
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
            sizes='(max-width: 1200px) 12vw, 260px'
            style={{ objectFit: 'cover' }}
            quality={100}
            placeholder='blur'
            blurDataURL={blurImages[0]}
          />
        </Box>
      </Box>
    </PhotoView>
  );
}
