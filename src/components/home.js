import React from 'react'
import Logo from '../img/logo.png'

 class home extends React.Component {
  render() {
    return (
      <div className="container">
        <header class="masthead">
    <div >
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Our Studio!</div>
        <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
        <a clasName="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
      </div>
    </div>
  </header>
      </div>
    )
  }
}

export default home