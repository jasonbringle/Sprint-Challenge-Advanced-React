import React from 'react';
import Players from './Components/Players'
import './App.css';

class App extends React.Component{
    constructor(){
      super();
      this.state={
        players: []
      }
    }

  componentDidMount(){
      fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      // .then(res => console.log('info from API', res))
      .then(player => this.setState({players: player}))
      .catch(error => console.log('Error', error))
  }


  render(){
    return (
      <div>
      <Players players={this.state.players}/>
      </div>
  );}
}

export default App;
