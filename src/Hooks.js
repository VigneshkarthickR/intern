import React, { useEffect, useState } from "react";
export function Hooks() {
    const [count, setCount] = useState(10);

    const handleIncrementCount = () => {
        setCount(count + 1)
    }

    return <p onClick={handleIncrementCount}>{count}</p>
}

export function Effect() {

    const [data1, setdata1] = useState(20);
    const [data2, setdata2] = useState(100);
    const [todo, settodo] = useState({})
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => settodo(json))
    }, [])
    const increase = () => {
        setdata1(data1 + 1)
    }
    const next = () => {
        setdata2(data2 + 1)
    }
    return (
        <>
            <p onClick={increase}>{data1}</p>
            <p onClick={next}>{data2}</p>
            <p>{JSON.stringify(todo)}</p>
            <p>{todo.length}</p>
        </>
    )
}
export function Effectapi() {

    const [page, setPage] = useState('posts')
    const [response, setRespose] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${page}`)
            .then(response => response.json())
            .then(json => setRespose(json))
        console.log("use Effect");
    }, [page])
    return (
        <>
            < button onClick={() => setPage('posts')}>posts</button>
            < button onClick={() => setPage('comments')}>comments</button>
            {JSON.stringify(response)}
        </>
    )

}








