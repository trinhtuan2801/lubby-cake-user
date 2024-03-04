'use client';

import { Age, Gender } from '@/constants';
import { FilterAlt } from '@mui/icons-material';
import { IconButton } from '@mui/joy';
import { useState } from 'react';

export default function FilterBox() {
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [selectedAge, setSelectedAge] = useState<Age | null>(null);
  // eslint-disable-next-line
  const onClickGender = (gender: Gender) => {
    setSelectedGender(selectedGender === gender ? null : gender);
  };
  // eslint-disable-next-line
  const onClickAge = (age: Age) => {
    setSelectedAge(selectedAge === age ? null : age);
  };

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
      >
        <FilterAlt />
      </IconButton>
      {/* <Box display='flex' gap={0.5} flexWrap='wrap'>
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
      </Box> */}
    </>
  );
}
