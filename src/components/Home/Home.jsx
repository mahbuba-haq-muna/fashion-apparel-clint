
import Header from "../Header/Header";
import Brand from "../Brand/Brand";
import Trending from "./Trending";
import { Link, useLoaderData } from "react-router-dom";
import About from "./About";



const Home = () => {
    const brands = useLoaderData();

    return (
        <div >
            <Header></Header>
            <div className="my-20 ">
                <h1 className="text-5xl text-center font-bold my-10">Our Brands</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 py-10 bg-purple-100">


                    {
                        brands?.map(brand => <Brand
                            key={brand.id}
                            brand={brand}
                        ></Brand>)
                    }
                    <Link to={'/noProduct'}>
                        <div className=" text-center p-10  ">
                            <div>
                                <p className="text-2xl font-semibold border-b-4  ">Levi's</p>
                            </div>
                            <div>
                                <img src="https://i.imgur.com/DaDdXkL.png" alt="Shoes" className="w-full md:h-48 mt-5" />
                            </div>
                        </div>
                    </Link>

                </div>
                <div className="my-20">

                    <Trending></Trending>
                </div>
                <div>
                    <About></About>
                </div>
            </div>
        </div>
    );
};

export default Home;