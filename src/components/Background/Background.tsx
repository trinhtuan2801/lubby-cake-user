import Box from '@mui/joy/Box';

export default function Background() {
  return (
    <Box
      position='fixed'
      zIndex={-1}
      height='100dvh'
      width='100vw'
      sx={{
        backgroundImage: 'linear-gradient(315deg, #07a3b2, #d9ecc7)',
      }}
      id='background'
    ></Box>
  );
}
