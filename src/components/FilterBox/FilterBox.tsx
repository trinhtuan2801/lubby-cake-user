'use client';

import {
  Age,
  AgeStr,
  Gender,
  GenderStr,
  ageKeys,
  genderKeys,
} from '@/constants';
import { CloseRounded } from '@mui/icons-material';
import { IconButton, Option, Select } from '@mui/joy';
import Box from '@mui/joy/Box';
import { useState } from 'react';

export default function FilterBox() {
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [selectedAge, setSelectedAge] = useState<Age | null>(null);

  return (
    <Box
      p={1}
      position='sticky'
      top={0}
      zIndex={900}
      sx={{
        backdropFilter: 'saturate(180%) blur(5px)',
      }}
      bgcolor='hsla(0,0%,100%,.8)'
      display='flex'
      gap={1}
    >
      <Select
        placeholder='Giới tính'
        value={selectedGender}
        onChange={(_, v: Gender | null) => setSelectedGender(v)}
        {...(selectedGender !== null && {
          endDecorator: (
            <IconButton
              size='sm'
              variant='plain'
              color='primary'
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
              onClick={() => {
                setSelectedGender(null);
              }}
              sx={{ p: 0, minHeight: 0, minWidth: 0 }}
            >
              <CloseRounded />
            </IconButton>
          ),
          indicator: null,
          color: 'primary',
        })}
      >
        {genderKeys.map((gender) => {
          return (
            <Option key={gender} value={gender}>
              {GenderStr[gender]}
            </Option>
          );
        })}
      </Select>
      <Select
        placeholder='Độ tuổi'
        value={selectedAge}
        onChange={(_, v: Age | null) => setSelectedAge(v)}
        {...(selectedAge !== null && {
          endDecorator: (
            <IconButton
              size='sm'
              variant='plain'
              color='primary'
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
              onClick={() => {
                setSelectedAge(null);
              }}
              sx={{ p: 0, minHeight: 0, minWidth: 0 }}
            >
              <CloseRounded />
            </IconButton>
          ),
          indicator: null,
          color: 'primary',
        })}
      >
        {ageKeys.map((age) => {
          return (
            <Option key={age} value={age}>
              {AgeStr[age]} tuổi
            </Option>
          );
        })}
      </Select>
    </Box>
  );
}
