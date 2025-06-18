import ProfilePic from './assets/Profile_150x150.jpg'
function Card(){

  return(
    <div className = "card">
      <img className="image" src={ProfilePic} alt="Display Picture"></img>
      <h1 className= "title">Pratik Karki.</h1>
      <p className= "text">I am a CSIT Student from Bhaktapur Multiple Campus.</p>
    </div>

  )
}

export default Card