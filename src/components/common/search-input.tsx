import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

type SearchInputProps = {
  placeholder: string;
};

export default function SearchInput({ placeholder }: SearchInputProps) {
  return (
    <div className="relative">
      <Input className="flex-1 ps-7 h-[52px]" type="search" placeholder={placeholder} />
      <Search size={18} className="absolute top-1/2 start-2 -translate-y-1/2 text-zinc-400" />
    </div>
  );
}
