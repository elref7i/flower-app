"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from '@/i18n/navigation';

export default function SearchForm() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const t = useTranslations();
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search.trim()) {
        router.push(`/categories?search=${search}`);
      } else {
        router.push(`/categories`);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [search]);
  
  return (
    <input
      placeholder={t("search")}
      className="gap-2 p-4 my-6 border-b border-zinc-300 w-full placeholder:text-zinc-400 outline-0 dark:bg-transparent"
      value={search}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
    />
  );
}
