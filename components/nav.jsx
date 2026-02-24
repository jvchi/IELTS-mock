import React from 'react'
import image from '../src/assets/images/image.png'

export default function Header() {
  return (
    <div className='text-red-900 border-b-2 border-black/5 w-full h-18 bg-neutral-50'>
      <div className='w-full h-max flex items-center justify-center h-full'>
        <img src={image} alt="IELTS logo" className="w-24 h-12" />
        <h1 className='font-extrabold text-3xl'> IELTS</h1>
      </div>
    </div>
  )
}
