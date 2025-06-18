import { useTranslations } from 'next-intl'
import React from 'react'

export default function Description() {
  const t=useTranslations();
  return (
<div className="w-[291px] space-y-4">
      {/* Best Selling */}
      <p className="text-[16px] tracking-widest text-softpink-500 font-bold uppercase">
        {t('bestSelling')}
      </p>

      {/* Main Heading */}
      <h2 className="text-[30px] font-bold leading-snug text-maroon-700">
        {t.rich('checkOut', {
          span: (value) => (
            <span className="text-softpink-500">{value}</span>
          )
        })}{" "}

        {t('whatEveryone')}{" "}
        {t.rich('buying', {
          span: (value) => (
            <span className="text-softpink-500">{value}</span>
          )
        })}{" "}
        {t('rightNow')}
        
      </h2>

      {/* Paragraph */}
      <p className="text-zinc-500 text-[16px] font-normal leading-relaxed">
        {t.rich('paragraph', {
          br: (value) => <>
          {value} <br />
          </>
        })}
      </p>

      {/* Button */}
      <button className="mt-4 h-[41px] bg-maroon-600 hover:bg-maroon-700 text-white px-4 py-2 rounded-[10px] flex items-center gap-2 text-[16px] font-normal">
       

        {t.rich('exploreGifts',{
          span:(value)=>(
              <span className="text-lg">{value} </span> 
          )
        })}
  
       
      </button>
    </div>
  )
}
