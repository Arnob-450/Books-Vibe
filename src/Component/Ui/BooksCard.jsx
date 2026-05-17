import { FaRegStar } from "react-icons/fa";


const BooksCard = ({book}) => {
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <figure className="p-6 ">
                    <img
                        className="rounded-xl h-88"
                        src={book.image}
                        alt={book.bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex gap-3">
                        {book.tags.map(tag => <div className=" badge text-green-500 bg-green-100 font-bold ">{tag}</div>)}
                    </div>
                    <h2 className="cart-title text-2xl">
                        {book.bookName}
                    </h2>
                    <p className="font-semibold text-lg">{book.author}</p>
                    <div className="card-actions justify-between border-t border-dashed pt-4 border-gray-300 ">
                        <div className="font-semibold">{book.category}</div>
                        <div className="font-semibold flex gap-2 items-center text-xl">{book.rating} <FaRegStar /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;