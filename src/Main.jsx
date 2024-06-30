import React, { useState } from "react";
import data from './content.json'
import { useNavigate } from "react-router-dom";
export default function  Main (){
    const [height, setHeight] = useState(28); // Initial height in Tailwind units
    const [width, setWidth] = useState(40); // Initial height in Tailwind units
    const [text, setText] = useState(28);
    const [title, setTitle] = useState(0);
    const handleClick = () => {
        if (title > 13){
            setTitle(0);
        }
        else{
            setTitle(title + 1);
        }
        console.log(title);
        setHeight(height + 5);
        setWidth(width + 5)
        setText(text + 5);
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
            <div className="w-full h-[50vh] flex flex-row gap-6 items-center text-3xl font-semibold">
                <button onClick={handleButton}  className={`bg-green-400 text-white fixed left-56 bottom-32 rounded-xl z-10`} style={{ height: `${height * 4}px`, width: `${width * 4}px`, fontSize: `${text}px` }}>YES</button>
                <button onClick={handleClick} className={`bg-red-400 text-white h-28 w-40 fixed right-56 bottom-32 rounded-xl`}>{data[title].name}</button>
            </div>
        </div>
    );
}
