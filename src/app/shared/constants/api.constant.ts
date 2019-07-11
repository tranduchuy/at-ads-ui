import { environment } from '../../../environments/environment';

export namespace API {
  export namespace User {
    export const Login = environment.hostApi + '/api/users/login';
    export const Register = environment.hostApi + '/api/users/register';
    export const forgotPassword = environment.hostApi + '/api/users/forget-password';
    export const resendEmail = environment.hostApi + '/api/users/confirm/resend';
    export const resetPassword = environment.hostApi + '/api/users/reset-password';
  }
}
