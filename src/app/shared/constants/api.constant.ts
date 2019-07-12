import { environment } from '../../../environments/environment';

export namespace API {
  export namespace User {
    export const Login = environment.hostApi + '/api/users/login';
    export const Register = environment.hostApi + '/api/users/register';
    export const ForgotPassword = environment.hostApi + '/api/users/forget-password';
    export const ResendEmail = environment.hostApi + '/api/users/confirm/resend';
    export const ResetPassword = environment.hostApi + '/api/users/reset-password';
  }
}
