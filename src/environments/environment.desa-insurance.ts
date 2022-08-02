// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  kongUrl: 'api',
  configuration: {
    clientEntityCode: '002',
    productType: "ebox-standalone", // Tipos soportados: 'ebox-standalone' || 'ebox-recovery' || 'ebox-zbo'
    twoStepsVerification: true,
    recoveryConnection: false,
    recoveryUser: 'demo.gestor',
    recoveryPassword: '@Pintor32',
    recoveryExternalPath: '/pfs/j_spring_security_check?',
    recoverySchema: 'PROC01'
  }
};

/*
 * For easier debugging in develocalhostpment mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.