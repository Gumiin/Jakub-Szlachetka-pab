import{Producer} from "./Producers"
import{ProductCategory} from "./ProductCategories"



export class Product{
    id: number;
    name: string;
    categoryId: number;
    categoryName: string;
    amount: number;
    price: number;
    isDiscounted: boolean;
    discountedPrice: number;
    producerId: number;
    producerName:string;
    createDate: string;
    isOnSale: boolean;
    delted: number;

    constructor(
        name: string,
        categoryId: number,
        amount: number,
        price: number,
        producerId: number,
        createDate: string,
        isOnSale: boolean,
        id?: number,
        isDiscounted?: boolean,
        discountedPrice?: number,
        ){
            if(id == undefined){
                this.id=Date.now();
            }
            else{
                this.id=id;
            }
            if(createDate == undefined){
                this.createDate = Date.now().toString();
            }
            else{
                this.createDate = createDate;
            }
            if(isDiscounted == undefined){
                this.isDiscounted=false;
                if(discountedPrice == undefined || discountedPrice <1){
                    this.discountedPrice=0;
                }
                else{
                    this.discountedPrice=discountedPrice;
                }
            }
            else{
                this.isDiscounted=isDiscounted;
                this.discountedPrice=0;
            }

            this.name=name;
            this.categoryId=categoryId;
            this.amount=amount;
            this.price=price;
            this.producerId=producerId;
            this.isOnSale=isOnSale;


        }
}