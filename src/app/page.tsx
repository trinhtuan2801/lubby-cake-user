import { getCakes } from '@/api/cake';
import CakeList from '@/components/CakeList/CakeList';
import FilterBox from '@/components/FilterBox/FilterBox';
import Box from '@mui/joy/Box';

export default async function Home() {
  const cakes = await getCakes();
  const duplicatedCakes = [...cakes, ...cakes, ...cakes];

  return (
    <Box>
      <FilterBox />
      <Box p={1} pt={0}>
        <CakeList cakes={duplicatedCakes} />
      </Box>
    </Box>
  );
}
