import React from 'react';
import{BrowserRouter,Switch,Route}from 'react-router-dom' ;
import login from './components/login';
import signup from './components/signup';
//import firebase from './firebase';
import './App.css';

class App extends React.Component{
  
  render(){
    return(
      <BrowserRouter>
      <div className="App">
      {/* {this.state.user ?(<signup/>):(<login/>)} */}
   
    
    <Switch>
        <Route exact path="/signup"component={signup}/>
        <Route exact path="/login"component={login}/>
        
        </Switch>
      </div>
      </BrowserRouter>

    );
  }
}
 

export default App;
