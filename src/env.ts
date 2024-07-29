const env = process.env;
const APP_ENV = {
  FIREBASE: {
    apiKey: env.API_KEY,
    authDomain: env.AUTH_DOMAIN,
    projectId: env.PROJECT_ID,
    storageBucket: env.STORAGE_BUCKET,
    messagingSenderId: env.MESSAGING_SENDER_ID,
    appId: env.APP_ID,
    measurementId: env.MEASUREMENT_ID,
  },
  REVALIDATE_CAKE_SECRET_KEY: env.REVALIDATE_CAKE_SECRET_KEY,
  WEB_BASE_URL: env.WEB_BASE_URL,
};
export default APP_ENV;
