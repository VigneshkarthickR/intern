
import React, { useState, useRef, useEffect } from "react";
import './App.css';
export function Task() {
    const [currentValue, setCurrentvalue] = useState('')
    const [data, setData] = useState([])
    const textHandler = (event) => {
        setCurrentvalue(event.target.value);
        console.log(currentValue);
    }
    const finalHandler = () => {
        setData([...data, currentValue])
        console.log(data);
    }
    const h1style = {
        textAlign: "center"
    }

    return (<>

        <div className="centerDiv">
            <form>
                <input type="text" name="Task" onChange={textHandler} />
                <button type="button" onClick={finalHandler}>save</button>

            </form>
        </div>
        <h1 style={h1style}>{currentValue}</h1>

        {
            data.map((data) => {
                return (<>

                    <p style={h1style}>{data}</p>
                </>
                )
            })
        }
    </>
    )
}

export function UseRef() {
    console.log("rerender");

    const [valu, Setvalu] = useState('')
    const inputRef = useRef();

    const Handler = (event) => {
        Setvalu(event.target.value)
    }
    function showDom() {
        console.log(inputRef.current);
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])


    const h1style = {
        textAlign: "center"
    }




    return (
        <>
            <div className="centerDiv">
                <form>
                    <input ref={inputRef} type="text" name="Task" placeholder="Type Here" onChange={Handler} />
                    <button type="button" onClick={showDom}>showDom</button>

                </form>
                <p style={h1style}>{valu}</p>
            </div></>
    )


}




