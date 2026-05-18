import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import BooksCard from "../Ui/BooksCard";

const ListedWishList = () => {
    const { wishList } = useContext(BookContext);
    
    if (wishList.length === 0){
        return(
            <div className="h-[50vh] bg-gray-100 flex items-center justify-center rounded-4xl">
                 <h2 className="font-bold text-3xl">No Wish List Data Found</h2>
            </div>
        );
    }
    return (
        <div>
            <div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap 4 ">

                {
                    wishList.map((book, index) => <BooksCard key={index} book={book}></BooksCard>)
                }
            </div>
        </div>  
        </div>
    );
};

export default ListedWishList;