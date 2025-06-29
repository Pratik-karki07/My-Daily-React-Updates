import React, {useState} from 'react';

function IntegerHookOperation(){

  const [number, setNumber]= useState(0);

  const incrementNumber= () => {
    setNumber(number+1); 
  };

  const decrementNumber= () => {
    setNumber (number-1); 
  };

  const resetNumber= () => {
    setNumber (0); 
  };

  return(
   <div className= "all">

    <h2 className="num">Number: &nbsp; {number}</h2>

    <button className= "upward" onClick={incrementNumber}>Increment </button>

    <button className= "downward" onClick={decrementNumber}>Decrement</button>

    <button className= "reset" onClick={resetNumber}>Reset</button>

   </div>
  );
}



export default IntegerHookOperation