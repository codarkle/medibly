import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Hospital } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#111827] px-2 pt-5">
      <div className="flex overflow-hidden items-center pb-5 justify-center sm:hidden border-b border-b-[#1F2937] box-border">
          <div className="flex flex-nowrap overflow-hidden">
            <div className="flex items-center">
            <Hospital stroke="white"/>
            </div>

            <Link
              href="/"
              className="flex justify-start items-start text-[24px] font-bold text-[#fff] text-left whitespace-nowrap py-4 px-2"
            >
              Medibly
            </Link>
          </div>
        <div className="flex py-2 pl-5">
          <Link
            href="#"
            className="flex justify-center items-center flex-nowrap overflow-hidden px-2"
          >
            <Image
              src="/icons/footer/twitter.svg"
              alt="Twitter"
              width={24}
              height={24}
              className="shrink-0 overflow-hidden"
            />
          </Link>
          <Link
            href="#"
            className="flex justify-center items-center flex-nowrap overflow-hidden px-2"
          >
            <Image
              src="/icons/footer/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
              className="shrink-0 overflow-hidden"
            />
          </Link>
          <Link
            href="#"
            className="flex justify-center items-center flex-nowrap overflow-hidden px-2"
          >
            <Image
              src="/icons/footer/instagram.svg"
              alt="Instagram"
              width={18}
              height={18}
              className="shrink-0 overflow-hidden"
            />
          </Link>
          <Link
            href="#"
            className="flex justify-center items-center flex-nowrap overflow-hidden px-2"
          >
            <Image
              src="/icons/footer/linkedin.svg"
              alt="Linkedin"
              width={18}
              height={18}
              className="shrink-0 overflow-hidden"
            />
          </Link>
        </div>
      </div>

      <div className="bg-[rgba(0,0,0,0)] flex mx-auto w-full sm:w-[80%] pb-8 px-2">
        <div className="hidden sm:block">
          <div className="flex flex-nowrap overflow-hidden">
            <div className="flex items-center">
            <Hospital stroke="white"/>
            </div>
            <Link
              href="/"
              className="flex justify-start items-start text-[24px] font-bold text-[#fff] text-left whitespace-nowrap py-4 px-2"
            >
              Medibly
            </Link>
          </div>
          <span className="flex text-[16px] font-normal text-[#9ca3af] text-left py-2">
            Connecting doctors with financial insights worldwide.
          </span>
          <div className="flex py-2">
            <Link
              href="#"
              className="flex justify-center items-center flex-nowrap overflow-hidden px-2"
            >
              <Image
                src="/icons/footer/twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
                className="shrink-0 overflow-hidden"
              />
            </Link>
            <Link
              href="#"
              className="flex justify-center items-center flex-nowrap overflow-hidden px-2"
            >
              <Image
                src="/icons/footer/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="shrink-0 overflow-hidden"
              />
            </Link>
            <Link
              href="#"
              className="flex justify-center items-center flex-nowrap overflow-hidden px-2"
            >
              <Image
                src="/icons/footer/instagram.svg"
                alt="Instagram"
                width={18}
                height={18}
                className="shrink-0 overflow-hidden"
              />
            </Link>
            <Link
              href="#"
              className="flex justify-center items-center flex-nowrap overflow-hidden px-2"
            >
              <Image
                src="/icons/footer/linkedin.svg"
                alt="Linkedin"
                width={18}
                height={18}
                className="shrink-0 overflow-hidden"
              />
            </Link>
          </div>
        </div>

        <div className="text-[0px] bg-[rgba(0,0,0,0)] w-1/3 px-2">
          <div className="w-full sm:w-1/2 mx-auto">
            <span className="block text-[18px] font-semibold text-[#fff] text-left whitespace-nowrap py-4">
              Platform
            </span>
            <div>
              <Link
                href="/#how-it-works"
                className="flex justify-start items-start text-[16px] font-normal text-[#9ca3af] text-left whitespace-nowrap py-1"
              >
                How It Works
              </Link>
              <Link
                href="#"
                className="flex justify-start items-start text-[16px] font-normal text-[#9ca3af] text-left whitespace-nowrap py-1"
              >
                Features
              </Link>
              <Link
                href="#"
                className="flex justify-start items-start text-[16px] font-normal text-[#9ca3af] text-left whitespace-nowrap py-1"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="flex justify-start items-start text-[16px] font-normal text-[#9ca3af] text-left whitespace-nowrap py-1"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>

        <div className="text-[0px] bg-[rgba(0,0,0,0)] w-1/3 px-2">
          <div className="w-full sm:w-1/2 mx-auto">
            <span className="block text-[18px] font-semibold text-[#fff] text-left whitespace-nowrap py-4">
              Company
            </span>
            <div>
              <Link
                href="#"
                className="flex justify-start items-start text-[16px] font-normal text-[#9ca3af] text-left whitespace-nowrap py-1"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="flex justify-start items-start text-[16px] font-normal text-[#9ca3af] text-left whitespace-nowrap py-1"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="flex justify-start items-start text-[16px] font-normal text-[#9ca3af] text-left whitespace-nowrap py-1"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="flex justify-start items-start text-[16px] font-normal text-[#9ca3af] text-left whitespace-nowrap py-1"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="text-[0px] bg-[rgba(0,0,0,0)] w-1/3 px-2">
          <div className="w-full sm:w-1/2 mx-auto">
            <span className="block text-[18px] font-semibold text-[#fff] text-left whitespace-nowrap py-4">
              Legal
            </span>
            <div>
              <Link
                href="#"
                className="flex justify-start items-start text-[16px] font-normal text-[#9ca3af] text-left whitespace-nowrap py-1"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="flex justify-start items-start text-[16px] font-normal text-[#9ca3af] text-left whitespace-nowrap py-1"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="flex justify-start items-start text-[16px] font-normal text-[#9ca3af] text-left whitespace-nowrap py-1"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-t-[#1F2937] box-border p-5">
        <span className="flex justify-center items-start text-[16px] font-normal text-[#6b7280] text-center whitespace-nowrap">
          © 2025 Medibly. All rights reserved.
        </span>
      </div>
    </div>
  );
}
