import { getCakes } from '@/api/cake';
import CakeList from '@/components/CakeList/CakeList';
import CardSwiper from '@/components/CardSwiper/CardSwiper';
import FilterBox from '@/components/FilterBox/FilterBox';
import Box from '@mui/joy/Box';

export default async function Home() {
  const cakes = await getCakes();

  return (
    <>
      <Box p={0.5}>
        <CakeList cakes={cakes} />
        <Box height='500px' />
      </Box>
      <FilterBox />

      <CardSwiper cakes={cakes} />
    </>
  );
}
