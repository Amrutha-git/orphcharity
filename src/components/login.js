import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../img/logo.png'

 class login extends React.Component {
  render() {
    return (
<div>
      <div className="container">
          <div class="container is-login" id="mainContainer">
<div class="card card--login shadow-2dp is-active" id="logInForm">
    <div class="card__content">
        <center><img src={Logo} class="logoimg" alt=""></img></center>
        <div class="inputfield">
            <input class="inputfield__input" type="text"></input>
            <label class="inputfield__label">Username</label>
            <span class="inputfield__underline"></span>
        </div>
        <div class="inputfield">
            <input class="inputfield__input" type="password"></input>
            <label class="inputfield__label">Password</label>
            <span class="inputfield__underline"></span>
        </div>

        <span class="toggle toggle--block toggle--center">
            <input class="toggle__input" type="checkbox" id="remember"></input>
            <label class="toggle__label" for="remember">Remember me?</label>
            <label class="toggle__checkbox" for="remember">
                <span class="sr-only">Toggle remember me.</span>
                <svg class="toggle__checkbox-mark" viewBox="0 0 18 18" aria-label="check"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z"/></svg>
            </label>
        </span>

        <p class="text-center"><a href="#" data-toggle="form" data-target="amnesiaForm" data-type="amnesia">Forgot your password?</a></p>
    </div>
    <div class="card__action">
        <button class="btn btn--primary btn--block" type="button">
            Sign in
        </button>
    </div>
    <div class="card__action">
        <button class="btn btn--secondry btn--block" data-toggle="form" data-target="registerForm" data-type="register" type="button">
         {/* /* <Link to="/">Register</Link> */ }Register
        </button>
    </div>
</div>

<div class="card card--amnesia shadow-2dp" id="amnesiaForm">
    <div class="card__content">
        <center><img src="assets/img/logo.jpg" ></img></center>
        <div class="inputfield">
            <input class="inputfield__input" type="email"></input>
            <label class="inputfield__label">Email</label>
            <span class="inputfield__underline"></span>
        </div>
    </div>
    <div class="card__action">
        <button class="btn btn--flat btn--primary" type="button">
            Reset password
        </button>
        <button class="btn btn--flat" data-toggle="form" data-target="logInForm" data-type="login" type="button">
            Cancel
        </button>
    </div>
</div>
</div>

        
      </div>
      </div>
    )
  }
}
export default login
