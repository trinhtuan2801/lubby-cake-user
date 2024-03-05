export enum COLLECTION {
  Users = 'users',
  Cakes = 'cakes',
  Categories = 'categories',
}

export enum CssVar {
  HEADER_HEIGHT = '--Header-height',
  PAGE_WIDTH = '--Page-width',
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
