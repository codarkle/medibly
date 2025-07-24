"use client"

import React from "react"; 
// import { useState, useEffect} from "react"
// import { models } from 'powerbi-client'
// import { PowerBIEmbed } from 'powerbi-client-react'
import Image from 'next/image';
import MonthPicker from "../ui/MonthPicker";

export default function PowerBIViewer({
  selectedMonth,
  setSelectedMonth,
}: {
  selectedMonth: string;
  setSelectedMonth: (value: string) => void;
}) {
  
  // const [config, setEmbedConfig] = useState<models.IReportEmbedConfiguration | null>(null)

  // useEffect(() => {
  //   const fetchEmbedConfig = async () => {
  //     const res = await fetch('/api/powerbi', {
  //       method: 'POST',
  //       body: JSON.stringify({ selectedMonth }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     const config = await res.json()
  //     if(!config.error){
  //       setEmbedConfig(config);
  //     }
  //     else{
  //       setEmbedConfig(null);
  //     }
  //   }

  //   fetchEmbedConfig()
  // }, [selectedMonth])

  // if(!config)
   return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center mb-5 gap-4">
        <span className="text-[30px] font-bold text-[#1f2937]">
          Financial Dashboard
        </span>
        <MonthPicker value={selectedMonth} onChange={setSelectedMonth} />
      </div>
      <div className="relative w-full h-full aspect-[8/25] sm:aspect-[16/9] mx-auto border-2 border-gray-200 shadow-md">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/images/graph2.png"
          />
          <Image
            src="/images/graph.png"
            alt="Film equipment landing"
            className="object-contain w-full h-full"
            fill
            priority
          />
        </picture>
      </div>
    </>
  )

  // return (
  //   <>
  //     <div className="flex flex-col sm:flex-row items-center justify-center mb-5 gap-4">
  //       <span className="text-[30px] font-bold text-[#1f2937]">
  //         Financial Dashboard
  //       </span>
  //       <MonthPicker value={selectedMonth} onChange={setSelectedMonth} />
  //     </div>
  //     {config && 
  //     <div className="relative w-full h-full aspect-[1/3] md:aspect-[16/9] mx-auto border-2 border-gray-200 shadow-md rounded-2xl">
  //       <PowerBIEmbed
  //         embedConfig={config}
  //         cssClassName="w-full h-full"
  //         eventHandlers={
  //           new Map([
  //             ['loaded', () => console.log('Report loaded')],
  //             ['rendered', () => console.log('Report rendered')],
  //           ])
  //         }
  //       />
  //     </div>
  //     }
  //   </>
  // );
} 