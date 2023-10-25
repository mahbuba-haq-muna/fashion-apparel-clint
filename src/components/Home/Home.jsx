import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Brand from "./Brand";


const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
           <Header></Header>
           <div>
            {/* {
                brands.map(brand => <Brand
                key={brand.id}
                brand={brand}
                ></Brand>)
            } */}
           </div>
        </div>
    );
};

export default Home;