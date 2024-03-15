export enum COLLECTION {
  Cakes = 'cakes',
}

export enum Gender {
  MALE = 'M',
  FEMALE = 'F',
}

export const genderKeys = Object.values(Gender);

export enum Age {
  ZERO_TO_FIVE = '0-5',
  SIX_TO_TWELVE = '6-12',
  ABOVE_TWELVE = '12+',
}

export const ageKeys = Object.values(Age);

export const GenderStr: Record<Gender, string> = {
  [Gender.MALE]: 'Nam',
  [Gender.FEMALE]: 'Nữ',
};

export const AgeStr: Record<Age, string> = {
  [Age.ZERO_TO_FIVE]: '0-5',
  [Age.SIX_TO_TWELVE]: '6-12',
  [Age.ABOVE_TWELVE]: '12+',
};
