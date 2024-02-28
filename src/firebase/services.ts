// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import APP_ENV from '@/app-env';

const firebaseConfig = APP_ENV.firebase;

export const app = initializeApp(firebaseConfig);

const firebaseServices = {
  firestore: getFirestore(app),
};

export default firebaseServices;
