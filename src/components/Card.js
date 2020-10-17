import React from 'react';
import '../App.css';
import CardImage from './CardImage.js';
import CardInfo from './CardInfo.js';

function Card(props) {
    console.log (props)
  return(
    <li className="cards-item fourth">
      <div className="card">
        <div className="card-content">
            <CardImage imageurl = {props.island.image}/>
            <CardInfo  name={props.island.name} description={props.island.description} latitude={props.island.coords.lat} longitude={props.island.coords.lon} />
        </div>
      </div>
    </li>
  );
}

export default Card;
