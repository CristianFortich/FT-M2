import React from 'react';
import Card from './Card';
import s from './Cards.module.css';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={s.deck}>
      {
        props.cities.map(element => 
          <Card
            key={element.id}
            max={element.main.temp_max}
            min={element.main.temp_min}
            name={element.name}
            img={element.weather[0].icon}
            onClose={() => alert(element.name)}
          />
        )
      }
    </div> 
  )
};