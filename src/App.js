import React , { Component } from 'react';
import './App.css';

import { CardList } from "./components/card-list/card-list.components";

class App extends Component{
  constructor(){
    super();
    this.state={
        monsters : []
    }
  }
  // 1. fetch data of monsters from the json placeholder API
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({monsters : users}))    // 2. json placeholder API returns an array which is set to as our state

  }
  render() {

    return (
        <div className="App">
            <CardList monsters={this.state.monsters} />
        </div>
    );
  }
}
export default App;
