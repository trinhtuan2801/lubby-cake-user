import { getPlaiceholder } from 'plaiceholder';

export const getBlurImage = async (url: string) => {
  const buffer = await fetch(url).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );

  const data = await getPlaiceholder(buffer);
  return data;
};
