import React, { useState, useRef, useEffect } from "react";
import './App.css';
export default function Input() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')

    const nameRef = useRef();
    const nameHandler = (event) => {
        setName(event.target.value)


    }
    useEffect(() => {
        nameRef.current.focus()
    }, [])
    const emailRef = useRef();
    const emailHandler = (event) => {
        setEmail(event.target.value)

    }
    function showAcessemail() {
        emailRef.current.focus()
    }


    const numberRef = useRef();
    const numberHandler = (event) => {
        setNumber(event.target.value)

    }
    function showAcessnumber() {
        numberRef.current.focus()
    }


    const addressRef = useRef();
    const addressHandler = (event) => {
        setAddress(event.target.value)

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

    const submit = (r) => {
        r.preventDefault()
        var data = {
            name: name,
            email: email,
            number: number,
            address: address,
        }

        return console.log(data);
    }




    return (
        <>


            <div className="centerDiv">

                <form onSubmit={submit}>

                    <label>Name:</label><input ref={nameRef} type="text" name="task" placeholder="Type Name Here!" onChange={nameHandler} onKeyPress={showAcessemail} />
                    <br />

                    <label>EmailID:</label><input ref={emailRef} input type="text" name="task" placeholder="Type Email ID Here!" onChange={emailHandler} onKeyPress={showAcessnumber} />
                    <br />


                    <label>Number:</label><input ref={numberRef} input type="text" name="task" placeholder="Type Number Here!" onChange={numberHandler} onKeyPress={showAcessaddress} />
                    <br />

                    <label>Address:</label><input ref={addressRef} input type="text" name="task" placeholder="Type Address Here!" onChange={addressHandler} />
                    <br />
                    <button type="button" onClick={clearInput}>Reset</button>
                    <br />

                    <input type="submit" value="submit" />

                </form>

            </div>
        </>
    )
}