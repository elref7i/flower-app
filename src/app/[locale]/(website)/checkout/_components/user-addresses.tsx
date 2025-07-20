// "use client";
// import { Button } from "@/components/ui/button";
// import React, { useState } from "react";
// import AddAddressForm from "./add-address-form";
// import { MapPin, PenLine, Phone, Trash2 } from "lucide-react";

// export default function UserAddresses({ addresses }: { addresses: Address[] }) {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <section>
//       {showForm ? (
//         // display form
//         <AddAddressForm />
//       ) : (
//         // Dialog
//         <div>
//           <div className="flex justify-between my-4">
//             <h1 className="text-2xl font-semibold text-zinc-800">My Addresses</h1>
//             <Button
//               className="bg-maroon-50 text-maroon-600 px-4 py-3 hover:text-maroon-50"
//               onClick={() => setShowForm(true)}
//             >
//               Add a New Address
//             </Button>
//           </div>

//           {/* User Address */}
//           <ul className="mt-4 space-y-3">
//             {addresses.map((address) => (
//               <li key={address._id} className="p-2 border rounded-xl py-3 px-3 relative group">
//                 {/* <div className="absolute right-0 top-1/2 -translate-y-1/2  bg-zinc-100 border border-zinc-300 w-10 h-10 flex items-center justify-center rounded-full">
//                   <PenLine className="text-zinc-700 w-4 h-4" />
//                 </div>

//                 <div className="absolute right-0 top-1/2 -translate-y-1/2  bg-zinc-100 border border-zinc-300 w-10 h-10 flex items-center justify-center rounded-full">
//                   <Trash2 className="text-zinc-700 w-4 h-4" />
//                 </div> */}

//                 <div className="flex justify-between mb-4 ms-1  items-center">
//                   <div className="flex items-center gap-x-3">
//                     <div className="bg-emerald-500 text-white p-2 rounded-full flex items-center justify-center">
//                       <MapPin className="w-5 h-5" />
//                     </div>
//                     <h3 className="font-semibold text-2xl text-zinc-800">{address.city}</h3>
//                   </div>
//                   {/* phone */}
//                   <div className="flex items-center gap-2 text-zinc-500 text-lg font-medium">
//                     <div className="p-2">
//                       <Phone className=" w-4 h-4 group-hover:text-zinc-800 transition-colors duration-200" />
//                     </div>
//                     +2{address.phone}
//                   </div>
//                 </div>
//                 {/* address */}
//                 <p className="bg-zinc-100 py-1 px-3 font-medium inline rounded-full text-zinc-800 ">
//                   {address.street}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </section>
//   );
// }
