import React , { Component } from 'react';
import './App.css';

import { CardList } from "./components/card-list/card-list.components";
import {SearchBar} from "./components/search-box/search-box.component";

class App extends Component{
  constructor(){
    super();
    this.state={
        monsters : [],
        searchItem:''
    }
  }
  // 1. fetch data of monsters from the json placeholder API
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({monsters : users}))    // 2. json placeholder API returns an array which is set to as our state

  }
  render() {
      const {monsters, searchItem} = this.state; // Destructured Monsters array and searchItem string from the state as constants
      const filteredMonsters = monsters.filter(monster => {
          return monster.name.toLowerCase().includes(searchItem.toLowerCase())  // filtering monsters from the array acc. to the searchInput
      });
      return (
        <div className="App">
            <SearchBar
                placeholder={`Search Your Monster`}
                handleChange={e => this.setState({searchItem: e.target.value})}  // onChange is a synthetic react event and not an actual HTML event (onchange)
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
  }
}
export default App;
