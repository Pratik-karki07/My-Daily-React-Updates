import React,  {useState} from 'react'

function MyComponent(){
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [payment, setPayment] = useState("");
  const [delivery, setDelivery] = useState("");
  const [comment, setComment]= useState("");


  function handleNameChange(event){
    setName(event.target.value);
  }

  function handleQuantityChange(event){
    setQuantity(event.target.value);
  }

  function handlePaymentChange(event){
    setPayment(event.target.value);
  }

  function handleDeliveryChange(event){
    setDelivery(event.target.value);
  }

  function handleCommentChange(event){
    setComment(event.target.value);
  }

  return(
    <div>
      <input value={name} onChange= {handleNameChange}/>
      <p>Name: {name}</p><br/>
      
      <input value={quantity} onChange= {handleQuantityChange} type="number"/>
      <p>Quantity: {quantity}</p><br/>

      <select onChange={handlePaymentChange}>
        <option value=""> Select an Delivery option</option>
        <option value="E-sewa"> E-sewa</option>
        <option value="Khalti">Khalti</option>
        <option value= "Credit Card"> Credit Card</option>
      </select>
      <p> Payment Method: {payment} </p><br/>

      <label>
        <input type="radio" value="Pickup" 
               checked={delivery === "Pickup"} onChange={handleDeliveryChange} />
        Pickup
      </label><br/>
      <label>
        <input type="radio" value="Home Delivery" 
               checked={delivery === "Home Delivery"} onChange={handleDeliveryChange} />
        Home Delivery
      </label>  
      <p>Delivery Method: {delivery}</p><br />

      <input value={comment} onChange= {handleCommentChange} placeholder='Enter your Comment'/>
      <p>Comment: {comment}</p><br/>

    </div>
  )

}

export default MyComponent 