import { Link, NavLink } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Toggle from "../Toggle/Toggle";


const Navbar = () => {

   
    
    const { user, logOut } = useContext(AuthContext);

   

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    console.log(user)

    const navLinks = <>
        <li className=" font-semibold"><NavLink to="/">Home</NavLink></li>
        <li className=" font-semibold"><NavLink to="/addProducts">Add products</NavLink></li>
        <li className=" font-semibold"><NavLink to="/cart">My Cart</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base `navbar ${theme}`">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className=" normal-case text-xl"><span className="text-[#B55B4E] font-bold">Style</span>In</a>

                   

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>

                <div className="navbar-end">


                    <label tabIndex={0} className="btn btn-circle avatar mr-3 border ">

                        {
                            user ? <img src={user.photoURL
                            } alt="" className="rounded-full" />
                                :
                                <div>
                                    <FaUser></FaUser>
                                </div>

                        }

                    </label>

                    {
                        user ? user.displayName
                            :
                            <p></p>

                    }

                    {
                        user ? <button onClick={handleLogOut} className="btn">Sign Out</button>
                            :
                            <Link to="/login">
                                <button className="btn">Login</button>
                            </Link>
                    }


                </div>

            </div>
        </div>
    );
};

export default Navbar;