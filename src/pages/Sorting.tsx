import React, { useEffect, useState } from 'react'
import { collection, orderBy, query, getDocs } from "firebase/firestore"
import {db} from '../firebase'

const style = {
    appContainer: 'max-w-[728px] mx-auto text-center',
    text: " block text-gray-700 text-sm font-bold mb-2",
    form: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    dropdown: "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",
    button: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto",
}

const defaultFormData = {
    teams:2
}

const Sorting = () => {
    class users{
        name:string;
        score:number;
        constructor(name: string, score:number) {
            this.name=name;
            this.score=score;
        }
    }
    const [inputs, setInputs] = useState(defaultFormData);
    const {teams} = inputs
    const [userdata,setuserdata]=useState<users[]>([])

    useEffect(() => {
        const getitems = async () =>{
            let userlist: users[] = []
            const q = query(collection(db, "users"), orderBy('total','desc'))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                const tempdata = doc.data()
                userlist.push({name:tempdata.name,score:tempdata.total});
             
            });
            setuserdata(userlist)
        }
        getitems();
    },[]);
    

    const onClick = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.id]: +e.target.value,
        }));
    };
    
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        var data: string[][] = []
        var counter = []
        
        for (var i=0; i<teams; i++){
            data.push([])
            counter.push(0)
        }
        for (var j=0; j<userdata.length; j++){
            let minimum = Math.min(...counter)
            let minimumindex = counter.indexOf(minimum)
            data[minimumindex].push(userdata[j].name)
            counter[minimumindex] += userdata[j].score
        } 
        console.log(data,counter)
    }
    
    return(
        <div className={style.appContainer}>
        <p className={style.text}>Number of players: {userdata.length}</p>
        <form className={style.form} onSubmit={onSubmit}>
            <div className="mb-6">
                <label className={style.text}>
                How many teams?
                </label>
                <select className={style.dropdown} id='teams' value={teams} onChange={onClick}>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                </select>
            </div>

            <div className="flex items-center justify-between">
                <button className={style.button} type="submit">
                    Submit
                </button>
            </div>

        </form>
        
        </div>
    );
};
  
export default Sorting;