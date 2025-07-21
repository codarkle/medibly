"use client"

import React from "react"; 
import Image from 'next/image';
import MonthPicker from "../ui/MonthPicker";

export default function GraphSection({
  selectedMonth,
  setSelectedMonth,
}: {
  selectedMonth: string;
  setSelectedMonth: (value: string) => void;
}) {
  
  return (
    <div className="flex flex-col px-5 items-center justify-center mb-8 mt-5 lg:w-4/7">
      <div className="flex items-center justify-center mb-5 gap-4">
        <span className="text-[30px] font-bold text-[#1f2937]">
          Financial Dashboard
        </span>
        <MonthPicker value={selectedMonth} onChange={setSelectedMonth} />
      </div>
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