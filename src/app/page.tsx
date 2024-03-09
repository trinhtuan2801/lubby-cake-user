import { getCakes } from '@/api/cake';
import FilterContainer from '@/components/FilterContainer/FilterContainer';

export default async function Home() {
  const cakes = await getCakes();

  return <FilterContainer cakes={cakes} />;
}
