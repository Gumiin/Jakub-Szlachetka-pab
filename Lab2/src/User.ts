import{Note} from "./Note"

export class User{
    id?:number;
    notes?:Note[] = [];
    userLogin: string;
    password:string;
    token?:string;

    constructor(userLogin:string,password:string,token?:string){
        this.id = Date.now();
        this.userLogin = userLogin;
        this.password = password;
        this.token = token;
    }

    setToken(addToken:string){
        this.token = addToken
    }

    tokenValid(addToken:string){
        return addToken != this.token? false : true
    }
}