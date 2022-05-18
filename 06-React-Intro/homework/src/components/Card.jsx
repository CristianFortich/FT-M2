import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <div>
        <h3>MIN</h3>
        <h3>{props.min}</h3>
      </div>
      <div>
        <h3>MAX</h3>
        <h3>{props.max}</h3>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}></img>
    </div>
  )
};