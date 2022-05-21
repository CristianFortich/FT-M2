import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='hole'>
      <div className='left'>
        <img src={Logo} alt="" id='logoHenry' />
        <p>Henry - Weather APP</p>
      </div>
      <div className='bar'>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;
