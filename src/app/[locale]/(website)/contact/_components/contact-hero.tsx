import { MessageSquare } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-softpink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-10 w-96 h-96 bg-maroon-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-maroon-200 dark:text-softpink-200 text-sm font-medium mb-6">
          <MessageSquare size={16} />
          <span>We're Here to Help</span>
        </div>
        <h1 className="text-white font-bold text-4xl md:text-7xl mb-6 font-zain tracking-tight">
          Let's <span className="text-maroon-300 dark:text-softpink-300">Connect</span>
        </h1>
        <p className="text-zinc-200/90 text-lg md:text-2xl max-w-2xl mx-auto font-sarabun leading-relaxed">
          Have questions or a special request? Our team is ready to bring your floral vision to life.
        </p>
      </div>
    </section>
  );
}
