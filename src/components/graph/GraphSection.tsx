"use client"

import React from "react"; 
import Image from 'next/image';

export default function GraphSection() {
  
  return (
    <div className="flex flex-col px-5 items-center justify-center mb-8 lg:w-4/7">
      <span className="text-[30px] font-bold text-[#1f2937] mb-5">
        Financial Dashboard
      </span>
      <div className="relative w-full h-full aspect-[1/3] md:aspect-[7/4] mx-auto">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/images/graph2.jpg"
        />
        <Image
          src="/images/graph.jpg"
          alt="Film equipment landing"
          className="object-contain w-full h-full"
          fill
          priority
        />
      </picture>
      </div>
    </div>
  );
} 