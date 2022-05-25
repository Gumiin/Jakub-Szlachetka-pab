import{User} from "./Users"
import{Producer} from "./Producers"
import{Product} from "./Products"


export class ShoppingCart{
    id: number;
    userId: number;
    productID: number;
    isPayed: boolean;
    idOrder: boolean;
    delted: number;

    constructor(
        id?: number,
        ){
            if(id == undefined){
                this.id=Date.now();
            }
            else{
                this.id=id;
            }


        }
}