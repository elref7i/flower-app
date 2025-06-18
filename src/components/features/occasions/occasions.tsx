import React from 'react'
import Image from 'next/image'
import img1 from '@/../public/assets/imgs/image 5 (1).png'
import img2 from '@/../public/assets/imgs/image 6.png'
import img3 from '@/../public/assets/imgs/image 7.png'
import {Link }from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'

export default async function Occasions() {
  const t = await getTranslations('occasions');  
  const occasions = [
    {
      src: img1,
      budge: t('budge-one'),
      description: t('description-one')
    },
    {
      src: img2,
      budge: t('budge-two'),
      description: t('description-two')
    },
    {
      src: img3,
      budge: t('budge-three'),
      description: t('description-three')
    }
  ]

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
