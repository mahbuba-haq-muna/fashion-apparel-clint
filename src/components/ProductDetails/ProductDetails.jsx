import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ProductDetails = () => {
    const details = useLoaderData();


    const handleAddCart = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product has been successfully add to cart',
            showConfirmButton: false,
            timer: 1500
        })
    }


    return (
        <div>


            <div className="hero py-20 mb-20 bg-purple-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={details.photo} className="md:w-1/2 rounded-lg shadow-2xl" />
                    <div className="md:p-20">
                        <h1 className="text-3xl md:text-5xl font-bold text-[#B55B4E]">{details.name}</h1>
                        <p className="pt-6 font-semibold text-lg">Price: {details.price}$</p>
                        <p className="py-6">{details.details_description}</p>
                        <button onClick={handleAddCart} className="btn  bg-fuchsia-800 text-white hover:text-black">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;