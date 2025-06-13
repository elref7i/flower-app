import React from 'react'
import GiftCard from './gift-card';
import GiftCarousol from './gift-carsoul';

export default function Banner() {
  return (
    <div className='grid grid-cols-4 gap-5 '>
      <div className='col-span-1'>
        <GiftCard />
      </div>
      <div className='col-span-3'>
        <GiftCarousol />
      </div>
    </div>
  )
}