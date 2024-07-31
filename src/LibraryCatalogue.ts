import {Book} from "./Book";


export class LibraryCatalogue{
    private libraryItems: Book[] = [];

    public addItem(item: Book):void{
        this.libraryItems.push(item);
    }

    public displayItems():void {
        this.libraryItems.forEach(book => book.display());
    }
}