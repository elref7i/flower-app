import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16 mb-8 px-4">
      {/* Address */}
      <div className="flex flex-col items-center text-center p-8 bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl border border-zinc-100 dark:border-maroon-900/20 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 group">
        <div className="w-16 h-16 bg-maroon-100 dark:bg-softpink-900/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <MapPin className="text-maroon-600 dark:text-softpink-400 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-maroon-800 dark:text-softpink-200 mb-3 font-zain">Our Location</h3>
        <p className="text-zinc-600 dark:text-zinc-400 font-sarabun">
          123 Floral Street, Garden District<br />
          New York, NY 10001
        </p>
      </div>

      {/* Phone */}
      <div className="flex flex-col items-center text-center p-8 bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl border border-zinc-100 dark:border-maroon-900/20 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 group">
        <div className="w-16 h-16 bg-maroon-100 dark:bg-softpink-900/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Phone className="text-maroon-600 dark:text-softpink-400 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-maroon-800 dark:text-softpink-200 mb-3 font-zain">Phone Number</h3>
        <p className="text-zinc-600 dark:text-zinc-400 font-sarabun">
          +1 (555) 123-4567<br />
          +1 (555) 987-6543
        </p>
      </div>

      {/* Email */}
      <div className="flex flex-col items-center text-center p-8 bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl border border-zinc-100 dark:border-maroon-900/20 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 group">
        <div className="w-16 h-16 bg-maroon-100 dark:bg-softpink-900/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Mail className="text-maroon-600 dark:text-softpink-400 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-maroon-800 dark:text-softpink-200 mb-3 font-zain">Email Address</h3>
        <p className="text-zinc-600 dark:text-zinc-400 font-sarabun">
          support@finalrose.com<br />
          info@finalrose.com
        </p>
      </div>
    </div>
  );
}
