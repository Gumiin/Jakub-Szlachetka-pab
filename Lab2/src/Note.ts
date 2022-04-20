import {Tags} from "./Tag"

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

            tags.forEach(tag =>{
                if(!noteKeeper.tagsArr.includes(tag)){
                  noteKeeper.POST(tag)
                }
              })

            this.title = title;
            this.content = content;
            this.createDate = createDate;
            this.tags = new Array();
        }
}