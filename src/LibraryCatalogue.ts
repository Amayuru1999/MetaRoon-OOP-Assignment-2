import {LibraryItem} from "./LibraryItem";


export class LibraryCatalogue{
    private static instance: LibraryCatalogue;
    private libraryItems: LibraryItem[] = [];

    private constructor() {}

    public static getInstance(): LibraryCatalogue {
        if(!LibraryCatalogue.instance){
            LibraryCatalogue.instance = new LibraryCatalogue();
        }
        return LibraryCatalogue.instance;
    }

    public addItem(item: LibraryItem):void{
        this.libraryItems.push(item);
    }

    public displayItems():void {
        this.libraryItems.forEach(item => item.display());
    }
}