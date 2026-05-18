import { createContext, useState } from "react";

export const BookContext = createContext();
const BookProvider = ({ children }) => {
    const [storedBooks, SetStoredBooks] = useState([])
    const handelMarkAsRead = (currentBook) => {
        const isExistBook = storedBooks.find((book) => book.bookId === currentBook.bookId);
        if (isExistBook) {
            alert('The book is already exist ')
        }
        else {
            SetStoredBooks([...storedBooks, currentBook])
            alert(`${currentBook.bookName} is added to list`)
        }
    }
    const data ={
        storedBooks,
        SetStoredBooks,
        handelMarkAsRead,
    }
    return (
        <BookContext.Provider value={data} >{children}</BookContext.Provider>
    );
};

export default BookProvider;