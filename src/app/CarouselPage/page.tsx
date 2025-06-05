
// CarouselPage.jsx

import img1 from "../../../public/assets/Images/Vector (1).png"
import img2 from "../../../public/assets/Images/Vector (2).png"
import img3 from "../../../public/assets/Images/Vector.png"
import TestimonialsCarousel from "../../components/Carousel/TestimonialsCarousel";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    image: img1,
    rating: 4,
    text: "I've been ordering from this flower shop for years and they never disappoint. The quality and service are exceptional!",
    date: "January 12, 2025"
  },
  {
    id: 2,
    name: "Mike Johnson",
    image: img2,
    rating: 4,
    text: "Customer service is top-notch and the flowers last longer than any others I've bought. Highly recommend!",
    date: "January 12, 2025"
  },
  {
    id: 3,
    name: "Sarah Davis",
    image: img3,
    rating: 4,
    text: "The team truly cares about every order. I always feel confident when I buy flowers from here. I've tried many flower shops before, but this one always...",
    date: "January 12, 2025"
  },
  {
    id: 4,
    name: "David Wilson",
    image: img1,
    rating: 4,
    text: "Amazing quality flowers and fantastic customer service. They go above and beyond to make sure every arrangement is perfect.",
    date: "January 15, 2025"
  },
  {
    id: 5,
    name: "Emma Thompson",
    image: img2,
    rating: 4,
    text: "Outstanding service and beautiful fresh flowers every time. The staff is knowledgeable and always helpful with recommendations.",
    date: "January 18, 2025"
  },
  {
    id: 6,
    name: "Robert Brown",
    image: img1,
    rating: 4,
    text: "Excellent flower arrangements and timely delivery. They've never let me down for special occasions.",
    date: "January 20, 2025"
  }
];

export default function CarouselPage() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center dark:bg-black">
      {/* Header Section */}
      <section className="text-center mb-8">
        <p className="text-lg  text-[#FF668B] mb-2 tracking-[0.3em] font-bold">TESTIMONIALS</p>
        {/* make underline with after  */}
        {/* make shadow with befor */}
        <h2 className="text-3xl font-bold text-[#741C21] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-36 after:bg-rose-600  before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-4 before:w-[357px] before:rounded-r-lg before:bg-rose-500 before:opacity-20">
          Real Words from Happy Customers
        </h2> 
    
      </section>

      {/* Testimonials Carousel Section */}
      <section className="w-full max-w-[1441px] mx-auto px-4 ">
        <TestimonialsCarousel testimonials={testimonials} />
      </section>
    </main>
  );
}