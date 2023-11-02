import { Link} from "react-router-dom";


const Brand = ({ brand }) => {
    const { logo, name } = brand;
    return (
        <div>
            <Link to={"/products"}>
                <div className=" text-center p-10 ">
                    <div>
                        <p className="text-2xl font-semibold border-b-4  ">{name}</p>
                    </div>
                    <div>
                        <img src={logo} alt="Shoes" className="w-full md:h-48 mt-5" />
                    </div>


                </div>
            </Link>
        </div>
    );
};

export default Brand;