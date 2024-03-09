'use client';

import {
  Age,
  AgeStr,
  Gender,
  GenderStr,
  ageKeys,
  genderKeys,
} from '@/constants';
import useFilter from '@/zustand/useFilter';
import { Check, Clear } from '@mui/icons-material';
import {
  Box,
  Chip,
  DialogContent,
  DialogTitle,
  IconButton,
  Modal,
  ModalClose,
  ModalDialog,
  Typography,
} from '@mui/joy';
import { useEffect, useState } from 'react';

export default function FilterModal() {
  const { age, gender, setAge, setGender, isOpenFilter, setIsOpenFilter } =
    useFilter();
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [selectedAge, setSelectedAge] = useState<Age | null>(null);

  const onClose = () => {
    setIsOpenFilter(false);
  };

  const onOk = () => {
    setAge(selectedAge);
    setGender(selectedGender);
    onClose();
  };

  useEffect(() => {
    if (isOpenFilter) {
      setSelectedAge(age);
      setSelectedGender(gender);
    }
  }, [isOpenFilter]);

  return (
    <Modal open={isOpenFilter} onClose={onClose}>
      <ModalDialog
        size='md'
        sx={{
          borderRadius: '16px',
          width: 'calc(100vw - 2rem)',
          maxWidth: '400px',
        }}
      >
        <ModalClose aria-label='Close button' />
        <DialogTitle>
          <Typography level='title-lg' color='primary'>
            Chọn lọc
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box mt={1}>
            <Typography level='title-sm'>Giới tính</Typography>
            <Box display='flex' gap={0.5} flexWrap='wrap' mt={0.5}>
              <Chip
                variant={selectedGender === null ? 'solid' : 'outlined'}
                color={selectedGender === null ? 'primary' : 'neutral'}
                onClick={() => setSelectedGender(null)}
                size='lg'
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
                    size='lg'
                  >
                    {GenderStr[gender]}
                  </Chip>
                );
              })}
            </Box>
          </Box>
          <Box mt={1}>
            <Typography level='title-sm'>Độ tuổi</Typography>
            <Box display='flex' gap={0.5} flexWrap='wrap' mt={0.5}>
              <Chip
                variant={selectedAge === null ? 'solid' : 'outlined'}
                color={selectedAge === null ? 'primary' : 'neutral'}
                onClick={() => setSelectedAge(null)}
                size='lg'
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
                    size='lg'
                  >
                    {AgeStr[age]}
                  </Chip>
                );
              })}
            </Box>
          </Box>
          <Box mt={2} display='flex' justifyContent='flex-end' gap={1}>
            <IconButton
              variant='solid'
              color='primary'
              onClick={onOk}
              aria-label='Ok button'
            >
              <Check />
            </IconButton>
            <IconButton
              variant='outlined'
              color='neutral'
              onClick={onClose}
              aria-label='Cancel button'
            >
              <Clear />
            </IconButton>
          </Box>
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
}
