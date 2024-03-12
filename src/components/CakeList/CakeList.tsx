import { Cake } from '@/api/cake';
import CakeItem from './CakeItem';
import Grid from '@mui/joy/Grid';
import { PhotoProvider } from 'react-photo-view';
import { Box } from '@mui/joy';

interface Props {
  cakes: Cake[];
}

export default function CakeList({ cakes }: Props) {
  return (
    <PhotoProvider
      speed={() => 200}
      maskClosable={false}
      overlayRender={({ overlay }) => {
        return (
          <Box
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
        {cakes.map((cake, index) => (
          <Grid xs={4} sm={3} md={2} key={cake.id}>
            <CakeItem cardIndex={index} {...cake} />
          </Grid>
        ))}
      </Grid>
    </PhotoProvider>
  );
}
