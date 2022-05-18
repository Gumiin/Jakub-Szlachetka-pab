export class ProductCategory{
    id: number;
    name: string;
    delted: number;

    constructor(
        name: string,
        id?: number,
        ){
            if(id == undefined){
                this.id=Date.now();
            }
            else{
                this.id=id;
            }
            this.name = name;
            this.delted = 0;

        }
}