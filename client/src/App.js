import React from 'react';
import Players from './Components/Players'
import './App.css';

class App extends React.Component{
    constructor(){
      super();
      this.state={players: []
      }
    }
  render(){
    return (
      <div>
      <Players />
      </div>
  );}
}

export default App;
