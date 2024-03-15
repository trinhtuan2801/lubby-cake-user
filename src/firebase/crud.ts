import { COLLECTION } from '@/constants';
import { collection, getDocs } from 'firebase/firestore';
import firebaseServices from './services';

const { firestore } = firebaseServices;

export const getDocuments = (collectionName: COLLECTION) => {
  return getDocs(collection(firestore, collectionName));
};
