import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto aspect-[19/12] mt-5 md:mt-16 bg-[url(/images/bg.jpg)] bg-cover bg-no-repeat">
      <div className="p-3 sm:p-6 md:p-10 w-[70%] h-[90%] flex flex-col justify-around">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
          Streamline Your Financial Insights with Medibly
        </h1>

        <p className="mt-6 hidden sm:flex sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-gray-600 max-w-2xl">
          Upload your data, visualize your cash flow, and make smarter decisions effortlessly - all in one secure platform.
        </p>

        <div className="mt-4 mx-auto gap-4 flex">
          <Button
            asChild
            variant="secondary"
            className="border-gray-700 text-gray-900 bg-green-100 rounded-lg h-12 md:h-14 xl:h-16 text-base shadow-xl "
          >
            <Link href="/graph" className="flex justify-center items-center px-6">
            <Image
              src="/images/brand.png"
              alt="Brand logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
              <span className="text-lg md:text-xl xl:text-2xl">View Graph</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
