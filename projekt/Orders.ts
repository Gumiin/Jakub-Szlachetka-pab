import{ShoppingCart} from "./ShoppingCarts"
import{User} from "./Users"

export class Order{
    id:number;
    shopingCartId:number;
    price:number;
    statusID:number;

    constructor(shopingCartId:number,id?:number){
        if(id == undefined){
            this.id=Date.now();
        }
        else{
            this.id=id;
        }
    }
}