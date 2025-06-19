import Student from './Student.jsx'

function App() {
  return(
    <>
      <Student name="Aayush" age={20} isStudent={true}/>
      <Student name="Ajay" age={23} isStudent={true}/>
      <Student name="Aashish" age={26} isStudent={false}/>
    </>

  );
  
  
}

export default App
