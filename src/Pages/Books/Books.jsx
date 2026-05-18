import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";


const Books = () => {
     const { storedBooks} = useContext(BookContext);
     console.log(storedBooks)
    return (
       
        <div>
          <h3>Books</h3> 
        </div>
    );
};

export default Books;