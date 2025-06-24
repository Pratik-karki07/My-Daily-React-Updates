function List(){
  const fruits=["Apple", "Orange", "Banana",  "Grape", "Pear"];

  const listItems= fruits.map(fruit => <li> {fruit}</li>);
  
  return <ol>{listItems}</ol>;

}
export default List