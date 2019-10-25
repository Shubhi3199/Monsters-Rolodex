import React from 'react';

export const Card = (props) =>{
    return(
        <div>
            <h1> {props.monster.id}. {props.monster.username}</h1>
        </div>
    )
};
