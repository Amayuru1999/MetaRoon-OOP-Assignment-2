export abstract class LibraryItem {
    protected id: number;
    protected title: string;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    public abstract display(): void;
}
