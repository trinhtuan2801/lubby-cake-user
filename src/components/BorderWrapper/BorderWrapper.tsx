import { Box, BoxProps } from '@mui/joy';

interface Props extends BoxProps {
  gradient?: boolean;
}

export default function BorderWrapper({ gradient = true, ...BoxProps }: Props) {
  return (
    <Box
      p={1}
      {...(gradient && {
        sx: {
          background: 'linear-gradient(135deg,#07a3b2,#d9ecc7)',
        },
        borderRadius: 16,
        p: 1,
        overflow: 'hidden',
      })}
      {...BoxProps}
    />
  );
}
