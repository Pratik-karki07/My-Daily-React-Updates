function UserGreetings(props){
  const Welcome=  <h2 className="welcome">
                  Welcome {props.username}
                  </h2>


  const Login=  <h2 className="login">
                  Please Login first...
                  </h2>

  return(props.isLoggedIn ? Welcome  : Login );
}
export default UserGreetings