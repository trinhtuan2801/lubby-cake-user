'use client';

import {
  Age,
  AgeStr,
  Gender,
  GenderStr,
  ageKeys,
  genderKeys,
} from '@/constants';
import { FilterAlt } from '@mui/icons-material';
import {
  Box,
  Chip,
  Drawer,
  IconButton,
  ModalClose,
  Sheet,
  Typography,
} from '@mui/joy';
import { useState } from 'react';

export default function FilterBox() {
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [selectedAge, setSelectedAge] = useState<Age | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        color='success'
        variant='solid'
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          borderRadius: '50%',
          border: '2px solid white',
          background: 'linear-gradient(315deg,#07a3b2,#d9ecc7)',
        }}
        onClick={() => setOpen(true)}
      >
        <FilterAlt />
      </IconButton>
      <Drawer
        size='sm'
        anchor='bottom'
        variant='plain'
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: 'transparent',
              boxShadow: 'none',
              height: 'fit-content',
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: 'md',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            height: '100%',
            p: 2,
          }}
        >
          <ModalClose />
          <Typography level='title-lg'>Chọn lọc</Typography>
          <Box mt={1.5} />
          <Box>
            <Typography level='body-sm'>Giới tính</Typography>
            <Box display='flex' gap={0.5} flexWrap='wrap' mt={0.5}>
              <Chip
                variant={selectedGender === null ? 'solid' : 'outlined'}
                color={selectedGender === null ? 'primary' : 'neutral'}
                onClick={() => setSelectedGender(null)}
              >
                Tất cả
              </Chip>
              {genderKeys.map((gender) => {
                const checked = selectedGender === gender;
                return (
                  <Chip
                    key={gender}
                    variant={checked ? 'solid' : 'outlined'}
                    color={checked ? 'primary' : 'neutral'}
                    onClick={() => setSelectedGender(gender)}
                  >
                    {GenderStr[gender]}
                  </Chip>
                );
              })}
            </Box>
          </Box>
          <Box mt={1}>
            <Typography level='body-sm'>Độ tuổi</Typography>
            <Box display='flex' gap={0.5} flexWrap='wrap' mt={0.5}>
              <Chip
                variant={selectedAge === null ? 'solid' : 'outlined'}
                color={selectedAge === null ? 'primary' : 'neutral'}
                onClick={() => setSelectedAge(null)}
              >
                Tất cả
              </Chip>
              {ageKeys.map((age) => {
                const checked = selectedAge === age;
                return (
                  <Chip
                    key={age}
                    variant={checked ? 'solid' : 'outlined'}
                    color={checked ? 'primary' : 'neutral'}
                    onClick={() => setSelectedAge(age)}
                  >
                    {AgeStr[age]}
                  </Chip>
                );
              })}
            </Box>
          </Box>
        </Sheet>
      </Drawer>
    </>
  );
}
