// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  hostApi: 'http://192.168.0.108:3000',
  googleAuth2ClientID: '246364548184-qi67l6sl8p9rlv8e8ev1p6329caf8gfr.apps.googleusercontent.com',
  hostTracking: 'http://159.65.11.195:3001/static/tracking.js',
  oauth2RedirectUri: 'http://localhost:4200'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
