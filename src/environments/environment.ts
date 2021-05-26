// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://www.googleapis.com/youtube/v3/search',
  API_KEY: 'AIzaSyB09kgDrkrPbQIm2SOqoXwen9OdjgfPJOM',
  firebase: {
    apiKey: 'AIzaSyD2i9oEt9SlIniZxjnvOgVy4alaMHs0F-U',
    authDomain: 'funnelityapp.firebaseapp.com',
    projectId: 'funnelityapp',
    storageBucket: 'funnelityapp.appspot.com',
    messagingSenderId: '44553603653',
    appId: '1:44553603653:web:4edd79e252e2e766e1712c',
    measurementId: 'G-Q1SXSQVFK6'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
