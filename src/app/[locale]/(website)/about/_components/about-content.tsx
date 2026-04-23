import { Target, Eye, ShieldCheck, FileText, Flower } from "lucide-react";

export default function AboutContent() {
  return (
    <div className="flex flex-col gap-24 max-w-7xl mx-auto my-24 px-4 sm:px-6 lg:px-8">
      {/* Section 1: Who We Are */}
      <section className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <span className="text-maroon-600 dark:text-softpink-400 font-bold uppercase tracking-widest text-sm mb-4 block">Our Identity</span>
          <h2 className="text-maroon-700 dark:text-softpink-200 font-bold text-4xl md:text-5xl mb-6 font-zain">Who We Are</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-sarabun">
            Founded with a passion for floral artistry, Final Rose has grown from a small local boutique to a leading destination for premium floral arrangements. Our team consists of expert florists who see every stem as an opportunity to create joy. We don't just sell flowers; we deliver emotions, memories, and a touch of nature's finest beauty to your doorstep.
          </p>
        </div>
        <div className="flex-1 w-full h-[350px] md:h-[450px] bg-zinc-50 dark:bg-zinc-900/30 rounded-[40px] overflow-hidden relative border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-maroon-900/5">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05]">
            <Flower size={300} className="text-maroon-600" />
          </div>
          <div className="absolute inset-0 p-10 flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 bg-maroon-100 dark:bg-softpink-900/20 rounded-full flex items-center justify-center mb-6">
              <Flower className="text-maroon-600 dark:text-softpink-400" size={40} />
            </div>
            <p className="text-maroon-900 dark:text-softpink-100 text-2xl font-zain italic max-w-md">
              "Every flower is a soul blossoming in nature."
            </p>
            <div className="mt-4 text-zinc-500 dark:text-zinc-500 font-sarabun text-sm">— Gerard De Nerval</div>
          </div>
        </div>
      </section>

      {/* Section 2: Vision & Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-zinc-900/40 p-10 rounded-[32px] border border-zinc-100 dark:border-maroon-900/20 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-maroon-600 dark:bg-softpink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-maroon-600/20 dark:shadow-softpink-600/20">
            <Eye className="text-white" size={28} />
          </div>
          <h3 className="text-3xl font-bold text-maroon-800 dark:text-softpink-200 mb-4 font-zain">Our Vision</h3>
          <p className="text-zinc-600 dark:text-zinc-400 font-sarabun leading-relaxed text-lg">
            To be the world's most loved floral brand, connecting people through the timeless beauty of flowers and innovative gifting experiences that last a lifetime.
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-900/40 p-10 rounded-[32px] border border-zinc-100 dark:border-softpink-900/20 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-maroon-600 dark:bg-softpink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-maroon-600/20 dark:shadow-softpink-600/20">
            <Target className="text-white" size={28} />
          </div>
          <h3 className="text-3xl font-bold text-maroon-800 dark:text-softpink-200 mb-4 font-zain">Our Mission</h3>
          <p className="text-zinc-600 dark:text-zinc-400 font-sarabun leading-relaxed text-lg">
            To provide exceptional quality floral products with unparalleled service, ensuring that every customer experience is as fresh and vibrant as our blooms.
          </p>
        </div>
      </section>

      {/* Section 3: Privacy & Terms */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-zinc-100 dark:border-zinc-800 pt-24 pb-12">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center">
              <ShieldCheck className="text-maroon-600 dark:text-softpink-400" size={24} />
            </div>
            <h2 className="text-maroon-700 dark:text-softpink-200 font-bold text-3xl font-zain">Privacy Policy</h2>
          </div>
          <div className="space-y-6 text-zinc-600 dark:text-zinc-400 font-sarabun text-lg">
            <p>Your privacy is important to us. We collect only the information necessary to fulfill your orders and provide a personalized experience.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-maroon-500 shrink-0 dark:bg-softpink-500" />
                <span>Secure encrypted payment processing for all transactions.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-maroon-500 shrink-0 dark:bg-softpink-500" />
                <span>Data protection compliant with international standards.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-maroon-500 shrink-0 dark:bg-softpink-500" />
                <span>No third-party sharing of your personal details without consent.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center">
              <FileText className="text-maroon-600 dark:text-softpink-400" size={24} />
            </div>
            <h2 className="text-maroon-700 dark:text-softpink-200 font-bold text-3xl font-zain">Terms of Service</h2>
          </div>
          <div className="space-y-6 text-zinc-600 dark:text-zinc-400 font-sarabun text-lg">
            <p>By using our services, you agree to our terms. We ensure fair pricing, timely delivery, and fresh product guarantees on all purchases.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-maroon-500 dark:bg-softpink-500 shrink-0" />
                <span>100% Freshness guarantee on all flower arrangements.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-maroon-500 dark:bg-softpink-500 shrink-0" />
                <span>Same-day delivery options for orders placed before 12 PM.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-maroon-500 dark:bg-softpink-500 shrink-0" />
                <span>Transparent refund policy for any damaged goods reported within 24h.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
