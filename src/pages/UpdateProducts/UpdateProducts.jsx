import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateProducts = () => {
    const product = useLoaderData();
    const { name, brand, type, description, price, rating, photo, _id } = product;

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const updateProduct = { name, brand, type, description, price, rating, photo };
        console.log(updateProduct);

        // send data 

        fetch(`http://localhost:5000/product/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateProduct)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'product Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }    


        return (
            <div>
                <div className=" bg-purple-100 p-10  ">
                    <h1 className=" text-4xl text-center mt-10 mb-5 font-bold text-[#B55B4E] ">{name}</h1>
                    <p className="text-2xl text-center mb-7">Please fill out the following fields to update {name}</p>
                    <form onSubmit={handleUpdateProduct}>
                        {/* row */}
                        <div className="md:flex gap-10">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={name} placeholder=" name" name="name" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="brand" defaultValue={brand} placeholder="brand name" className="input input-bordered md:w-full" />
                                </label>
                            </div>
                        </div>
                        {/* row */}
                        <div className="md:flex gap-10">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Type of Products</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={type} placeholder="Type of Products" name="type" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">photo url</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={photo} placeholder="photo url" name="photo" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* row */}
                        <div className="md:flex gap-10">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={price} placeholder="Price" name="price" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered md:w-full" />
                                </label>
                            </div>
                        </div>
                        {/* row */}
                        


                       <div className="w-full text-center">
                       <input type="submit" value="Update Product" className="btn bg-fuchsia-800 text-white hover:text-[#B55B4E] my-10 " />
                       </div>
                    </form>
                </div>
            </div>
        );
    };

    export default UpdateProducts;