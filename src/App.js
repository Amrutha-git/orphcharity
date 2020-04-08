import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import Register from  './components/register';
import Login from './components/login'
import Footer from './components/footer'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


class App extends React.Component {
  render()
{
  return (
    <div>
      <Router>
    <Navbar/>
  
    <Switch>
      <Route exact path='/home' component={Home}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/registration' component={Register}/>
   
     </Switch>
     <Footer/>
     </Router>
    
     </div>
  );
}
}

export default App;
