import React from 'react'
import EditForm from '../components/EditForm';
import LevelsGuide from '../components/LevelsGuide';

const style = {
    appContainer: 'max-w-[728px] mx-auto text-center',
    pic : 'mx-auto object-contain h-48 w-full',
   
}

const EditPlayer = () => {
    
    return(
        <div className={style.appContainer}>
        <EditForm />
        <LevelsGuide />
        </div>
    );
};
  
export default EditPlayer;