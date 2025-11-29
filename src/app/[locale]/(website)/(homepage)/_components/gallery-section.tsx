import First from "@assets/imgs/image 2.png";
import Second from "@assets/imgs/image 3.png";
import Third from "@assets/imgs/image 8.png";
import Fourth from "@assets/imgs/image 11.png";
import Fifth from "@assets/imgs/Frame 76.png";
import Sixth from "@assets/imgs/image 9.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Constants
const photos = [First, Second, Third, Fourth, Fifth, Sixth];

export default function GallerySection() {
  // Translation
  const t = useTranslations();

  return (
    <section className="mt-32 max-w-screen-xl mx-auto">
      {/* Title */}
      <div className=" text-center">
        <h4 className="text-softpink-500 font-bold text-base tracking-wide py-2 dark:text-maroon-400">
          {t("gallery-title")}
        </h4>

        {/* Headline */}
        <h2 className="relative mx-auto w-fit text-4xl font-bold text-maroon-700 before:absolute before:bottom-0 before:h-1 before:w-[30%] before:bg-maroon-400 before:dark:bg-softpink-600 after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-1/2 after:w-[70%] after:rounded-e-full after:bg-maroon-100 dark:text-softpink-200 after:dark:bg-zinc-700 after:rtl:right-0">
          {t("gallery-headline")}
        </h2>
      </div>

      {/* Grid Design */}
      <div className="columns-1 sm:columns-2 lg:columns-3 pt-10 gap-3">
        {photos.map((src, index) => (
          <div
            key={index}
            className={`mb-3 break-inside-avoid ${[0, 3, 5].includes(index) ? "h-[617px]" : "h-[411px]"
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
