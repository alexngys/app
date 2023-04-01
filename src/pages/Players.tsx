import React, { useEffect, useState } from 'react'
import { collection, orderBy, query, getDocs } from "firebase/firestore"
import {db} from '../firebase'

const style = {
    appContainer: "relative overflow-x-auto",
    text: " block text-gray-700 text-sm font-bold mb-2",
    table: "w-full text-sm text-left text-gray-500 dark:text-gray-400",
    tablehead: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
    th: "px-6 py-3",
    button: "font-medium text-blue-600 dark:text-blue-500 hover:underline",

}

const Players = () => {
    
    class users{
        name:string;
        dance:number;
        freestyle:number;
        constructor(name: string, dance: number, freestyle: number) {
            this.name=name;
            this.dance=dance; 
            this.freestyle=freestyle;
        }
    }

    let userlist: users[] = []

    const getitems = async () =>{
        const q = query(collection(db, "users"), orderBy('name'))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const tempdata = doc.data()
            userlist.push({name:tempdata.name,dance:tempdata.dance,freestyle:tempdata.freestyle});
         
        });
        setuserdata(userlist)
        
    }


    const [userdata,setuserdata]=useState<users[]>([])
    useEffect(() => {
        getitems()
    },[]);
    console.log(userdata)
    
    return(
        <div className={style.appContainer}>
            <p className={style.text}>Players</p>
            <table className={style.table}>
            <thead className={style.tablehead}>
                <tr>
                <th className={style.th} scope="col">Name</th>
                <th className={style.th} scope="col">Dance</th>
                <th className={style.th} scope="col">Freestyle</th>
                <th className={style.th} scope="col">Edit</th>
                <th className={style.th} scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {userdata.map((item) => {
                return (
                    <tr>
                    <td className={style.th}>{ item.name }</td>
                    <td className={style.th}>{ item.dance }</td>
                    <td className={style.th}>{ item.freestyle }</td>
                    <a href="#" className={style.button}>Edit</a>
                    <a href="#" className={style.button}>Delete</a>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>
    );
};
  
export default Players;