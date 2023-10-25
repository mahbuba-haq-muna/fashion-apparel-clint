import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import SliderProduct from "./SliderProduct";


const Products = () => {

    const products = useLoaderData();
    return (
        <div>
            {/* <SliderProduct products={products}></SliderProduct> */}
            <h1 className="text-5xl font-semibold text-center my-10">our products {products.length}</h1>

            <div className="grid md:grid-cols-2 gap-20 my-10">
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    >

                    </ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;