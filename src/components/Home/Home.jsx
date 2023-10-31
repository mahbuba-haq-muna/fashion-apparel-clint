
import Header from "../Header/Header";
import Brand from "../Brand/Brand";
import Trending from "./Trending";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const brands = useLoaderData();
    
    return (
        <div>
           <Header></Header>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

           
            {
                brands?.map(brand => <Brand
                key={brand.id}
                brand={brand}
                ></Brand>)
            }
           </div>
           <div className="my-20">
            <Trending></Trending>
           </div>
        </div>
    );
};

export default Home;