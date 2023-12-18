import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { adminLogin } from "../slices/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../utils/token";



const NavBar = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = getAccessToken();
    const { user } = useSelector(state => state.admin);



    useEffect(() => {
        if (user) {
            navigate('/admin/dashboard');
        }
    }, [navigate,user]);

    const handleLogin = () => {
        const accessKey = window.prompt("Enter admin access key");
        console.log(accessKey)
        if (accessKey !== '' && accessKey !== null) {
            dispatch(adminLogin(accessKey));
           
        }
    };

    return (
        <div>
            <nav className="bg-white bg-opacity-75 rounded-full  ml-10 mr-10 mt-6 border-gray-200 shadow-md mb-5">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link className="flex items-center">
                        <img src="https://pngimg.com/d/wikipedia_PNG35.png" className="h-8 mr-3" alt="logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                            Tiny Wiki
                        </span>
                    </Link>
                    <div className="flex md:order-2">
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition w-full md:w-auto"
                        >
                            Admin
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar