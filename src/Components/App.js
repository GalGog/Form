import React, { Component } from 'react';
import NameForm from './NameForm';
import Reservation from "./Reservation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameForm />
        <hr/>
        <Reservation />


      </div>
    );
  }
}

export default App;
