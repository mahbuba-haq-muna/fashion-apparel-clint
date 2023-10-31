import { useLoaderData } from "react-router-dom";


const UpdateProducts = () => {
    const product= useLoaderData();
    const { name, brand, type, description, price, rating, photo, _id } = product;
    console.log(product)
    return (
        <div>
            update new products: {product.name}
        </div>
    );
};

export default UpdateProducts;