import './Card.css';
import React from 'react';

const Card = (props) => {
    return (
        <div className="ui card" key={props.card.key}>
            <div className="image">
                <img alt="Nba"src={props.card.link}></img>
            </div>
        </div>
    );
}

export default Card;