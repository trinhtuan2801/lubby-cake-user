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
import { Check, Clear, FilterAlt } from '@mui/icons-material';
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

export default function FilterBox() {
  const { age, gender, setAge, setGender } = useFilter();
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [selectedAge, setSelectedAge] = useState<Age | null>(null);
  const [open, setOpen] = useState(true);

  const onClose = () => {
    setOpen(false);
  };

  const onOk = () => {
    setAge(selectedAge);
    setGender(selectedGender);
    onClose();
  };

  useEffect(() => {
    if (open) {
      setSelectedAge(age);
      setSelectedGender(gender);
    }
  }, [open]);

  return (
    <>
      <IconButton
        color='primary'
        variant='solid'
        size='lg'
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          borderRadius: '50%',
          border: '2px solid white',
          background: 'linear-gradient(315deg,#07a3b2,#d9ecc7)',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }}
        onClick={() => setOpen(true)}
      >
        <FilterAlt />
      </IconButton>

      <Modal open={open} onClose={onClose}>
        <ModalDialog
          size='md'
          sx={{
            borderRadius: '16px',
            width: 'calc(100vw - 2rem)',
            maxWidth: '400px',
          }}
        >
          <ModalClose />
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
              <Typography level='title-sm'>Độ tuổi</Typography>
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
            <Box mt={2} display='flex' justifyContent='flex-end' gap={1}>
              <IconButton variant='solid' color='primary' onClick={onOk}>
                <Check />
              </IconButton>
              <IconButton variant='outlined' color='neutral' onClick={onClose}>
                <Clear />
              </IconButton>
            </Box>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </>
  );
}
