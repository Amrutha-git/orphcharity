// export default register;
import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../img/logo.png'

 class register extends React.Component {
  render() {
    return (
      <div>
		   <div className="card card--register shadow-2dp" id="registerForm"></div>
        <div className="card__content">
 			<center><img src={Logo} alt=""></img> </center>
 			<div className="inputfield">
 				<input className="inputfield__input" type="email"></input>
 				<label className="inputfield__label">Email <i className="required">*</i></label>
 				<span className="inputfield__underline"></span>
 			</div>
 			<div className="inputfield">
 				<input className="inputfield__input" type="text"></input>
 				<label className="inputfield__label">Username <i className="required">*</i></label>
 				<span className="inputfield__underline"></span>
 			</div>
		 	<div className="inputfield">
				<input className="inputfield__input" type="password"></input>
		 		<label className="inputfield__label">Password <i className="required">*</i></label>
		 		<span className="inputfield__underline"></span>
		 	</div>
		 	<div className="inputfield">
		 		<input className="inputfield__input" type="password"></input>
		 		<label className="inputfield__label">Password Confirm <i className="required">*</i></label>
		 		<span className="inputfield__underline"></span>
			
		 </div>
 		<div className="card__action">
 			<button className="btn btn--primary btn--block" type="button">
 				Create account
 			</button>
 		</div>
 		<div className="card__action">
 			<button className="btn btn--secondry btn--block" data-toggle="form" data-target="logInForm" data-type="login" type="button">
 				 <Link to="/login">Log in</Link>
 			</button>
 		</div>
 	</div>

  </div>
        
     
    )
  }
}
export default register
