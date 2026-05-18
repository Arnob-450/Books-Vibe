import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Context/BookContext";
import BooksCard from "../Ui/BooksCard";

const ListedReadList = ({sortingType}) => {
    const { readList} = useContext(BookContext);
    const [filteredReadList, setFilteredReadList]=useState(readList);
    
    useEffect(()=>{
        if(sortingType){
            if(sortingType==='pages'){
                const sortedData = [...readList].sort((a,b)=>a.totalPages - b.totalPages);
                console.log(sortedData,'sorted data');
                setFilteredReadList(sortedData)
            }
            else if(sortingType==='rating'){
               const sortedData = [...readList].sort((a,b)=>a.rating - b.rating);
                console.log(sortedData,'sorted data');
                setFilteredReadList(sortedData)
            }
        }

    },[sortingType , readList])


     if ( filteredReadList.length === 0){
        return(
            <div className="h-[50vh] bg-gray-100 flex items-center justify-center rounded-4xl">
                 <h2 className="font-bold text-3xl">No Read List Data Found</h2>
            </div>
        );
    }
    return (
        <div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap 4">

                {
                    filteredReadList.map((book, index) => <BooksCard key={index} book={book}></BooksCard>)
                }
            </div>
        </div>  
    );
};

export default ListedReadList;