export class User {
    id: number = 0;
     email: string;
     username: string = '';
     password: string = '';
     role: 'user'|'admin' = 'user';

     constructor() {
    }
   }
