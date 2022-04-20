import {Tag} from "./Tag"
import fs from "fs"
import {Note} from "./Note"
import {User} from "./User"

export class NoteKeeper{
    Users: User[] = []
    notes:Note[] = []
    tags:Tag[] = []

    construct(){
        this.readStorage()
    }

    private async readStorage(): Promise<void> {
        try{
            this.notes = JSON.parse(await fs.promises.readFile("src/data/notes.json", "utf8"));
            this.tags = JSON.parse(await fs.promises.readFile("src/data/tags.json", "utf8"));
        }
        catch(error){
            console.log(error);
        }
    }

    private async updateStorage(): Promise<void> {
        try{
            await fs.promises.writeFile("src/data/notes.json",JSON.stringify(this.notes));
            await fs.promises.writeFile("src/data/notes.json",JSON.stringify(this.tags));
        }
        catch(error){
            console.log(error);
        }
    }

    getTagsList() {
        return this.tags
    }

    Get(obj:string, id:number,token){
        if(obj === "note"){
            const obj = this.notes.find((note) => note.id ===id);
            return obj
        }
        else if(obj === "tag"){
            const obj = this.tags.find((tag) => tag.id === id);
            return obj
        }
    }
}