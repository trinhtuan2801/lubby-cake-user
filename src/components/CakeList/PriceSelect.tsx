'use client';

import { CakePrice } from '@/api/cake';
import { numberWithCommas } from '@/utils/string-utils';
import { Box, BoxProps, Chip, Typography, TypographyProps } from '@mui/joy';
import { useState } from 'react';

interface Props extends BoxProps {
  prices: CakePrice[];
  ActivePriceProps?: TypographyProps;
}

export default function PriceSelect({
  prices,
  ActivePriceProps,
  ...ContainerProps
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePrice = prices[activeIndex];

  return (
    <Box {...ContainerProps}>
      <Box display='flex' gap={1} alignItems='center'>
        <Typography
          color='primary'
          fontWeight='bold'
          level='body-lg'
          {...ActivePriceProps}
        >
          {numberWithCommas(activePrice.price)}đ
        </Typography>
        {!!activePrice.oldPrice && (
          <Typography
            level='body-sm'
            component='span'
            sx={{ textDecoration: 'line-through' }}
            textColor='common.white'
          >
            {numberWithCommas(activePrice.oldPrice)}đ
          </Typography>
        )}
      </Box>
      <Box display='flex' gap={0.5} flexWrap='wrap' mt={1}>
        {prices.map((price, index) => {
          const isActive = index === activeIndex;
          return (
            <Chip
              key={price.id}
              color={isActive ? 'primary' : 'neutral'}
              variant={'solid'}
              onClick={() => setActiveIndex(index)}
              sx={{ justifyContent: 'flex-start' }}
              size='lg'
            >
              {price.size}
            </Chip>
          );
        })}
      </Box>
    </Box>
  );
}
