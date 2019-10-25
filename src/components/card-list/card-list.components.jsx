import React from 'react'
import './card-list.style.css'
import {Card} from "../card/card.component";

export const CardList = (props) =>{
  return (
      <div className={`card-list`}>
          {props.monsters.map( (monster) =>  (   // 3. here we iterate over each object inside the array and the get the username rendered as h1 element on the screen
             <Card key={monster.id} monster={monster}/>
          ))}
      </div>

  )
};
