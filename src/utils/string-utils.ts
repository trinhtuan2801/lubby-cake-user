export const numberWithCommas = (num: number | string | null | undefined) => {
  if (num == null) return '';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const setUrlParam = (name: string, value: string) => {
  const params = new URLSearchParams(window.location.search);
  params.set(name, value);
  return params.toString();
};

export const removeUrlParam = (name: string) => {
  const params = new URLSearchParams(window.location.search);
  params.delete(name);
  return params.toString();
};
