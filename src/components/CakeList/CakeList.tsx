import { Cake } from '@/api/cake';
import CakeItem from './CakeItem';
import Grid from '@mui/joy/Grid';

interface Props {
  cakes: Cake[];
}

export default function CakeList({ cakes }: Props) {
  return (
    <Grid container spacing={0.5}>
      {cakes.map((cake, index) => (
        <Grid xs={4} sm={3} md={2} key={cake.id}>
          <CakeItem cardIndex={index} {...cake} />
        </Grid>
      ))}
    </Grid>
  );
}
