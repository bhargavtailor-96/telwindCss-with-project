import React, {useState} from 'react'

function BuildTailwind() {
    const [color, setColor] = useState("black")
    return (
        <div className="w-full h-screen duration-200" style={{background: color}}>
            <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12  px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-5 rounded-xl">
                    <button  onClick={(color) => setColor("orange")} className="outline-none px-4 rounded-full" style={{backgroundColor: "orange", color: "white"}}>Orange</button>
                    <button  onClick={(color) => setColor("white")} className="outline-none px-4 rounded-full" style={{backgroundColor: "blue", color: "white"}}>White</button>
                    <button  onClick={(color) => setColor("green")} className="outline-none px-4 rounded-full" style={{backgroundColor: "green", color: "white"}}>Green</button>
                </div>
            </div>
        </div>
    )
}

export default BuildTailwind
