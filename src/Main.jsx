import React, { useState } from "react";
import data from './content.json'

export default function Main() {
    const [height, setHeight] = useState(10); // Initial height in Tailwind units
    const [width, setWidth] = useState(14); // Initial width in Tailwind units
    const [text, setText] = useState(40);
    const [title, setTitle] = useState(0);
    const handleClick = () => {
        if (title > 13) {
            setTitle(0);
        } else {
            setTitle(title + 1);
        }
        console.log(title);
        setHeight(height + 5.75);
        setWidth(width + 5.75)
        setText(text + 5.75);
    };
    const [hide, setHide] = useState(false);
    const handleButton = () => {
        setHide(true);
    }

    return (
        <>
            <div className={`flex flex-col h-screen ${hide ? 'hidden' : 'flex'} overflow-hidden`}>
                <div className="w-full h-1/2 flex flex-col items-center">
                    <div> <img src="https://media.tenor.com/kWlwZ9Hy6TAAAAAi/peach-goma-goma.gif" alt="" /></div>
                    <div className='text-[36px] font-medium text-black font-mono'>Will you be my valentine??</div>
                </div>
                <div className="w-full h-1/2 flex flex-row gap-6 items-end justify-between text-[36px] font-semibold">
                    <button onClick={handleButton} className={`bg-green-400 text-white rounded-xl z-10 fixed ${title < 1 ? 'left-10 bottom-10' : ''} max-h-screen`} style={{ height: `${height}rem`, width: `${width}rem`, fontSize: `${text}px` }}>YES</button>
                    <button onClick={handleClick} className={`bg-red-400 text-white h-[10rem] w-[14rem] fixed right-10 bottom-10 rounded-xl`}>{data[title].name}</button>
                </div>
            </div>
            <div className={`flex flex-col justify-center items-center ${hide ? 'flex' : 'hidden'}`}>
                <img src="https://media1.tenor.com/images/43d629baac93871acb0c6459d791d766/tenor.gif?itemid=16517349" alt="gif" className="h-[50vh]" />
                <div className="w-full h-[50vh] text-3xl font-bold flex justify-center">Yay!!!!</div>
            </div>
        </>
    );
}
