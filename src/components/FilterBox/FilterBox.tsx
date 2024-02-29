'use client';

import {
  Age,
  AgeStr,
  Gender,
  GenderStr,
  ageKeys,
  genderKeys,
} from '@/constants';
import { Chip } from '@mui/joy';
import Box from '@mui/joy/Box';
import { useState } from 'react';

export default function FilterBox() {
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [selectedAge, setSelectedAge] = useState<Age | null>(null);

  const onClickGender = (gender: Gender) => {
    setSelectedGender(selectedGender === gender ? null : gender);
  };

  const onClickAge = (age: Age) => {
    setSelectedAge(selectedAge === age ? null : age);
  };

  return (
    <Box
      p={1}
      position='sticky'
      top={0}
      zIndex={1100}
      sx={{
        backdropFilter: 'saturate(180%) blur(5px)',
      }}
      bgcolor='hsla(0,0%,100%,.8)'
    >
      <Box display='flex' gap={0.5} flexWrap='wrap'>
        {genderKeys.map((gender) => {
          const checked = selectedGender === gender;
          return (
            <Chip
              key={gender}
              variant={checked ? 'solid' : 'outlined'}
              color={checked ? 'primary' : 'neutral'}
              onClick={() => onClickGender(gender)}
            >
              {GenderStr[gender]}
            </Chip>
          );
        })}
      </Box>
      <Box display='flex' gap={0.5} flexWrap='wrap' mt={1}>
        {ageKeys.map((age) => {
          const checked = selectedAge === age;
          return (
            <Chip
              key={age}
              variant={checked ? 'solid' : 'outlined'}
              color={checked ? 'primary' : 'neutral'}
              onClick={() => onClickAge(age)}
            >
              {AgeStr[age]} tuổi
            </Chip>
          );
        })}
      </Box>
    </Box>
  );
}
