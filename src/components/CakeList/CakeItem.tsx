import { Cake } from '@/api/cake';
import Image from 'next/image';
import { Box } from '@mui/joy';
import PriceSelect from './PriceSelect';

interface Props extends Cake {}

export default function CakeItem(props: Props) {
  // eslint-disable-next-line
  const { age, desc, gender, id, images, name, prices } = props;

  return (
    <Box
      position='relative'
      overflow='hidden'
      height='100%'
      borderRadius={6}
      border='1px solid'
      borderColor='neutral.outlinedBorder'
    >
      <Box position='relative' sx={{ aspectRatio: '1 / 1' }}>
        <Image
          alt='cake image'
          src={images[0]}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Box p={1}>
        <PriceSelect prices={prices} />
      </Box>
    </Box>
  );
}
