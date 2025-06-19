import Image from "next/image";
import LLingoude from "../../../../../public/Assets/imgs/LLingoude.png";
import ginyard from "../../../../../public/Assets/imgs/ginyard.png";
import hobus from "../../../../../public/Assets/imgs/hobus.png";
import coconut from "../../../../../public/Assets/imgs/image 36.png";
import ingoude from "../../../../../public/Assets/imgs/ingoude.png";
import velvet from "../../../../../public/Assets/imgs/velvet.png";
import { useTranslations } from "next-intl";

const companiesLogos = [coconut, ginyard, LLingoude, velvet, ingoude, hobus];
const companiesName = ["coconut", "ginyard", "LLingoude", "velvet", "ingoude", "hobus"];

export default function CompaniesSection() {
  // Tranlation
  const t = useTranslations();

  return (
    <section className="w-full max-h-56 bg-maroon-50 rounded-2xl py-10 px-6 mx-auto   dark:bg-zinc-700 ">
      {/* Headline */}
      <div className="pb-10 ">
        <h2 className=" text-maroon-700 text-4xl text-center font-bold dark:text-softpink-200">
          {t.rich("companies-section-headline", {
            highlight: (chunks) => (
              <span className="text-softpink-500 dark:text-maroon-400">{chunks}</span>
            ),
          })}
        </h2>
      </div>

      {/* Companies */}
      <div className="flex justify-around ">
        {companiesLogos.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`${companiesName[index]} company`}
            width={146}
            height={51}
          />
        ))}
      </div>
    </section>
  );
}
