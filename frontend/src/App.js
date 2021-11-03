import React, { useState } from 'react';




function App() {
  const [counter, setCounter] = useState(0) 

  function handleSoma(){
    setCounter(counter + 1)
  }

  function handleMenos(){
    setCounter(counter - 1)
  }

  return (
    <>
      <h1> {counter} </h1>
      <button onClick={handleMenos}></button>
      <button onClick={handleSoma}> + </button>
    </>
  );
}

export default App;
