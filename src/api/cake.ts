import { Age, COLLECTION, Gender } from '@/constants';
import { getDocuments } from '@/firebase/crud';
import { getBlurImage } from '@/utils/image-utils';
import { unstable_cache } from 'next/cache';
import { CACHE_KEY } from './queryKeys';

export interface CakePrice {
  id: string;
  size: string;
  price: number | null;
  oldPrice: number | null;
}

export interface CakeFromApi {
  name: string;
  desc: string;
  prices: CakePrice[];
  images: string[];
  age: Age | null;
  gender: Gender | null;
  categoryIds: string[];
}

export interface Cake extends CakeFromApi {
  id: string;
  blurImages: string[];
  imageDims: { width: number; height: number }[];
}

export const getCakes = async () => {
  const doc = await getDocuments(COLLECTION.Cakes);
  const arr = doc.docs;
  const result = await Promise.all(
    arr.map(async (v) => {
      const cakeWithoutId = v.data() as CakeFromApi;

      const blurImages = await Promise.all(
        cakeWithoutId.images.map((image) => getBlurImage(image)),
      );

      const cake: Cake = {
        id: v.id,
        ...cakeWithoutId,
        blurImages: blurImages.map((image) => image.base64),
        imageDims: blurImages.map(({ metadata: { width, height } }) => ({
          width,
          height,
        })),
      };

      return cake;
    }),
  );
  return result;
};

export const nextGetCakes = unstable_cache(getCakes, [CACHE_KEY.CAKES], {
  tags: [CACHE_KEY.CAKES],
});
