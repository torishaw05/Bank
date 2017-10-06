import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';


//import components and containers


class App extends Component {
  render() {
    return (

        <div className="main">
          <div className= "jumbotron">
            <h1 className= "bankshot">BankShot</h1>


            <p className= "lead">Your world wide banking leader.</p>
            <br></br>

            <p className='quick'>Quick, fast, and sometimes accurate account results.</p>
            <br></br>

              <Link className= "link" to="/users" role="button">Check Users</Link>
              <br></br>
              <br></br>

            </div>
        </div>


    );
  }
}

export default App;
