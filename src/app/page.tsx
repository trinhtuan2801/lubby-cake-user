import { getCakes } from '@/api/cake';
import CakeList from '@/components/CakeList/CakeList';
import FilterBox from '@/components/FilterBox/FilterBox';
import Box from '@mui/joy/Box';

export default async function Home() {
  const cakes = await getCakes();

  return (
    <Box>
      <FilterBox />
      <CakeList cakes={cakes} />
    </Box>
  );
}
