'use client';

import { CakePrice } from '@/api/cake';
import { numberWithCommas } from '@/utils/string-utils';
import { Box, Chip, Typography } from '@mui/joy';
import { useState } from 'react';

interface Props {
  prices: CakePrice[];
}

export default function PriceSelect({ prices }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePrice = prices[activeIndex];

  return (
    <Box>
      {!!activePrice.oldPrice && (
        <Typography
          level='body-xs'
          component='span'
          sx={{ textDecoration: 'line-through' }}
        >
          {numberWithCommas(activePrice.oldPrice)}đ
        </Typography>
      )}
      <Typography color='primary' fontWeight='bold' level='body-sm'>
        {numberWithCommas(activePrice.price)}đ
      </Typography>
      <Box display='flex' gap={0.5} flexWrap='wrap' mt={0.5}>
        {prices.map((price, index) => {
          const isActive = index === activeIndex;
          return (
            <Chip
              key={price.id}
              color={isActive ? 'primary' : 'neutral'}
              size='sm'
              variant={isActive ? 'soft' : 'outlined'}
              onClick={() => setActiveIndex(index)}
              sx={{ justifyContent: 'flex-start' }}
            >
              {price.size}
            </Chip>
          );
        })}
      </Box>
    </Box>
  );
}
