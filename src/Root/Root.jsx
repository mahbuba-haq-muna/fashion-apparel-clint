import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../App.css"
import { useState } from "react";
import Toggle from "../components/Toggle/Toggle"




const Root = () => {
    const [isDark, setIsDark] = useState(true);
    
        return (
        <div className="px-2 md:px-10" data-theme={isDark ? "dark" : "light"}>
            <Toggle 
                isChecked={isDark}
                handleChange={() => setIsDark(!isDark)}
            >
                
            </Toggle>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
    
};

export default Root;