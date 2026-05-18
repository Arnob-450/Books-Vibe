import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Context/BookContext";
import BooksCard from "../Ui/BooksCard";

const ListedWishList = ({sortingType}) => {
    const { wishList } = useContext(BookContext);
     const [filteredWishList, setFilteredWishList]=useState(wishList);
        
        useEffect(()=>{
            if(sortingType){
                if(sortingType==='pages'){
                    const sortedData = [...wishList].sort((a,b)=>a.totalPages - b.totalPages);
                    console.log(sortedData,'sorted data');
                    setFilteredWishList(sortedData)
                }
                else if(sortingType==='rating'){
                   const sortedData = [...wishList].sort((a,b)=>a.rating - b.rating);
                    console.log(sortedData,'sorted data');
                    setFilteredWishList(sortedData)
                }
            }
    
        },[sortingType , wishList])
    
    if (filteredWishList.length === 0){
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
                    filteredWishList.map((book, index) => <BooksCard key={index} book={book}></BooksCard>)
                }
            </div>
        </div>  
        </div>
    );
};

export default ListedWishList;