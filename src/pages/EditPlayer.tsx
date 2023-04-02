import React, { useState } from 'react'
import EditForm from '../components/EditForm';

const style = {
    appContainer: 'max-w-[728px] mx-auto text-center',
    pic : 'mx-auto object-contain h-48 w-full',
   
}

const EditPlayer = () => {
    
    return(
        <div className={style.appContainer}>
        <EditForm />
        </div>
    );
};
  
export default EditPlayer;