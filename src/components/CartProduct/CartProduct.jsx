

const CartProduct = ({ aCart }) => {
    const { name, brand, type, description, price, rating, photo, _id } = aCart;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Album" className=" h-44"/></figure>
                <div className="card-body">
                    <h2 className="card-title text-lg">{name}</h2>
                    <p>{type}</p>
                    <p>Price: {price}$</p>
                    <div className="card-actions ">
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;