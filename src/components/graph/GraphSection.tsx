"use client"

import React from "react"; 
import Image from 'next/image';

export default function GraphSection() {
  
  return (
    <div className="flex flex-col px-5 items-center justify-center mb-8 lg:w-4/7">
      <span className="flex justify-center items-center text-[30px] font-bold text-[#1f2937] text-center mb-4">
        Financial Dashboard
      </span>
      <div className="relative w-full h-full aspect-[7/4] mx-auto">
      <Image
        src="/images/graph.png"
        alt="Film equipment landing"
        className="object-contain w-full h-full"
        fill
      />
      </div>
    </div>
  );
} 