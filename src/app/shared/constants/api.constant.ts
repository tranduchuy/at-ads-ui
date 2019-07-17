import { environment } from '../../../environments/environment';

export namespace API {
  export namespace User {
    export const Login = environment.hostApi + '/api/users/login';
    export const Register = environment.hostApi + '/api/users/register';
    export const ForgotPassword = environment.hostApi + '/api/users/forget-password';
    export const ResendEmail = environment.hostApi + '/api/users/confirm/resend';
    export const ResetPassword = environment.hostApi + '/api/users/reset-password';
    export const LoginByGoogle = environment.hostApi + '/api/users/login-by-google';
    export const getLoggedInInfo = environment.hostApi + '/api/users/info';
  }
  export namespace AdwordsAccount {
    export const addAccount = environment.hostApi + '/api/account-adwords';
    export const autoBlockingRangeIP = environment.hostApi + '/account-adwords/{account_id}/auto-blocking-range-ip';
    export const autoBlocking3G4G = environment.hostApi + '/account-adwords/{account_id}/auto-blocking-3g4g';

  }
}
