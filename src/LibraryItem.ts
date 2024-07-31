abstract class LibraryItem {
    protected id:number;
    protected title: string;

    constructor(id:number, title:string){
        this.id = id;
        this.title = title;
    }
    public abstract  display():void;
}

class Book extends LibraryItem {
    private author: string;
    private ISBN: string;

    constructor(id:number, title:string, author:string, ISBN:string){
        super(id, title);
        this.author = author;
        this.ISBN = ISBN;
    }
    public display():void{
        console.log(`Book: ${this.title} by ${this.author} -> ISBN: ${this.ISBN}`);
    }
}

class AudiBook extends LibraryItem{
    private narrator: string;
    private length: number;

    constructor(id: number, title: string, narrator: string, length: number){
        super(id,title);
        this.narrator = narrator;
        this.length = length;
    }
    public display():void{
        console.log(`Audiobook: ${this.title} by ${this.narrator} -> Length: ${this.length} minutes`);
    }
}