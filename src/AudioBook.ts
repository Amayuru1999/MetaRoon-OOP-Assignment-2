import { LibraryItem } from './LibraryItem';

export class AudioBook extends LibraryItem {
    private narrator: string;
    private length: number;

    constructor(id: number, title: string, narrator: string, length: number) {
        super(id, title);
        this.narrator = narrator;
        this.length = length;
    }

    public display(): void {
        console.log(`Audiobook: ${this.title} by ${this.narrator} -> Length: ${this.length} minutes`);
    }
}
