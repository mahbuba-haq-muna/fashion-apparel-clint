import Swal from 'sweetalert2'

const AddProducts = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newProduct = { name, brand, type, description, price, rating, photo };
        console.log(newProduct);

        // send data 

        fetch('http://localhost:5000/product', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className=" bg-slate-100 p-10  ">
            <h1 className=" text-4xl text-center mt-10 mb-5 font-bold text-[#B55B4E] ">Add New Product</h1>
            <p className="text-2xl text-center mb-7">Please fill out the following fields with accurate product information</p>
            <form onSubmit={handleAddProduct}>
                {/* row */}
                <div className="md:flex gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder=" name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="brand" placeholder="brand name" className="input input-bordered md:w-full" />
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
                            <input type="text" placeholder="Type of Products" name="type" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="photo url" name="photo" className="input input-bordered w-full" />
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
                            <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* row */}
                <div className="md:flex gap-10">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">

                            <input type="textarea" name="description" placeholder="Short description" className="input input-bordered md:w-full p-10" />
                        </label>
                    </div>
                </div>


                <div className="w-full text-center">
                       <input type="submit" value="Add Product" className="btn bg-fuchsia-800 text-white hover:text-[#B55B4E] my-10 " />
                       </div>
            </form>
        </div>
    );
};


export default AddProducts;