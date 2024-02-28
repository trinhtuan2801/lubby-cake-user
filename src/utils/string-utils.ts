export const numberWithCommas = (num: number | string | null | undefined) => {
  if (num == null) return '';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
