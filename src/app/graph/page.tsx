"use client"

import { Header } from "@/components/layout";
import GraphSection from "@/components/graph/GraphSection"; 
import UploadSection from "@/components/graph/UploadSection"; 
import DownloadSection from "@/components/graph/DownloadSection";

export default function Home() {
  return (
    <>
      <Header type="graph"/>
      <div className="min-w-screen flex flex-col justify-center lg:flex-row bg-transparent pt-24 pb-12 relative sm:w-[85%] md:w-[75%]">
        <GraphSection /> 
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-around">
          <DownloadSection />
          <UploadSection />
        </div>
      </div>
    </>
  );
}
