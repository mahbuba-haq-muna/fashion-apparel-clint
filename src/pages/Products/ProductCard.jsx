import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    const { name, brand, type, description, price, rating, photo, _id } = product;
    return (
        <div>
            <div >
                <div className="card bg-purple-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={photo} alt="product" className="rounded-xl h-72 w-72" />
                    </figure>
                    <div className="card-body items-center ">
                        <h2 className="card-title my-5 text-[#B55B4E] text-2xl"> {name}</h2>
                       <div className="text-md font-semibold ">
                       <p>{description}</p>
                        <p>Type of Product: {type}</p>
                        <p>Brand: {brand}</p>
                        <p>Price: {price}$</p>
                        <p>Rating: {rating}</p>
                       </div>
                        <div className="card-actions flex gap-10 my-10 ">
                            <Link to={`/products/${_id}`} ><button className="btn bg-fuchsia-800 text-white hover:text-[#B55B4E]">Details</button></Link>
                            <Link to={`/updateProducts/${_id}`}><button className="btn bg-fuchsia-800 text-white hover:text-[#B55B4E]">Update</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;