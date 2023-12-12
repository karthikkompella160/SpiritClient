class User {
    name: string;
    lstLogin: Date | null;
    email: string;
  
    constructor(name: string, lstLogin: Date | null, email: string) {
      this.name = name;
      this.lstLogin = lstLogin;
      this.email = email;
    }
  }
  
  export default User;
  