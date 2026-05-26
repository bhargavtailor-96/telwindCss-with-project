import React, {useCallback, useEffect, useRef, useState} from "react";

function UseEffectRefAndCallback() {
    const [length, setLength] = useState(8);
    const [numberAllow, setNumberAllow] = useState(false);
    const [charAllow, setCharAllow] = useState(false);
    const [password, setPassword] = useState("");

    const passwordGenerator = useCallback(() => {
        let pwd = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const num = "0123456789";
        const char = "~!`@#$%^&*()_-+={}[]?";
        if(numberAllow) str += num;
        if(charAllow) str += char;

        for (let i = 1; i <= length; i++){
            let char = Math.floor(Math.random() * str.length + 1);
            pwd += str.charAt(char);
        }
        setPassword(pwd)
    }, [length, numberAllow, charAllow, setPassword]);
    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllow, charAllow, passwordGenerator]);
    // useRef hook
    const passwordRef= useRef(null);
    const copyPassword = useCallback(() => {
        window.navigator.clipboard.writeText(password)
    }, [password])
    return (
        <div style={{backgroundColor: "black" }} className="w-full h-screen">
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
                <h2 style={{color: "white" }}>Password Generator</h2>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input type="text"
                    ref={passwordRef}
                    value={password}
                    placeholder="Password"
                    className="outline-none w-full py-1 px-3 bg-white"
                    readOnly
                    />
                    <button onClick={copyPassword} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer">Copy</button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex item-center gap-x-1">
                        <input
                            type="range"
                            min={8}
                            max={100}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e) => {setLength(e.target.value)} }
                        />
                        <label htmlFor="">Length: {length}</label>
                    </div>
                    <div className="flex item-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numberAllow}
                            onChange={() => {setNumberAllow((prevs) => !prevs)}} />
                        <label htmlFor="">Numbers</label>
                    </div>
                    <div className="flex item-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={charAllow}
                            onChange={() => {setCharAllow((prev) => !prev)}} />
                        <label htmlFor="">Character</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseEffectRefAndCallback
