import React, { memo } from 'react';
import {Link, NavLink} from 'react-router-dom'
import './Styles.css';

const Header = () => {
  console.log('hello, i am header');
  const makeStyle = ({isActive}) => {
    if (isActive === true){
      return 'activeButton'
    }else{
      return 'nonActiveButton' 
    }
  }
  return (
    <header>
      <div className='headerContainer'>
        <Link className='headerLeftSide' to='/'>
          <h1 className='text-2xl'>
            <span className='text-emerald-500 '>Pixel</span>
            <span>App</span>
          </h1>
        </Link>
        <div>
          <NavLink to='/' className={makeStyle}>Images</NavLink>
          <NavLink to='/videos' className={makeStyle}>videos</NavLink>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)