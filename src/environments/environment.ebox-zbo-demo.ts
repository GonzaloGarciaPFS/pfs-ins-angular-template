export const environment = {
  production: true,
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