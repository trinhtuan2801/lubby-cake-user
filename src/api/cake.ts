import { Age, COLLECTION, Gender } from '@/constants';
import {
  addDocument,
  deleteDocument,
  getDocuments,
  updateDocument,
} from '@/firebase/crud';

export interface CakePriceWithoutId {
  size: string;
  price: number | null;
  oldPrice: number | null;
}
export interface CakePrice extends CakePriceWithoutId {
  id: string;
}

export interface CakeWithoutId {
  name: string;
  desc: string;
  prices: CakePrice[];
  images: string[];
  age: Age | null;
  gender: Gender | null;
}

export interface CakeForm extends Omit<CakeWithoutId, 'categories'> {}

export interface Cake extends CakeWithoutId {
  id: string;
}

export const getCakes = async () => {
  const doc = await getDocuments(COLLECTION.Cakes);
  const arr = doc.docs;
  return arr.map((v) => {
    const cakeWithoutId = v.data() as CakeWithoutId;
    const cake: Cake = {
      ...cakeWithoutId,
      id: v.id,
    };
    return cake;
  });
};

export const deleteCake = (id: string) => {
  return deleteDocument(COLLECTION.Cakes, id);
};

export const addCake = async (newCake: CakeForm) => {
  return addDocument(COLLECTION.Cakes, newCake);
};

export const updateCake = async (
  id: string,
  updatedData: Partial<CakeForm>,
) => {
  return updateDocument(COLLECTION.Cakes, id, updatedData);
};

export default {
  getCakes,
  deleteCake,
  addCake,
  updateCake,
};
