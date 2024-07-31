import { Book } from "./Book";
import { AudioBook } from "./AudioBook";
import { LibraryCatalogue } from "./LibraryCatalogue";
import { User } from "./User";

// Create a new user
const user = new User("Amayuru", "amarasingheau@gmail.com");

// Create library items
const book1 = new Book(1, "Madol Duwa", "Martin Wickramasinghe", "9789552000000");
const audioBook = new AudioBook(2, "Giraya", "Martin Wickramasinghe", 120);

// Get LibraryCatalogue Singleton instance
const libraryCatalogue = LibraryCatalogue.getInstance();

// Adding items to the library
libraryCatalogue.addItem(book1);
libraryCatalogue.addItem(audioBook);

// Displaying items in the library
libraryCatalogue.displayItems();

// Borrow a book
user.borrowBook("Madol Duwa");

// Manage library
user.manageLibrary();
