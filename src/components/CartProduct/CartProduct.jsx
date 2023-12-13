
import Swal from "sweetalert2";


const CartProduct = ({ aCart, product, setProduct }) => {
    const { name, brand, type, description, price, rating, photo, _id } = aCart;
    

    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://fashion-apparel-server-navy.vercel.app/cart/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                              )

                            const remaining = product.filter(pro => pro._id !== _id);
                            setProduct(remaining)  
                        }

                    })
            }
        })
    }

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Album" className=" h-44" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-lg">{name}</h2>
                    <p>{type}</p>
                    <p>Price: {price}$</p>
                    <div className="card-actions ">
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white ">Delete from cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;