import React from 'react'
import './Navbar.css'


function Navbar() {


  return (
    <div id='Navbar' className='container bg-transparent'>
    <nav className="navbar navbar-expand-lg bg-transparent sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand text-white fira-sans-condensed-medium" style={{fontSize:"40px"}} href="/"><span className='zen-kaku-gothic-new-regular' style={{backgroundColor:'rgb(67 143 255)', fontWeight:"bold", padding:"0 5px", borderRadius:"5px"}}>会</span>Hamza</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-white lato-regular mx-3" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white lato-regular mx-3" href="/">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white lato-regular mx-3" href="/">Projects</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link text-white lato-regular mx-3" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white lato-regular mx-3" href="/">Contact</a>
        </li>
        <li className="nav-item">
          <button className="nav-link text-white lato-regular mx-3" style={{backgroundColor:"#F39C12"}} href="/">Lets Talk</button>
        </li>
      </ul>
    </div>
   
  </div>
</nav>
</div>
      
  )
}

export default Navbar
