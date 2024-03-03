import { Cake } from '@/api/cake';
import { Box, Typography } from '@mui/joy';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import PriceSelect from '../CakeList/PriceSelect';

interface Props {
  cakes: Cake[];
  currentIndex?: number;
}

export default function SlideList({ cakes, currentIndex }: Props) {
  return (
    <>
      {cakes.map(({ id, images, name, prices }, cardIndex) => (
        <SwiperSlide key={id}>
          <Box
            sx={{
              flexGrow: 1,
              position: 'relative',
              bgcolor: 'white',
              backgroundClip: 'padding-box',
              border: 'solid 6px transparent',
              borderRadius: '20px',
              '&:before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                zIndex: -1,
                margin: '-6px',
                borderRadius: 'inherit',
                background: 'linear-gradient(135deg,#07a3b2,#d9ecc7)',
              },
            }}
          >
            <Box p={2} pb={0}>
              <Box
                position='relative'
                sx={{ aspectRatio: '1 / 1' }}
                borderRadius={6}
                overflow='hidden'
              >
                {currentIndex !== undefined &&
                  Math.abs(currentIndex - cardIndex) <= 1 && (
                    <Image
                      alt='cake image'
                      src={images[0]}
                      fill
                      sizes='200px'
                      style={{ objectFit: 'cover' }}
                    />
                  )}
              </Box>
            </Box>

            <Box p={2}>
              <Typography level='title-sm' color='primary'>
                {name}
              </Typography>
              <PriceSelect prices={prices} mt={0.5} />
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </>
  );
}
