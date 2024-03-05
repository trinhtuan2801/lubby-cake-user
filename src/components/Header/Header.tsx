import { Box, Typography } from '@mui/joy';

export default function Header() {
  return (
    <Box
      position='sticky'
      top={0}
      left={0}
      py={1}
      px={2}
      zIndex={1100}
      width='fit-content'
    >
      <Typography
        textColor='common.white'
        level='title-lg'
        fontSize='24px'
        fontWeight='bold'
        fontFamily='var(--font-playpen-sans)'
        sx={{
          textShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 2px',
        }}
      >
        Lubby Cake
      </Typography>
    </Box>
  );
}
