import React from "react";

function Counter({count, setCount, isReset}) {

  // function result() {
  //   console.log("Clicked");
  // }
  
  const clickTimes =  count >= 1 ? "time" : "times";

  function resetButton() {
    return ( 
    <button onClick={() => setCount(0)}>Reset</button>
    )
  }

  function counterButton() {
    return (
    <button onClick={() => setCount( prev => prev + 1)}>Clicked {count} {clickTimes}</button>
    )
  }

  return (
    <>
      {isReset === true ? resetButton() : counterButton()}
    </>
    
  );
}

export default Counter;

