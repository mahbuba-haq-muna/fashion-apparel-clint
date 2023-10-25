

const ProductCard = ({ product }) => {
    const { name, brand, type, description, price, rating, photo } = product;
    return (
        <div>
            <div >
                <div className="card bg-purple-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={photo} alt="product" className="rounded-xl h-72 w-72" />
                    </figure>
                    <div className="card-body items-center ">
                        <h2 className="card-title my-5 text-[#B55B4E] text-2xl">Product name{name}</h2>
                       <div className="text-md font-semibold ">
                       <p>{description}</p>
                        <p>Type of Product: {type}</p>
                        <p>Brand: {brand}</p>
                        <p>Price: {price}$</p>
                        <p>Rating: {rating}</p>
                       </div>
                        <div className="card-actions flex gap-10 my-10">
                            <button className="btn btn-primary">Details</button>
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;