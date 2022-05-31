import React, { useState } from 'react';
import './App.css';
import Input from './Input';
import Parent from './Parent';

// import { Hooks, Effect, Effectapi } from './Hooks';
// import { Task, UseRef } from './Task';

// const h3style = { border: '2px solid green' }
// export const getContext = createContext();
const h3style = {
  textAlign: "center"
}

function App() {

  // const [val, setVal] = useState("   usecontext  ");

  // console.log(setVal);


  return (
    <>
      {/* <getContext.Provider value={val}>
        <div className="box">
          <h3 style={h3style}>Home</h3>
          <div className="box">
            <Parent />
          </div>

        </div> */}

      {/* <Hooks />
      <Effect />
      <Effectapi />
      <Task />
      <UseRef /> */}
      {/* </getContext.Provider> */}
      <Input />

    </>
  );
}

export default App;

