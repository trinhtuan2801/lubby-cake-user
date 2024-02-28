import { Cake } from '@/api/cake';
import CakeItem from './CakeItem';
import Grid from '@mui/joy/Grid';

interface Props {
  cakes: Cake[];
}

export default function CakeList({ cakes }: Props) {
  return (
    <Grid container spacing={2}>
      {cakes.map((cake) => (
        <Grid xs={6} sm={4} md={3} key={cake.id}>
          <CakeItem {...cake} />
        </Grid>
      ))}
    </Grid>
  );
}
