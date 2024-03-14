import { Box, Typography } from '@mui/joy';
import { forwardRef, useMemo } from 'react';
import { PhotoView } from 'react-photo-view';
import PriceSelect from './PriceSelect';
import { Cake } from '@/api/cake';
import useGetScreen from '@/hooks/useGetScreen';
import Image from 'next/image';
import 'react-photo-view/dist/react-photo-view.css';

interface Props extends Cake {}

export default forwardRef<HTMLDivElement, Props>(function ViewMode(
  { images, blurImages, name, prices, imageDims },
  ref,
) {
  const { width: screenWidth } = useGetScreen();
  const renderDims = useMemo(() => {
    const originalDims = imageDims[0];
    const result = { ...originalDims };
    const ratio = originalDims.width / screenWidth;
    if (ratio > 1) {
      result.width /= ratio;
      result.height /= ratio;
    }
    return result;
  }, [screenWidth]);

  return (
    <PhotoView
      key={screenWidth}
      overlay={
        <Box p={2} pb={3}>
          <Typography textColor='common.white' fontWeight='bold'>
            {name}
          </Typography>
          <PriceSelect prices={prices} mt={0.5} />
        </Box>
      }
      width={renderDims.width}
      height={renderDims.height}
      render={({ attrs, scale }) => {
        const dim = imageDims[0];
        const width = Number(attrs.style?.width ?? 0);
        const offset = (width - dim.width) / dim.width;
        const childScale = scale === 1 ? scale + offset : 1 + offset;

        return (
          <Box {...attrs} bgcolor='white'>
            <Box
              width={dim.width}
              height={dim.height}
              position='relative'
              style={{
                transform: `scale(${childScale})`,
                transformOrigin: '0 0',
              }}
            >
              <Image
                alt='cake image'
                src={images[0]}
                fill
                sizes='(max-width: 600px) 100vw, 600px'
                quality={100}
                placeholder='blur'
                blurDataURL={blurImages[0]}
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Box>
        );
      }}
    >
      <div ref={ref} />
    </PhotoView>
  );
});
