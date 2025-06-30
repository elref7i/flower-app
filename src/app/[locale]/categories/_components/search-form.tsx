"use client";
import React from 'react'
import { useTranslations } from "next-intl";
export default function SearchForm() {
  const t = useTranslations()
  return (
    <input
      placeholder={t('search')}
      className=" gap-2 p-4 my-6 border-b border-zinc-300 w-full placeholder:text-zinc-400 outline-0 dark:bg-transparent"
    />
  );
}
