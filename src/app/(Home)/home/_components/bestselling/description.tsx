import { useTranslations } from 'next-intl';
import React from 'react'

export default function Description() {
  const t=useTranslations();
  return (
   <div className="w-[291px]  space-y-4">
  <p className="text-[16px] tracking-widest text-softpink-500 font-bold  uppercase">
    {t('Best Selling')}

  </p>

  <h2 className="text-[30px] font-bold leading-snug text-maroon-700">
  
  {t.rich('check out', {
  span: (value) => (
    <span className="text-softpink-500">{value}</span>
  ),
})} {" "}
   {t('every-one')}
     {t.rich('buying',{
      span:(value)=>(
        <span className="text-softpink-500">{value}</span>
      )
     })}{" "}
     {t('right-now')}
  </h2>

  <p className="text-zinc-500 text-[16px] font-normal leading-relaxed">
   {t.rich('paragraph', {
    br: (value) =>(
      <>
      {value} <br/></>
 
    )
  })}
   
  </p>
  <button className="mt-4 h-[41px] bg-maroon-600 hover:bg-maroon-700 text-white px-4 py-2 rounded-[10px] flex items-center gap-2 text-[16px] font-normal ">
  {t('gifts')} {t.rich('arrow',{
    span:(value)=>(
      <span className="text-lg">{value}</span>
    )
  })}
  </button>
</div>

  )
}
