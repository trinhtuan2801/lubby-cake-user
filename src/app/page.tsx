import { getCakes } from '@/api/cake';
import FilterContainer from '@/components/FilterContainer/FilterContainer';
export const revalidate = 10;

export default async function Home() {
  const cakes = await getCakes();

  return <FilterContainer cakes={cakes} />;
}
