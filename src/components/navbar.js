import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../img/logo.png'

const Navbar =(props)=>{
    return(
        <div>
            {/* <!-- Navbar (sit on top) --> */}
{/* <div class="w3-top">
  <div class="w3-bar w3-white w3-padding w3-card" >
    <a href="#home" class="w3-bar-item w3-button">Gourmet au Catering</a>
    <!-- Right-sided navbar links. Hide them on small screens --> 
    <div class="w3-right w3-hide-small">
      <a href="/home" class="w3-bar-item w3-button">Home</a>
      <a href="/registration" class="w3-bar-item w3-button">Register</a>
      <a href="/login" class="w3-bar-item w3-button">Login</a>
    </div>
  </div>
</div> */}
            {/* <nav className="navbar navbar-default navbar-expand-sm  fixed-top navbar-trans">
            <div className="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
        <li>
      <Link to="/home">Home</Link>
      </li>
      <li>
          <Link to="/registration">Register</Link>
    </li>
    <li>
          <Link to="/login">Log in</Link>
    </li>
     
    </ul>

    </nav> */}

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Spread Smiles</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="navbar navbar-collapse collapse " id="navbarSupportedContent">
  <ul class="nav navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/registration">Register</a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/login" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Login
        </a>
        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/login">Public</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}
      </li>
      {/* <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> */}
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
    )
}


export default Navbar