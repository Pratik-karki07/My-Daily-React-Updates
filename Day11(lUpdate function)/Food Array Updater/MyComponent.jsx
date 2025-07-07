import React, {useState, useStates} from 'react'

function MyComponent(){
  const [foods, setFoods] = useState(["Burger", "Wings", "Nuggets"]);

  function handleAddFood(){

    const newfood = document.getElementById("addfood").value;
    document.getElementById("addfood").value= "";
    setFoods(f => [...f, newfood]);
  }

  function handleRemoveFood(index){
    setFoods( foods.filter((_, i) => i !== index));
  }

  return(
    <div>
      <h1>List of Food</h1>
      <ul>
        {foods.map ((food,index) =>
                  <li key={index} 
                      onClick={() => handleRemoveFood(index)}>
                        {food}
                  </li>)}
      </ul>
      <input type="text" id="addfood" placeholder= "Enter the food" />
      
      <button onClick= {handleAddFood}>Add</button>
      

    </div>
  )
}

export default MyComponent 