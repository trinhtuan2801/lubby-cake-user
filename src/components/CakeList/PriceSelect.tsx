'use client';

import { CakePrice } from '@/api/cake';
import { numberWithCommas } from '@/utils/string-utils';
import { Box, Button, Typography } from '@mui/joy';
import { useState } from 'react';

interface Props {
  prices: CakePrice[];
}

export default function PriceSelect({ prices }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  // eslint-disable-next-line
  const { oldPrice, price, size } = prices[activeIndex];
  return (
    <Box>
      <Typography level='body-sm'>
        {!!oldPrice && (
          <Typography
            level='body-xs'
            component='span'
            sx={{ textDecoration: 'line-through' }}
          >
            {numberWithCommas(oldPrice)}đ
          </Typography>
        )}
        &nbsp;
        {numberWithCommas(prices[activeIndex].price)}đ
      </Typography>
      <Box display='flex' flexWrap='wrap' gap={0.5}>
        {prices.map((price, index) => (
          <Button
            key={price.id}
            color={index === activeIndex ? 'primary' : 'neutral'}
            size='sm'
            variant={index === activeIndex ? 'soft' : 'outlined'}
            onClick={() => setActiveIndex(index)}
          >
            {price.size}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
