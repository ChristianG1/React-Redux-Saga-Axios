import React from 'react';
import logo from '../../img/logo.png';

const Header = ({ loading }) => {
  console.log(loading)
  return (
    <header className='center'>
      {
        loading 
          ?
            <h1 style={{color: '#333', textAlign: 'center'}}>Preparando información...</h1>
          : 
            <img src={logo} alt='Logo'></img>
      }
    </header>
  )
}

export default Header;