import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function ContactFormSection() {
  return (
    <section className="max-w-4xl mx-auto mb-24 mt-8 px-4 w-full">
      <div className="bg-white dark:bg-zinc-900/40 rounded-[40px] p-8 md:p-16 shadow-2xl shadow-maroon-900/5 dark:shadow-none border border-zinc-100 dark:border-maroon-900/20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-maroon-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-maroon-700 dark:text-softpink-200 font-bold text-4xl pb-4 font-zain">Send Us A Message</h2>
          <div className="w-16 h-1 bg-maroon-500 dark:bg-softpink-500 mx-auto mb-6 rounded-full opacity-40"></div>
          <p className="text-zinc-500 dark:text-zinc-400 font-sarabun text-lg">We'd love to hear from you. We typically respond within 2 hours.</p>
        </div>

        <form className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label htmlFor="firstName" className="text-sm font-bold text-maroon-900 dark:text-softpink-100/80 uppercase tracking-wider ml-1">First Name</label>
              <Input id="firstName" placeholder="John" className="h-14 bg-zinc-50 dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800 focus-visible:ring-maroon-500 rounded-2xl px-6" />
            </div>
            <div className="space-y-3">
              <label htmlFor="lastName" className="text-sm font-bold text-maroon-900 dark:text-softpink-100/80 uppercase tracking-wider ml-1">Last Name</label>
              <Input id="lastName" placeholder="Doe" className="h-14 bg-zinc-50 dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800 focus-visible:ring-maroon-500 rounded-2xl px-6" />
            </div>
          </div>
          
          <div className="space-y-3">
            <label htmlFor="email" className="text-sm font-bold text-maroon-900 dark:text-softpink-100/80 uppercase tracking-wider ml-1">Email Address</label>
            <Input id="email" type="email" placeholder="john@example.com" className="h-14 bg-zinc-50 dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800 focus-visible:ring-maroon-500 rounded-2xl px-6" />
          </div>

          <div className="space-y-3">
            <label htmlFor="subject" className="text-sm font-bold text-maroon-900 dark:text-softpink-100/80 uppercase tracking-wider ml-1">Subject</label>
            <Input id="subject" placeholder="What's this regarding?" className="h-14 bg-zinc-50 dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800 focus-visible:ring-maroon-500 rounded-2xl px-6" />
          </div>

          <div className="space-y-3">
            <label htmlFor="message" className="text-sm font-bold text-maroon-900 dark:text-softpink-100/80 uppercase tracking-wider ml-1">Message</label>
            <Textarea id="message" placeholder="Tell us more about your request..." className="min-h-[180px] bg-zinc-50 dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800 focus-visible:ring-maroon-500 rounded-2xl p-6 leading-relaxed" />
          </div>

          <Button type="button" className="w-full bg-maroon-700 hover:bg-maroon-800 text-white font-bold py-8 text-xl rounded-2xl transition-all dark:bg-softpink-600 dark:hover:bg-softpink-700 shadow-xl shadow-maroon-900/20 group">
            <Send className="mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
