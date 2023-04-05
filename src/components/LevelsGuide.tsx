import React from "react";

const style = {
    title:"text-2xl font-bold tracking-tight text-gray-900",
    card:"max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow my-6 mx-auto",
    cardheader:"mb-2 text-2xl font-bold tracking-tight text-gray-900 text-left",
    cardtext:"font-normal text-gray-700 text-left",
};

const LevelsGuide = () =>{
    return(
        <div>
            <p className={style.title}>Levels Guide</p>
            <div className={style.card}>
                <header className={style.cardheader}>Beginner</header>
                <p className={style.cardtext}>- You can perform basic movements like pushing and stopping</p>
            </div>
            <div className={style.card}>
                <header className={style.cardheader}>Novice</header>
                <p className={style.cardtext}>-  You can execute basic dance steps like peter pan and cross steps</p>
                <p className={style.cardtext}>-  You can do basic freestyle tricks like no-complys and shuv-its (not consistently)</p>
            </div>
            <div className={style.card}>
                <header className={style.cardheader}>Intermediate</header>
                <p className={style.cardtext}>-  You can perform basic dance step confidently along with more complex movements like pirouettes and variations</p>
                <p className={style.cardtext}>-  You can confidently execute basic freestyle skills along with more difficult tricks like pop-shuvits, no-comply big spins (not consistently)</p>
            </div>
            <div className={style.card}>
                <header className={style.cardheader}>Advanced</header>
                <p className={style.cardtext}>-  You can perform with confidence basic and complex dance steps with some variations</p>
                <p className={style.cardtext}>-  You can confidently execute basic and intermediate skating tricks</p>
                <p className={style.cardtext}>-  You can also perform more difficult tricks like kickflips and big spins with certain variations</p>
            </div>
        </div>
    )
}

export default LevelsGuide;