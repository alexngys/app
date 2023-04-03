import React, { useEffect, useState } from "react";
import { collection, orderBy, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const style = {
  appContainer: "relative overflow-x-auto",
  text: " block text-gray-700 text-sm font-bold mb-2",
  table: "w-full text-sm text-left text-gray-500 dark:text-gray-400",
  tablehead:
    "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
  th: "px-6 py-3",
  button: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
};

const Players = () => {
  class users {
    name: string;
    dance: number;
    freestyle: number;
    constructor(name: string, dance: number, freestyle: number) {
      this.name = name;
      this.dance = dance;
      this.freestyle = freestyle;
    }
  }

  

  const [userdata, setuserdata] = useState<users[]>([]);
  useEffect(() => {
    const getitems = async () => {
      let userlist: users[] = [];
      const q = query(collection(db, "users"), orderBy("name"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const tempdata = doc.data();
        userlist.push({
          name: tempdata.name,
          dance: tempdata.dance,
          freestyle: tempdata.freestyle,
        });
      });
      setuserdata(userlist);
    };
    getitems();
  }, []);

  console.log(userdata);

  return (
    <div className={style.appContainer}>
      <p className={style.text}>Number of players: {userdata.length}</p>
      <table className={style.table}>
        <thead className={style.tablehead}>
          <tr>
            <th className={style.th} scope="col">
              Name
            </th>
            <th className={style.th} scope="col">
              Dance
            </th>
            <th className={style.th} scope="col">
              Freestyle
            </th>
            <th className={style.th} scope="col">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((item) => {
            return (
              <tr key={item.name}>
                <td className={style.th}>{item.name}</td>
                <td className={style.th}>{item.dance}</td>
                <td className={style.th}>{item.freestyle}</td>
                <td>
                  <Link
                    to={`/editplayer/${item.name}`}
                    className={style.button}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Players;
