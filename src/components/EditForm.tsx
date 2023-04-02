import React, { ChangeEvent, FormEvent, useState } from "react";
import {db} from '../firebase'
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const style = {
    form: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    title:"block text-gray-700 text-lg font-bold mb-2",
    text: "block text-gray-700 text-sm font-bold mb-2",
    username: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    dropdown: "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",
    button: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
}

const defaultFormData = {
    dance:1,
    freestyle:1,
}


const EditForm = () =>{
    const name = window.location.pathname
    const namespace = decodeURI(name)
    const nameremove = namespace.split("/").pop()
    let namefinal:string = nameremove!; 

    const [inputs, setInputs] = useState(defaultFormData);
    const {dance,freestyle} = inputs
    const navigate = useNavigate();

    const onClick = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.id]: +e.target.value,
        }));
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userRef = doc(db, 'users' , namefinal);
        await updateDoc(userRef, {
            dance:dance,
            freestyle:freestyle,
            total:dance+freestyle
          });
        
        setInputs(defaultFormData);
        navigate("/players")
    };

    const deletuser = async() =>{
        await deleteDoc(doc(db, 'users', namefinal));
        navigate("/players")
    }
    return(
        <div>
            <form className={style.form} onSubmit={onSubmit}>
            <div className="mb-6">
                <label className={style.text}>
                {namefinal}
                </label>
                
            </div>
            
            <div className="mb-6">
                <label className={style.text}>
                What is your dance skill level?
                </label>
                <select className={style.dropdown} id='dance' value={dance} onChange={onClick}>
                    <option value={1}>Beginner </option>
                    <option value={2}>Intermediate </option>
                    <option value={3}>Advanced</option>
                    <option value={4}>Pro</option>
                </select>
            </div>

            <div className="mb-6">
                <label className={style.text}>
                What is your freestyle skill level?
                </label>
                <select className={style.dropdown} id='freestyle' value={freestyle} onChange={onClick}>
                    <option value={1}>Beginner</option>
                    <option value={2}>Intermediate</option>
                    <option value={3}>Advanced</option>
                    <option value={4}>Pro</option>
                </select>
            </div>

            <div className="flex items-center justify-between">
                <button className={style.button} type="submit">
                    Submit
                </button>
            </div>

            </form>
            <button className={style.button} type="submit" onClick={deletuser}>
                    Delete
            </button>
        </div>
    )
}

export default EditForm