import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Contacts from './Components/Contacts';
import Employee from './Components/Employee'


function App() {
  return (
    <div className="App row">
      <div className="col-md-8 offset-md-1 offset-md-2">
        <Employee />
      </div>
    </div>
  );
}

export default App;
