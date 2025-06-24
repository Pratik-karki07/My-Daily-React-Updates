function List(){
  const fruits=[{id: 1, name: "Apple", calories: 95}, 
                {id: 2, name: "Orange", calories: 45}, 
                {id: 3, name: "Banana", calories: 105},  
                {id: 4, name: "Grape", calories: 15},
                {id: 5, name: "Pear", calories: 38}];
  
  //fruits.sort((a,b)=> b.name.localeCompare(a.name));
  fruits.sort((a,b)=> a.calories -  b.calories);

  const listItems= fruits.map(fruit=> <li key={fruit.id}> 
                                              {fruit.name}: &nbsp; &nbsp;
                                              {fruit.calories} </li>);
  
  return <ol>{listItems}</ol>;

}
export default List