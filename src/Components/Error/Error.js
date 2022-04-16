import React, { memo } from 'react'
import { Link } from 'react-router-dom';
import './Styles.css';

const Error = () => {
  console.log('hello, i am error');
  return (
    <div className='error'>
      <h1 className='t404'>
        <span className='l404'>404</span>
        <span> Not Found :(</span>
      </h1>
      <Link
        className='backBtn'
        to='/'
      >
        back to main
      </Link>
    </div>
  )
}

export default memo(Error)