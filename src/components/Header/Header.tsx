import { Box, Typography } from '@mui/joy';
import './index.scss';
export default function Header() {
  return (
    <Box
      // position='sticky'
      top={0}
      left={0}
      py={2}
      px={2}
      zIndex={1100}
    >
      <Typography
        fontSize='24px'
        fontWeight='bold'
        fontFamily='var(--font-playpen-sans)'
        textAlign='center'
        className='header-text playful'
      >
        {'Lubby Cake'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </Typography>
    </Box>
  );
}
