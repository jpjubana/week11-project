import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

import {Button} from 'reactstrap';
//import components and containers

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className= "jumbotron">
          <h1 className= "display-3" style={{color: 'white', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)'}}>BankShot</h1>
          <p className= "lead" style={{color: 'white', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)'}}>Your world wide banking leader.</p>
          <hr className= "my-4" style={{backgroundColor: 'white'}}/>
          <p style={{color: 'white', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)'}}>Quick, fast, and sometimes accurate account results.</p>
          <Link to="/users"><Button color='success' style={{marginTop: '20px'}}>Check Users</Button></Link>
        </div>
      </div>
    );
  }
}

export default App;
