import Image from "next/image";

import imageOops from "../../../public/assets/imgs/oops.png";

export default function OopsWrong() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] space-y-10 text-center">
      <div className="relative w-[510px] h-[210px] md:w-[710px] md:h-[310px]">
        <Image src={imageOops} fill alt="404" className="block object-contain" />
      </div>
      <div>
        <h1 className="font-semibold text-xl md:text-4xl">This page does not exist.</h1>
        <p className="text-zinc-400 text-lg md:text-xl">
          We couldn’t find the page your are looking for, please make sure you are in the right
          path.
        </p>
      </div>
    </div>
  );
}
