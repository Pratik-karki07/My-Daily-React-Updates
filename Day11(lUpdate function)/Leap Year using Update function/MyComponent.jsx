import React, {useState, useStates} from 'react'

function MyComponent(){
  const[leapyear, setLeapyear]= useState(2000);

  function nextYear(){
    setLeapyear(l => l+1);
    setLeapyear(l => l+1);
    setLeapyear(l => l+1);
    setLeapyear(l => l+1);
  }

  function prevYear(){
    if(leapyear >= 2004){
      setLeapyear(l => l-1);
      setLeapyear(l => l-1);
      setLeapyear(l => l-1);
      setLeapyear(l => l-1);
    }

    
  }

  function firstYear(){
    setLeapyear(2000);
   
  }
  return(
    <>
      <p>Leap Year: &nbsp;{leapyear} </p>
      <button onClick={prevYear}>Previous Leap Year</button>
      <button onClick={firstYear}>First Leap Year  of 21 century</button>
      <button onClick={nextYear}>Next Leap Year</button>
      
    </>
  );
}

export default MyComponent 