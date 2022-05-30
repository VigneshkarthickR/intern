
import React from "react";
import './App.css';
import Child from "./Child";

export default function Parent() {

    return (
        <>
            <div className="centerDiv">
                <h4>
                    Parent
                </h4>
                <div className="box">
                    <Child />
                </div>
            </div>
        </>
    )
}