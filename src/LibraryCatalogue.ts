import {Book} from "./Book";


export class LibraryCatalogue{
    private static instance: LibraryCatalogue;
    private libraryItems: Book[] = [];

    private constructor() {}

    public static getInstance(): LibraryCatalogue {
        if(!LibraryCatalogue.instance){
            LibraryCatalogue.instance = new LibraryCatalogue();
        }
        return LibraryCatalogue.instance;
    }

    public addItem(item: Book):void{
        this.libraryItems.push(item);
    }

    public displayItems():void {
        this.libraryItems.forEach(book => book.display());
    }
}