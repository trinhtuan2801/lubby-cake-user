'use client';

import { Cake } from '@/api/cake';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.scss';
import Image from 'next/image';
import {
  Box,
  DialogContent,
  DialogTitle,
  Modal,
  ModalDialog,
  Typography,
} from '@mui/joy';
import PriceSelect from '../CakeList/PriceSelect';
import { CSSProperties, useEffect, useState } from 'react';
import useCardIndex from '@/zustand/useCardIndex';
import { setPageScroll } from '@/utils/dom-utils';
import BorderWrapper from '../BorderWrapper/BorderWrapper';

interface Props {
  cakes: Cake[];
}

export default function CardSwiper({ cakes }: Props) {
  const {
    activeIndex,
    setActiveIndex,
    open: openSwiper,
    setOpen: setOpenSwiper,
  } = useCardIndex();

  const [visibility, setVisibility] =
    useState<CSSProperties['visibility']>('hidden');

  const [openDesc, setOpenDesc] = useState(false);

  useEffect(() => {
    setPageScroll(!openSwiper);

    if (openSwiper) setVisibility('visible');
    else
      setTimeout(() => {
        setVisibility('hidden');
      }, 225);
  }, [openSwiper]);

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          backdropFilter: 'blur(8px)',
          zIndex: 1300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: openSwiper ? 1 : 0,
          transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          visibility,
        }}
        onClick={() => {
          setOpenSwiper(false);
          setPageScroll(true);
        }}
      >
        <Box onClick={(e) => e.stopPropagation()}>
          <Swiper
            effect='cards'
            grabCursor={true}
            modules={[EffectCards]}
            onSlideChange={(e) => setActiveIndex(e.activeIndex)}
            cardsEffect={{
              slideShadows: false,
            }}
          >
            {cakes.map(
              ({ id, images, name, prices, blurImages, desc }, cardIndex) => (
                <SwiperSlide key={id}>
                  {Math.abs(activeIndex - cardIndex) <= 4 && (
                    <BorderWrapper flexGrow={1}>
                      <Box
                        bgcolor='white'
                        borderRadius={12}
                        height='100%'
                        display='flex'
                        flexDirection='column'
                        position='relative'
                      >
                        <Box p={2} pb={0}>
                          <Box
                            position='relative'
                            sx={{ aspectRatio: '1 / 1' }}
                            borderRadius={4}
                            overflow='hidden'
                          >
                            {Math.abs(activeIndex - cardIndex) <= 1 && (
                              <Image
                                alt='cake image'
                                src={images[0]}
                                fill
                                sizes='(max-width: 600px) 40vw, (max-width: 900px) 26vw, (max-width: 1200px) 20vw, 280px'
                                style={{ objectFit: 'cover' }}
                                placeholder='blur'
                                blurDataURL={blurImages[0]}
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

                        {desc && (
                          <Box
                            position='absolute'
                            bottom={0}
                            right={0}
                            pb={1}
                            pr={1.5}
                            display='flex'
                            justifyContent='flex-end'
                          >
                            <Typography
                              onClick={() => setOpenDesc(true)}
                              level='body-sm'
                              color='primary'
                              fontWeight='bold'
                            >
                              Mô tả
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </BorderWrapper>
                  )}
                </SwiperSlide>
              ),
            )}
            <ActiveIndexJumper />
          </Swiper>
        </Box>
      </Box>
      <Modal open={openDesc} onClose={() => setOpenDesc(false)}>
        <ModalDialog
          size='md'
          sx={{
            borderRadius: '16px',
            width: 'calc(100vw - 2rem)',
            maxWidth: '400px',
          }}
        >
          <DialogTitle>
            <Typography color='primary' level='title-lg'>
              {cakes[activeIndex]?.name}
            </Typography>
          </DialogTitle>
          <DialogContent>{cakes[activeIndex]?.desc}</DialogContent>
        </ModalDialog>
      </Modal>
    </>
  );
}

function ActiveIndexJumper() {
  const swiper = useSwiper();
  const { open, activeIndex } = useCardIndex();

  useEffect(() => {
    if (!swiper.destroyed && open === true) swiper.slideTo(activeIndex);
  }, [open, swiper.destroyed]);

  return null;
}
