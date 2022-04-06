import {Tags} from "./Tags"

export class Note{
    id: number;
    title: string;
    content: string;
    createDate: string;
    tags: Tags[];

    constructor(
        title: string,
        content: string,
        createDate: string,
        tags: Tags[],
        id?: number,
        ){
            if(id == undefined){
                this.id=Date.now();
            }
            else{
                this.id=id;
            }

            this.title = title;
            this.content = content;
            this.createDate = createDate;
            this.tags = new Array();
        }
}