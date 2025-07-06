"use client";
import { useLocale } from "next-intl";
import React from 'react';
import Image from "next/image";
import { useTranslations } from "next-intl";
import img from "@/../public/assets/imgs/assets_task_01jxqdyp2cft9987xejr19apm8_1749911896_img_2 1.png";
export default function CategoriesCover() {
  const t = useTranslations('categories-cover');
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <div className="relative overflow-hidden">
      {/*Image*/}
      <Image src={img}
        height={460}
        width={1440}
        alt='categories cover'
        className='w-full h-[460px] object-cover' />
      {/*title*/}
      <h2 className='text-maroon-700 text-8xl font-bold absolute top-9 left-1/2 transform -translate-x-1/2'>{t('title')}</h2>
      <h3 className={`${isArabic ? "font-lateef" : "font-seaweed"} text-maroon-300 text-5xl absolute top-6 start-1/4`}>{t('des-part1')}</h3>
      <h3 className={`${isArabic ? "font-lateef top-[135px]" : "font-seaweed top-[90px]"}  text-maroon-300 text-[40px] absolute  start-1/2`}>{t('des-part2')}</h3>
    </div>

  )
}
