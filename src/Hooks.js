import React, { useState } from "react";
function Hooks() {
    let [count, setCount] = useState(10);
    return <p onClick={() => {
        setCount(count + 1)
    }}>{count}</p>
}

export default Hooks