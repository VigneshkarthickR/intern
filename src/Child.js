import React from "react";
import './App.css';
import './App'
// import { getContext } from "./App";

export default function Child() {

    // const finalContext = useContext(getContext)
    // console.log('Child...', finalContext);

    return (
        <>
            <div className="centerDiv">
                <h4>
                    Child
                    {/* {finalContext} */}
                </h4>

            </div>
        </>
    )
}