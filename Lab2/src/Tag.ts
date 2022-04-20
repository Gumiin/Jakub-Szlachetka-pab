export class Tags{
    id?: number;
    name: string;

    constructor(name: string, id?: number){
        if(id == undefined)
        this.id = Date.now();
        else{
        this.id=id;
        }
        //if(name == undefined)
        this.name = name;
    }
}