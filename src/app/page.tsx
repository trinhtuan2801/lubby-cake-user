import { nextGetCakes } from '@/api/cake';
import FilterContainer from '@/components/FilterContainer/FilterContainer';

export default async function Home() {
  const cakes = await nextGetCakes();

  return <FilterContainer cakes={cakes} />;
}
