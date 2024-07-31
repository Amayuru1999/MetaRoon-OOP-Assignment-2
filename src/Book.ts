import { LibraryItem } from './LibraryItem';

export class Book extends LibraryItem {
    private author: string;
    private ISBN: string;

    constructor(id: number, title: string, author: string, ISBN: string) {
        super(id, title);
        this.author = author;
        this.ISBN = ISBN;
    }

    public display(): void {
        console.log(`Book: ${this.title} by ${this.author} -> ISBN: ${this.ISBN}`);
    }
}
