
export class Producer{
    id: number;
    name: string;
    country : string;
    address: string;
    createDate: string;
    contactNumber: string;
    delted: number;

    constructor(
        name: string,
        country: string,
        address: string,
        createDate: string,
        contactNumber: string,
        id?: number,
        ){
            if(id == undefined){
                this.id=Date.now();
            }
            else{
                this.id=id;
            }

            this.name = name;
            this.country = country;
            this.address = address;
            if(createDate == undefined){
                this.createDate = Date.now().toString();
            }
            else{
                this.createDate = createDate;
            }
            this.contactNumber = contactNumber;
            this.delted = 0;

        }
}