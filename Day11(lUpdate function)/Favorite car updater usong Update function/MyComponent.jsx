import React, {useState, useStates} from 'react'

function MyComponent(){
  const [car, setCar] = useState ( {year : 2000, 
                                    maker : "Ford", 
                                    model : "Mustang"});
  function handleYearChange(event){
    setCar(c => ({...c, year: event.target.value}));
  }

  function handleMakerChange(event){
    setCar(c => ({...c, maker: event.target.value }))
  }

  function handleModelChange(event){
    setCar(c => ({...c, model: event.target.value }))
  }
  return(
    <>
      <p>Your favourite car is: &nbsp; {car.year} {car.maker} {car.model}</p>
      <input type="number" value={car.year} onChange={handleYearChange} /><br />
      <input type="text" value={car.maker} onChange={handleMakerChange} /><br />
      <input type="text" value={car.model} onChange={handleModelChange} /><br />
    </>
  )

}

export default MyComponent 