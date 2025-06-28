function Button(){
  const handleClick = (e) => e.target.textContent="Hey";

  return(<button onClick= {handleClick}>Click me</button>);


}

export default Button