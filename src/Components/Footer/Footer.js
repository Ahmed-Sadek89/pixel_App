import React, { memo } from 'react'

const Footer = () => {
  console.log('hello, i am footer');
  console.log('################');
  return (
    <div className='py-4 border-t-2 border-emerald-500 shadow-md text-center'>
      <h1>Copyright © 2022</h1>
      <p>
        <a 
          href='https://ahmed-sadek89.github.io/s-a-d-e-k/'
          target='_blank'
          rel="noopener noreferrer"
          className='text-emerald-500'
        >
          Ahmed Sadek
        </a>
      </p>
    </div>
  )
}

export default memo(Footer)