import bookImg from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] rounded-2xl container my-4 mx-auto ">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between ">
                    <img
                        src={bookImg}
                        className="max-w-sm rounded-lg "
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> Your bookshelf</h1>
                        
                        <button className="btn btn-success mt-10 ">View the list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;