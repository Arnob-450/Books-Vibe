import { createContext,  useState } from "react";
import { toast } from "react-toastify";
import { addReadListToLocalDB, getAllReadListFromLocalDB } from "../Utils/localDB";

export const BookContext = createContext();
const BookProvider = ({ children }) => {
    const [readList, SetReadList] = useState(()=>getAllReadListFromLocalDB())
    const [wishList, setWishList] = useState([])
    // useEffect(() => {
    //     const getReadListFromLocalDB =  getAllReadListFromLocalDB();
    //     console.log(getReadListFromLocalDB)
    //     SetReadList(getReadListFromLocalDB);
    // },[]
    // )


    const handelMarkAsRead = (currentBook) => {
        addReadListToLocalDB(currentBook)
        const isExistBook = readList.find((book) => book.bookId === currentBook.bookId);
        if (isExistBook) {
            toast.error('The book is already exist in read List ')
        }
        else {
            SetReadList([...readList, currentBook])
            toast.success(`${currentBook.bookName} is added to read list`)
        }
    }
    const handelWishList = (currentBook) => {

        const isExistInReadList = readList.find((book) => book.bookId === currentBook.bookId)

        if (isExistInReadList) {
            toast.error('This book is already in read list');
            return;
        }

        const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId);
        if (isExistBook) {
            toast.error('The book is already in wish list ')
        }
        else {
            setWishList([...wishList, currentBook])
            toast.success(`${currentBook.bookName} is added to wish list`)
        }
    }
    const data = {
        readList,
        SetReadList,
        handelMarkAsRead,
        wishList,
        setWishList,
        handelWishList,
    }
    return (
        <BookContext.Provider value={data} >{children}</BookContext.Provider>
    );
};

export default BookProvider;