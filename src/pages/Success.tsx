import React from 'react'
import logo from '../logo.png'
import { Link } from "react-router-dom";
const style = {
    appContainer: 'max-w-[728px] mx-auto text-center',
    pic : 'mx-auto object-contain h-48 w-full',
    title: "block text-gray-700 text-lg font-bold my-6",
    link:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
}

const Success = () => {
    
    return(
        <div className={style.appContainer}>
        <img src={logo} alt="Logo" className={style.pic} />
        <p className={style.title}>Thank you for signing in</p>
        <Link className={style.link} to={`/`}>Sign in another particpant</Link>
        </div>
    );
};
  
export default Success;