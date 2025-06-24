function List(){
  const fruits=[{id: 1, name: "Apple", calories: 95}, 
                {id: 2, name: "Orange", calories: 45}, 
                {id: 3, name: "Banana", calories: 105},  
                {id: 4, name: "Grape", calories: 15},
                {id: 5, name: "Pear", calories: 38}];

  const highCalFruits= fruits.filter(fruit=> fruit.calories>90);
  
  //fruits.sort((a,b)=> b.name.localeCompare(a.name));
  highCalFruits.sort((a,b)=> a.calories -  b.calories);

  const listItems= highCalFruits.map(highCalFruit=> <li key={highCalFruit.id}> 
                                                            {highCalFruit.name}: &nbsp; &nbsp;
                                                            {highCalFruit.calories} </li>);
  
  return <ol>{listItems}</ol>;

}
export default List