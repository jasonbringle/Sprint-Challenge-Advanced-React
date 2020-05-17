import React from 'react';
import Page from './Components/Page'
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
      .then(player => this.setState({players: player}))
      .catch(error => console.log('Error', error))
  }

  render(){
    return (
      <Page players={this.state.players}/>
  );}
}

export default App;
