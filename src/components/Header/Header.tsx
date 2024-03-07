import { Box, Typography } from '@mui/joy';
import './index.scss';
export default function Header() {
  return (
    <Box p={2}>
      <Typography
        fontSize='24px'
        fontWeight='bold'
        fontFamily='var(--font-playpen-sans)'
        textAlign='center'
        className='playful'
      >
        {'Lubby Cake'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </Typography>
    </Box>
  );
}
