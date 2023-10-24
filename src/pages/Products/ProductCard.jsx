

const ProductCard = ({ product }) => {
    const { name, brand, type, description, price, rating, photo } = product;
    return (
        <div>
            <div >
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={photo} alt="product" className="rounded-xl h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"></h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;