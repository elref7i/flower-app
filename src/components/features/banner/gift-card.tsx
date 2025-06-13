import React from 'react'
import img from '@/../public/assets/imgs/image 1.png'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GiftCard() {
  return (<>
    <div className='rounded-xl gap-1.5 relative overflow-hidden'>
      <Image src={img} width={300} height={470} alt='Special gifts' className='w-full rounded-xl h-[470px] ' />
      <div className='absolute bottom-0 p-3'>
        {/*Budge*/}
        <div className='bg-maroon-50 rounded-xl inline-block text-maroon-600 font-medium text-xs py-0.5 px-2 my-1 gap-2.5'>Staring from 10.99 EGP</div>
        {/*title*/}
        <h3 className='text-white text-2xl font-semibold my-1'>Special Gifts For The People You Love</h3>
        {/*Button*/}
        <Link href={'./products'}>
          <Button variant='secondary' className='rounded-[10px] py-2.5 px-4 gap-1.5 text-maroon-700 font-base font-normal my-1'>
            Shop Now
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  </>


  )
}
