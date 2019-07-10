import { environment } from '../../../environments/environment';

export namespace API {
  export namespace User {
    export const Login = environment.hostApi + '/api/users/login';
    export const Register = environment.hostApi + '/api/users/register';
  }
}
