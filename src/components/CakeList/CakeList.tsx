'use client';

import { Cake } from '@/api/cake';
import CakeItem from './CakeItem';
import Grid from '@mui/joy/Grid';
import { PhotoProvider } from 'react-photo-view';
import { Box } from '@mui/joy';
import useGetScreen from '@/hooks/useGetScreen';

interface Props {
  cakes: Cake[];
}

export default function CakeList({ cakes }: Props) {
  const { width: screenWidth } = useGetScreen();

  return (
    <PhotoProvider
      key={screenWidth}
      speed={() => 200}
      maskClosable={false}
      loop
      overlayRender={({ overlay, index }) => {
        return (
          <Box
            key={cakes[index].id}
            bgcolor='rgba(0, 0, 0, 0.5)'
            position='absolute'
            bottom={0}
            left={0}
            width='100%'
            zIndex={50}
          >
            {overlay}
          </Box>
        );
      }}
    >
      <Grid container spacing={0.5}>
        {cakes.map((cake) => (
          <Grid xs={4} sm={3} md={2} key={cake.id}>
            <CakeItem {...cake} />
          </Grid>
        ))}
      </Grid>
    </PhotoProvider>
  );
}
