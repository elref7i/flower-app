
import { ModeToggle } from "@/components/common/theme-toggle";
import CarouselPage from "./_components/carousel";
import Description from "./_components/description";
import Occasion from "./_components/occation";

export default function page() {

  return (
    <>

      <section className=" flex m-7 ">
        {/* <ModeToggle /> */}
         <Occasion/> 
        {/* <Description/>
     <CarouselPage/> */}
      </section>
    </>
  );
}
