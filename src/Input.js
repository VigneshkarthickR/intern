import React, { useState, useRef, useEffect } from "react";

import './App.css';
export default function Input() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const nameRef = useRef();
    const Handler = (event) => {
        event.preventDefault()
        setName(event.target.value);

    }
    useEffect(() => {
        nameRef.current.focus()
    }, [])




    const emailRef = useRef();
    const emailHandler = (event) => {
        setEmail(event.target.value)
        console.log(setEmail);
    }
    function showAcessemail() {
        emailRef.current.focus()
    }


    const numberRef = useRef();
    const numberHandler = (event) => {
        setNumber(event.target.value)
        console.log(setNumber);
    }
    function showAcessnumber() {
        numberRef.current.focus()
    }


    const addressRef = useRef();
    const addressHandler = (event) => {
        setAddress(event.target.value)
        console.log(setAddress);
    }
    function showAcessaddress() {
        addressRef.current.focus()
    }

    const clearInput = () => {
        nameRef.current.value = ""
        emailRef.current.value = ""
        numberRef.current.value = ""
        addressRef.current.value = ""
    };




    return (
        <>

            <div className="centerDiv">

                <form >

                    Name:<input ref={nameRef} input type="text" name="task" placeholder="Type Name Here!" onChange={nameRef} />
                    <button type="button" onClick={showAcessemail}>submit</button>
                    <br />

                    EmailID:<input ref={emailRef} input type="text" name="task" placeholder="Type Email ID Here!" onChange={numberHandler} />
                    <button type="button" onClick={showAcessnumber}>submit</button>
                    <br />

                    Number:<input ref={numberRef} input type="text" name="task" placeholder="Type Number Here!" onChange={emailHandler} />
                    <button type="button" onClick={showAcessaddress}>submit</button>
                    <br />

                    Address:<input ref={addressRef} input type="text" name="task" placeholder="Type Address Here!" onChange={addressHandler} />
                    <br />

                    <button type="button" onClick={clearInput}>Reset</button>

                    <br />


                </form>

            </div>
        </>
    )
}