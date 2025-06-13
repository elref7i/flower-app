import React from 'react'
import Image from 'next/image'
import img1 from '@/../public/assets/imgs/image 5 (1).png'
import img2 from '@/../public/assets/imgs/image 6.png'
import img3 from '@/../public/assets/imgs/image 7.png'
import Link from 'next/link'

const occasions = [
  {
    src: img1,
    budge: 'Wedding',
    description: 'Celebrate Her Forever with a Gift She’ll Always Remember'
  },
  {
    src: img2,
    budge: 'Engagement',
    description: 'Honor the Beginning of a Beautiful Journey Together'
  },
  {
    src: img3,
    budge: 'Anniversary',
    description: 'Mark Every Year of Love with a Meaningful Surprise'
  }
]

export default function Occasions() {
  return (<>
    <div className='grid grid-cols-3 gap-6'>
      {occasions.map((occasion) => (
        <div key={occasion.budge} className='rounded-2xl gap-2.5 overflow-hidden relative'>
          <Link href={'./occasions'}>
              {/*image*/}
            <Image src={occasion.src} alt={occasion.description} width={410} height={271} className='w-full object-cover rounded-2xl' />
              {/*overlay*/}
            <div className='absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-transparent rounded-2xl'></div>
              {/*card content*/}
            <div className='absolute bottom-0 p-3 z-20'>
              {/*budge*/}
              <div className='bg-maroon-50 rounded-xl inline-block text-maroon-600 font-medium text-xs py-0.5 px-2 my-1 gap-2.5'>{occasion.budge}</div>
              {/*description*/}
              <h3 className='text-white text-2xl font-semibold my-1'>{occasion.description}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </>
  )
}
