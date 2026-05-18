// import { use } from "react";

import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../Context/BookContext";
// const booksPromise =fetch ('/booksData.json')
// .then ((res) => res.json())

const BookDetails = () => {
    
    const { id } = useParams()
    // console.log(id)
    // const books = use(booksPromise)
    const books = useLoaderData();
    // console.log(books)
    const expectedBook = books.find(book => book.bookId == id)
    const{bookName ,author ,image, review ,totalPages , category, tags, publisher, yearOfPublishing}=expectedBook
    const {handelMarkAsRead ,storedBooks} = useContext(BookContext);
    console.log(storedBooks)
    return (
        <div>
            <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto rounded-4xl my-10  ">
                <figure className="w-full flex items-center justify-center bg-gray-100 rounded-4xl">
                    <img
                        className="h-100 "
                        src={image}
                        alt="Album" />
                        
                </figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title text-2xl">{bookName}</h2>
                    <h2 className="card-title">{author}</h2>
                    <p className="py-2 border-y">{category}</p>
                    <p>Review: {review}</p>
                   <div className="flex gap-3">
                        {tags.map((tag,index) => <div key={index} className=" badge text-green-500 bg-green-100 font-bold ">{tag}</div>)}
                    </div>
                    <div className=" border-t space-y-3">
                        <div className=" flex justify-between items-center gap-2">
                            <span>Number of pages: </span> <span>{totalPages}</span>
                        </div>
                        <div className=" flex justify-between items-center gap-2">
                            <span>Publisher: </span> <span>{publisher}</span>
                        </div>
                        <div className=" flex justify-between items-center gap-2">
                            <span>Publish time: </span> <span>{yearOfPublishing}</span>
                        </div>
                        <div className=" flex item-center gap-2">
                        <button className="btn "onClick={()=>handelMarkAsRead(expectedBook)}>Mark as Read</button>
                        <button className="btn btn-primary">Add to wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;