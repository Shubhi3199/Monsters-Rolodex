import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
        monsters : [
            {
                name : "Frankeistein",
                id : 0
            },
            {
                name : "Dracula",
                id : 1
            },
            {
                name : "Zombie",
                id : 2
            }
        ]
    }
  }
  render() {
    return (
        <div className="App">
            {this.state.monsters.map( (monster) => (
                <h1>{monster.name}</h1>
            ))}
        </div>
    );
  }
}
export default App;
