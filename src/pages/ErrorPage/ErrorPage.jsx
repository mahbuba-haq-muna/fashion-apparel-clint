import errorImg from "../../assets/img/404.jpg"
import Navbar from "../../components/Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img src={errorImg} alt="" className="w-full h-screen" />
        </div>
    );
};

export default ErrorPage;
