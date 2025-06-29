import React, {useState} from 'react';

function Component(){
  const [name, setName]= useState("Guest");
  const [age, setAge]= useState(0);
  const [isEmployed, setIsEmployed]= useState(false);

  const  updateName= () => {
    setName("Sparky");
  };

  const incAge= () => {
    setAge(age+1);
  };

  const toggleStatus =() => {
    setIsEmployed(!isEmployed);
  };

  return(
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}> Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incAge}> Age Increment</button>
      
      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleStatus}> Toggle Status</button>


    </div>
  );
}

export default Component