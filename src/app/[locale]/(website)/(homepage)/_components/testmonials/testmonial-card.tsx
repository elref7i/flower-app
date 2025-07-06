import React from "react";
import Image, { StaticImageData } from "next/image";
import { Star } from "lucide-react";
import { useFormatter } from "next-intl";


export default function TestmonialCard({ client }: { client?: ClientReview }) {
  // Translation
  const format = useFormatter();

  return (
    <div className="relative flex flex-col items-center rounded-3xl bg-white px-8 pb-8 pt-12 shadow-custom-red">
      {/* Client Image */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-white">
        <Image
          src={client?.photo ?? ""}
          alt={client?.name ?? "Client photo"}
          width={500}
          height={0}
          className="size-32 rounded-full border-[3px] border-white object-cover"
        />
      </div>
      {/* client Name */}
      <h1 className="mt-[10px] py-[10px] text-zinc-800">{client?.name}</h1>
      <div className="flex flex-col items-center justify-between gap-2">
        <div className="mt-4 flex gap-1">
          {/* Rating */}
          {Array.from({ length: 4 }).map((_, index) => (
            <Star key={index} fill="#FBA707" stroke="none" />
          ))}
        </div>
        {/* Client Review */}
        <p className="line-clamp-3 align-middle text-base font-medium leading-tight text-zinc-800">
          {client?.review}
        </p>

        {/* Date */}
        <p className="mt-4 text-xs font-medium text-zinc-400">
          {format.dateTime(new Date("Jan 12,2025"), "date-base-hours")}
        </p>
      </div>
    </div>
  );
}
