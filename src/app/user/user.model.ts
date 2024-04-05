export class User {
    id: number = 0;
     email: string | undefined;
     firstname: string = '';
     lastname: string = '';
     password: string = '';
     role: 'user'|'admin' = 'user';

     constructor() {
    }
   }
