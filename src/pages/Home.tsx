import React, { useState } from 'react'
import SignUpForm from '../components/SignUpForm';


const style = {
    appContainer: 'max-w-[728px] mx-auto text-center',
}

const Home = () => {
    
    return(
        <div className={style.appContainer}>
        <SignUpForm />
        </div>
    );
};
  
export default Home;