import { getCakes } from '@/api/cake';
import CakeList from '@/components/CakeList/CakeList';
import CardSwiper from '@/components/CardSwiper/CardSwiper';
import Box from '@mui/joy/Box';

export default async function Home() {
  const cakes = await getCakes();

  return (
    <Box>
      <Box p={0.5}>
        <CakeList cakes={cakes} />
      </Box>

      <CardSwiper cakes={cakes} />
    </Box>
  );
}
