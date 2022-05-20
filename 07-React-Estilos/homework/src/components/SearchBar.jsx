import React from 'react';
import s from './SearchBar.module.css';


export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.mainBox}>
      <input className={s.input} type="text" placeholder='Input a city...' />
      <button className={s.button} onClick={() =>props.onSearch('Caldas')}>Add</button>
    </div>
  )
};