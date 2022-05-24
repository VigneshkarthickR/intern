
import React, { useState } from "react";
import './App.css';
export function Task() {
    const [currentValue, setCurrentvalue] = useState('')
    const [data, setData] = useState([])
    const textHandler = (event) => {
        setCurrentvalue(event.target.value)
        console.log(currentValue)
    }
    const finalHandler = () => {
        setData([...data, currentValue])

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
            data.map((val) => {
                return (
                    <p style={h1style}>{val}</p>
                )
            })
        }
    </>
    )
}




