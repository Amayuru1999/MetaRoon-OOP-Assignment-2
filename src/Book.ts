export class Book{
    private id:number;
    private title:string;
    private author:string;
    private ISBN:string;

    constructor(id: number, title: string, author: string, ISBN: string){
        this.id = id;
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
    public display():void{
        console.log(`ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`);
    }
}