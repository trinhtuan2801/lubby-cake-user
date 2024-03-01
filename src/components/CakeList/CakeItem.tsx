import { Cake } from '@/api/cake';
import Image from 'next/image';
import { Box } from '@mui/joy';

interface Props extends Cake {}

export default function CakeItem(props: Props) {
  // eslint-disable-next-line
  const { age, desc, gender, id, images, name, prices } = props;

  return (
    <Box position='relative' overflow='hidden' height='100%'>
      <Box position='relative' sx={{ aspectRatio: '1 / 1' }}>
        <Image
          alt='cake image'
          src={images[0]}
          fill
          sizes='33vw'
          style={{ objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
}
