import {Book} from "./Book";
import {LibraryCatalogue} from "./LibraryCatalogue";
import {User} from "./User";
import {LibraryItem} from "./LibraryItem";

const user = new User("Amayuru", "amarasingheau@gmail.com");
const book1=new Book(1,"Madol Duwa","Martin Wickramasinghe","9789552000000");
const audioBook=new AudioBook(2,"Giraya","Martin Wickramasinghe",120);

const libraryCatalogue = LibraryCatalogue.getInstance();

//Adding items to the library
libraryCatalogue.addItem(book1);
libraryCatalogue.addItem(audioBook);

//Displaying items in the library
libraryCatalogue.displayItems();

//creating a new user

user.borrowBook("Madol Duwa");
user.manageLibrary()