'use client';

import { Cake } from '@/api/cake';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.scss';

interface Props {
  cakes: Cake[];
}

export default function CardSwiper({ cakes }: Props) {
  return (
    <Swiper effect='cards' grabCursor={true} modules={[EffectCards]}>
      {cakes.map((cake) => (
        <SwiperSlide key={cake.id}>{cake.name}</SwiperSlide>
      ))}
    </Swiper>
  );
}
