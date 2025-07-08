import React, {useState} from 'react'

function MyComponent(){
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMaker, setCarMaker] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleCarAdd(){
    const newcar= {year: carYear,
                    maker: carMaker,
                    model: carModel
                  };
    
    setCars(c => [...c, newcar]);

    setCarYear(new Date().getFullYear());
    setCarMaker("");
    setCarModel("");
  }

  function handleRemoveCar(index){
    setCars(cars.filter((_, i) => i!==index));

  }

  function handleYearChange(event){
    setCarYear(event.target.value);
  }

  function handleMakerChange(event){
    setCarMaker(event.target.value);
  }

  function handleModelChange(event){
    setCarModel(event.target.value);
  }


  return(

    <div>
      <h2>List of the Cars</h2>
      <ul>
        {cars.map((car, index) =>
              <li key={index} onClick={() => handleRemoveCar(index)}>
                {car.year} {car.maker} {car.model}
              </li> )}
      </ul>

      <input type='number' value= {carYear} onChange= {handleYearChange} /><br />
      <input type='text' value= {carMaker} onChange= {handleMakerChange} placeholder='Enter the manufacturer' /><br />
      <input type='text' value= {carModel} onChange= {handleModelChange} placeholder='Enter the model' /><br />
      <button onClick={handleCarAdd}>Add</button>
    </div>
  )

}

export default MyComponent