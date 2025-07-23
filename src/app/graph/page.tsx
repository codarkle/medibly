"use client"

import { useState } from "react";
import { Header } from "@/components/layout";
import UploadSection from "@/components/graph/UploadSection"; 
import DownloadSection from "@/components/graph/DownloadSection";
import dynamic from 'next/dynamic'

const PowerBIViewer = dynamic(() => import('@/components/graph/PowerBIViewer'), {
  ssr: false,
})

function getCurrentMonth(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());

  return (
    <>
      <Header type="graph"/>
      <div className="flex flex-col justify-between lg:flex-row bg-transparent pt-24 pb-12 w-[90%] xl:w-4/5 mx-auto">
        <div className="w-full flex flex-col px-5 items-center justify-center mt-5 lg:w-2/3">
          <PowerBIViewer 
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
          />
        </div>
        <div className="w-full flex flex-col items-center md:flex-row lg:flex-col lg:w-1/3">
          <UploadSection selectedMonth={selectedMonth}/>
          <DownloadSection />
        </div>
      </div>
    </>
  );
}
