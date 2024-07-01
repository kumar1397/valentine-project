import React, { useState } from "react";
import data from './content.json'
export default function Main() {
    const [height, setHeight] = useState(40); // Initial height in Tailwind units
    const [width, setWidth] = useState(56); // Initial height in Tailwind units
    const [text, setText] = useState(40);
    const [title, setTitle] = useState(0);
    const handleClick = () => {
        if (title > 13) {
            setTitle(0);
        }
        else {
            setTitle(title + 1);
        }
        console.log(title);
        setHeight(height + 23);
        setWidth(width + 23)
        setText(text + 23);
    };
    const [hide,setHide] = useState(false);
    const handleButton = () => {
        setHide(true);
    }

    return (
        <>
            <div className={`flex flex-col ${hide ? 'hidden' : 'flex'} overflow-hidden`}>
                <div className="w-full h-[50vh] flex flex-col items-center">
                    <div> <img src="https://c.tenor.com/Cdt73E8a-BUAAAAC/mochi-peach.gif" alt="" /></div>
                    <div className='text-[36px] font-medium text-black font-mono'>Will you be my valentine??</div>

                </div>
                <div className="w-full h-[50vh] flex flex-row gap-6 items-center justify-between text-[40px] font-semibold ">
                    <button onClick={handleButton} className={`bg-green-400 text-white rounded-xl z-10 ml-10 mr-10`} style={{ height: `${height * 4}px`, width: `${width * 4}px`, fontSize: `${text}px` }}>YES</button>
                    <button onClick={handleClick} className={`bg-red-400 text-white h-40 w-56 fixed right-10 bottom-36 rounded-xl`}>{data[title].name}</button>
                </div>
            </div>
            <div className={`flex flex-col justify-center items-center ${hide ? 'flex' : 'hidden'}`}>
                <img src="https://media1.tenor.com/images/43d629baac93871acb0c6459d791d766/tenor.gif?itemid=16517349" alt="" className="h-[50vh]" />
                <div className="w-full h-[50vh] text-3xl font-bold flex justify-center">Yay!!!!</div>

            </div>
        </>
    );
}
