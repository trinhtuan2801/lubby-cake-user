'use client';

import { Cake } from '@/api/cake';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.scss';
import Image from 'next/image';
import { Box, Typography } from '@mui/joy';
import PriceSelect from '../CakeList/PriceSelect';
import { useEffect } from 'react';
import { Fade } from '@mui/material';
import useCardIndex from '@/zustand/useCardIndex';

interface Props {
  cakes: Cake[];
}

export default function CardSwiper({ cakes }: Props) {
  const { activeIndex, setActiveIndex, open, setOpen } = useCardIndex();

  return (
    <Fade in={open}>
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={() => setOpen(false)}
      >
        <Box onClick={(e) => e.stopPropagation()} sx={{ mt: -20 }}>
          <Swiper
            effect='cards'
            grabCursor={true}
            modules={[EffectCards]}
            onSlideChange={(e) => setActiveIndex(e.activeIndex)}
          >
            {cakes.map(({ id, images, name, prices }, cardIndex) => (
              <SwiperSlide key={id}>
                {Math.abs(activeIndex - cardIndex) <= 4 && (
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
                        {Math.abs(activeIndex - cardIndex) <= 1 && (
                          <Image
                            alt='cake image'
                            src={images[0]}
                            fill
                            sizes='(max-width: 600px) 40vw, (max-width: 900px) 26vw, (max-width: 1200px) 20vw, 280px'
                            style={{ objectFit: 'cover' }}
                            loading='lazy'
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
                )}
              </SwiperSlide>
            ))}
            <ActiveIndexJumper currentIndex={activeIndex} />
          </Swiper>
        </Box>
      </Box>
    </Fade>
  );
}

interface ActiveIndexJumperProps {
  currentIndex: number;
}

function ActiveIndexJumper({ currentIndex }: ActiveIndexJumperProps) {
  const swiper = useSwiper();

  useEffect(() => {
    if (!swiper.destroyed) swiper.slideTo(currentIndex);
  }, [currentIndex, swiper]);

  return null;
}
