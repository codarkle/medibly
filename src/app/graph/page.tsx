"use client"

import { Header } from "@/components/layout";
import GraphSection from "@/components/graph/GraphSection"; 
import UploadSection from "@/components/graph/UploadSection"; 

export default function Home() {
  return (
    <>
      <Header type="graph"/>
      <div className="min-w-screen flex flex-col justify-center lg:flex-row bg-transparent pt-24 pb-12 relative sm:w-[85%] md:w-[75%]">
        <GraphSection /> 
        <UploadSection />
      </div>
    </>
  );
}
