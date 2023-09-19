'use client';
import React from 'react'

interface buttonProps{
  buttontext : string
}

function button({buttontext} : buttonProps) {
  return (
    <button className='btn btn-neutral text-white' onClick={()=> console.log('Clicked Me')}>{buttontext}</button>
  )
}

export default button
