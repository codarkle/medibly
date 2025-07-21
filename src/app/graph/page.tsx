"use client"

import { useState } from "react";
import { Header } from "@/components/layout";
import GraphSection from "@/components/graph/GraphSection"; 
import UploadSection from "@/components/graph/UploadSection"; 
import DownloadSection from "@/components/graph/DownloadSection";

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
      <div className="min-w-screen flex flex-col justify-center lg:flex-row bg-transparent pt-24 pb-12 relative sm:w-[90%] md:w-4/5">
        <GraphSection 
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        /> 
        <div className="flex flex-col md:flex-row lg:flex-col items-center md:justify-around">
          <UploadSection selectedMonth={selectedMonth}/>
          <DownloadSection />
        </div>
      </div>
    </>
  );
}
