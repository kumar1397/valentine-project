import React, { useState } from "react";
import data from './content.json'
import { useNavigate } from "react-router-dom";
export default function  Main (){
    const [height, setHeight] = useState(24); // Initial height in Tailwind units
    const [width, setWidth] = useState(36); // Initial height in Tailwind units
    const [text, setText] = useState(24);
    const [title, setTitle] = useState(0);
    const handleClick = () => {
        if (title > 13){
            setTitle(0);
        }
        else{
            setTitle(title + 1);
        }
        console.log(title);
        setHeight(height + 3);
        setWidth(width + 3)
        setText(text + 3);
    };
    const Navigate = useNavigate();
    const handleButton = () =>{
        Navigate('/final')
    }
   
    return (
        <div className="flex flex-col ">
            <div className="w-full h-[50vh] flex flex-col justify-center items-center">
                <div> <img src="https://c.tenor.com/Cdt73E8a-BUAAAAC/mochi-peach.gif" alt="" /></div>
                <div className='text-3xl font-medium text-black '>Will you be my valentine??</div>

            </div>
            <div className="w-full h-[50vh] flex flex-row gap-6 justify-around items-center text-2xl font-semibold">
                <button onClick={handleButton}  className={`bg-green-400 text-white }`} style={{ height: `${height * 4}px`, width: `${width * 4}px`, fontSize: `${text}px` }}>YES</button>
                <button onClick={handleClick} className={`bg-red-400 text-white h-24 w-36`}>{data[title].name}</button>
            </div>
        </div>
    );
}
