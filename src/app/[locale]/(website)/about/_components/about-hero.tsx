import { Flower } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <Flower className="absolute -top-10 -left-10 w-64 h-64 text-white/5 rotate-12" />
        <Flower className="absolute -bottom-20 -right-10 w-96 h-96 text-white/5 -rotate-12" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <span className="inline-block text-maroon-300 dark:text-softpink-400 font-medium text-sm md:text-base uppercase tracking-widest mb-4">
          Our Journey
        </span>
        <h1 className="text-white font-bold text-4xl md:text-7xl mb-6 font-zain tracking-tight">
          Crafting <span className="text-maroon-300 dark:text-softpink-300">Emotions</span> Through Petals
        </h1>
        <div className="w-24 h-1 bg-maroon-500 dark:bg-softpink-500 mx-auto mb-6 rounded-full opacity-60"></div>
        <p className="text-zinc-200/90 text-lg md:text-2xl max-w-2xl mx-auto font-sarabun leading-relaxed">
          At Final Rose, we believe every flower has a story to tell and every bouquet is a masterpiece of love.
        </p>
      </div>
    </section>
  );
}
