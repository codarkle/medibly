import React from "react"; 
export default function HeroSection() {
  return (
    <div className="aspect-[16/9] bg-[url(/images/bg.jpg)] bg-cover bg-no-repeat p-[10%]">
      <div className="flex gap-4 flex-col">
      {/* Title Block */}
      <h1
        className="text-2xl md:text-4xl lg:text-6xl font-[400] text-[#555555] font-montserrat transition-opacity duration-1000 ease-in-out"
      >
        <span className="block font-[200]">
          Results
        </span>
        <span className="text-[#8A782D]"> in the present</span>
        <div>
          <span className="font-[200] text-[#555555]">
            aiming at a future&nbsp;
          </span>
        </div>
        <div>
          <span className="text-[#8A782D]">promising</span>
        </div>
      </h1>

      {/* Subheading */}
      <div
        className="hidden sm:block mt-4 text-[18px] text-[#555555] font-montserrat"
      >
        <p>We teach you how to make the</p>
        <p>best decisions and put them into practice</p>
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <a
          href="/graph"
          className="inline-block hover:font-[700] btn-intro text-white text-[12px] sm:text-[16px] px-6 py-3 shadow hover:opacity-90 transition rounded-full"
        >
          Finance Analysis &gt;
        </a>
      </div>
      </div>
    </div>
  );
}
