import React, { Component } from 'react';
import NameForm from './NameForm';
import Reservation from "./Reservation";
import FancyBorder from "./FancyBorder";
import Calculator from "./Calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameForm />
        <hr/>
        <Reservation />
          <hr/>
          <FancyBorder/>
          <Calculator />


      </div>
    );
  }
}

export default App;
