import React from 'react'

export default function Description() {
  return (
   <div className="w-[291px]  space-y-4">
  <p className="text-[16px] tracking-widest text-softpink-500 font-bold  uppercase">Best Selling</p>

  <h2 className="text-[30px] font-bold leading-snug text-maroon-700">
    <span className="text-softpink-500">Check Out</span>{" "}
    What Everyone’s <span className="text-softpink-500">Buying</span>{" "}
     Right Now
  </h2>

  <p className="text-zinc-500 text-[16px] font-normal leading-relaxed">
    Not sure what to choose? <br />
    Start with our best sellers, these are the gifts our customers keep coming back for.
    Whether you're celebrating a birthday, anniversary or wedding, our top picks are guaranteed
    to leave a lasting impression.
  </p>

  <button className="mt-4 h-[41px] bg-maroon-600 hover:bg-maroon-700 text-white px-4 py-2 rounded-[10px] flex items-center gap-2 text-[16px] font-normal ">
    Explore gifts <span className="text-lg">→</span>
  </button>
</div>

  )
}
