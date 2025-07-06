import First from "../../../../../public/assets/imgs/image 2.png";
import Second from "../../../../../public/assets/imgs/image 3.png";
import Third from "../../../../../public/assets/imgs/image 8.png";
import Fourth from "../../../../../public/assets/imgs/image 11.png";
import Fifth from "../../../../../public/assets/imgs/Frame 76.png";
import Sixth from "../../../../../public/assets/imgs/image 9.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Constants
const photos = [First, Second, Third, Fourth, Fifth, Sixth];

export default function GallerySection() {
  // Translation
  const t = useTranslations();

  return (
    <section className="mt-8 max-w-screen-xl mx-auto">
      {/* Title */}
      <div className=" text-center">
        <h4 className="text-softpink-500 font-bold text-base tracking-wide py-2 dark:text-maroon-400">
          {t("gallery-title")}
        </h4>
        <div className="relative inline-block">
          {/* Headline */}
          <h2 className="relative z-10 font-bold text-4xl text-maroon-700 dark:text-softpink-200">
            {/* Check Out our Wonderful Gallery */}
            {t("gallery-headline")}
          </h2>

          {/* Text Background Decoration */}
          <div className=" absolute z-0 bottom-0 start-0 w-3/4 rounded-e-xl  bg-softpink-200/35 dark:bg-zinc-500/50 h-1/2 "></div>

          {/* Underline */}
          <div className="relative h-[2px] z-10 w-44 bg-softpink-600"></div>
        </div>
      </div>

      {/* Grid Design */}
      <div className="columns-1 sm:columns-2 lg:columns-3 pt-10 gap-3">
        {photos.map((src, index) => (
          <div
            key={index}
            className={`mb-3 break-inside-avoid ${
              [0, 3, 5].includes(index) ? "h-[617px]" : "h-[411px]"
            }`}
          >
            <Image
              src={src}
              alt={`pic-${index}`}
              className="w-full h-full object-cover"
              width={418}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
