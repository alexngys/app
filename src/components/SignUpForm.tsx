import React, { ChangeEvent, FormEvent, useState } from "react";
import {db} from '../firebase'
import { addDoc, collection } from "firebase/firestore";

const style = {
    form: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    text: "block text-gray-700 text-sm font-bold mb-2",
    username: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    dropdown: "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",
    button: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
}

const defaultFormData = {
    name:'',
    dance:1,
    freestyle:1,
}

const SignUpForm = () =>{
    const [inputs, setInputs] = useState(defaultFormData);
    const {name,dance,freestyle} = inputs
    
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
    }));
    };
    
    const onClick = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.id]: +e.target.value,
        }));
    };


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name===""){
            alert('Please enter a valid name')
            return
        }
        await addDoc(collection(db, 'users'), {
            name: name,
            dance: dance,
            freestyle: freestyle
        })
        alert('Thank you '+name+' for registering')
        setInputs(defaultFormData);
    };

    return(
        <div>
            <form className={style.form} onSubmit={onSubmit}>
            <div className="mb-6">
                <label className={style.text}>
                Enter your full name
                </label>
                <input className={style.username} id="name" type="text" placeholder="Full Name" value={name} onChange={onChange}></input>
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
        </div>
    )
}

export default SignUpForm