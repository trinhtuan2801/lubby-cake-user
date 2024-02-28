import { Cake } from '@/api/cake';
import Image from 'next/image';
import { Box, Card, CardContent, CardOverflow, Typography } from '@mui/joy';

interface Props extends Cake {}

export default function CakeItem(props: Props) {
  // eslint-disable-next-line
  const { age, desc, gender, id, images, name, prices } = props;

  return (
    <Card
      sx={{ position: 'relative', overflow: 'hidden', height: '100%' }}
      variant='outlined'
    >
      <CardOverflow sx={{ p: 0 }}>
        <Box position='relative' sx={{ aspectRatio: '1 / 1' }}>
          <Image
            alt='cake image'
            src={images[0]}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </CardOverflow>
      <CardContent>
        <Typography level='title-md'>{name}</Typography>
        <Typography
          level='body-sm'
          sx={{ maxHeight: '100px', overflow: 'auto' }}
        >
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
