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

    GET(obj:string, id:number,token){
        if(obj === "note"){
            const obj = this.notes.find((note) => note.id ===id);
            return obj
        }
        else if(obj === "tag"){
            const obj = this.tags.find((tag) => tag.id === id);
            return obj
        }
    }

    POST(obj:any,token){
        if(obj instanceof Note){
            this.notes.push(obj)
            this.updateStorage();
            return(`${obj} added`)
        }
        else if(obj instanceof Tag){
            this.tags.push(obj)
            this.updateStorage();
            return(`${obj} added`)
        }
        else{
            return("Invalid object")
        }
    }

    DELETE(obj:string,id:number, token){
        if(obj === "note"){
            this.notes.splice(this.notes.findIndex(obj=> obj.id === id),1)
            this.updateStorage();
            return `Your note was deleted at id:${id}`
        }
        else if(obj === "tag"){
            this.tags.splice(this.tags.findIndex(obj=> obj.id === id),1)
            return `Your tag was deleted at id:${id}`
        }
        else{
            return(`Tehere is no object with id:${id}`)
        }
    }

    PUT(obj:any,id:number,token){
        if(obj instanceof Note){
            const indexToChange = this.notes.findIndex(obj=> obj.id === id);
            this.notes[indexToChange] = obj;
            this.updateStorage();
            return `Your object has been changed to ${JSON.stringify(obj)}`
        }
        else if(obj instanceof Tag){
            const indexToChange = this.tags.findIndex(obj=> obj.id === id);
            this.tags[indexToChange] = obj;
            this.updateStorage();
            return `Your object has been changed to ${JSON.stringify(obj)}`
        }
        else{
            return "You can't alter that object"
        }
    }
}


export default new NoteKeeper();