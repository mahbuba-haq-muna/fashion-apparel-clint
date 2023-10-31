import { Link } from "react-router-dom";


const Brand = ({ brand }) => {
    const { logo } = brand;
    return (
        <div>
            <Link to={"/products"}>
                <div className="h-56 text-center p-10">
                    <div>
                        <img src={logo} alt="Shoes" className="w-full h-48" />
                    </div>
                   
                </div>
            </Link>
        </div>
    );
};

export default Brand;