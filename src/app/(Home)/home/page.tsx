import { ModeToggle } from "@/components/common/theme-toggle";
import CarouselPage from "./_components/carousel";
import Description from "./_components/description";

export default function page() {

  return (
    <>
    <section className=" flex m-7 ">
    <ModeToggle />
    <Description/>
     <CarouselPage/>
    </section>
   
  
    </>
  );
}
