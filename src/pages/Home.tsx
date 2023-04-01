import React, { useState } from 'react'
import SignUpForm from '../components/SignUpForm';
import logo from '../logo.png'
const style = {
    appContainer: 'max-w-[728px] mx-auto text-center',
    pic : 'mx-auto object-contain h-48 w-full',
   
}

const Home = () => {
    
    return(
        <div className={style.appContainer}>
        <img src={logo} alt="Logo" className={style.pic} />
        <SignUpForm />
        </div>
    );
};
  
export default Home;