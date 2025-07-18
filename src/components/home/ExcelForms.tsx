import React from "react";
import { Download } from "lucide-react";

export default function DownForms() {
    return (
        <div className="flex flex-col items-center justify-center bg-[#0284c7] m-0 py-12 px-4">
          <div className="flex justify-center items-start text-[30px] font-bold text-[#fff] text-center">
            Ready to Engage your bills Experience?
          </div>
          <div className=" text-[0px] bg-[rgba(0,0,0,0)]">
            <div className="flex justify-center items-start text-[20px] font-normal text-[#fff] relative text-center mt-8 mr-0 mb-0">
              Join Medibly today and input these excel forms for <br />
              your growing business.
            </div>
            <div className="flex justify-center items-center bg-[rgba(0,0,0,0)] mt-8 ml-[16px]">
              <a
                href="/bills.xlsx"
                download="bills.xlsx"
                className="bg-[rgba(0,0,0,0)] rounded-[8px] border-solid border-2 border-[#fff] p-4 mx-2 cursor-pointer inline-block"
              >
                <span className="flex justify-center items-center text-[16px] font-medium text-[#fff] whitespace-nowrap gap-2">
                  <Download />
                  Bank Statement
                </span>
              </a>

              <a
                href="/bills.xlsx"
                download="bills.xlsx"
                className="bg-[#fff] rounded-[8px] p-4 mx-2 cursor-pointer inline-block"
              >
                <span className="flex justify-center items-center text-[16px] font-medium text-[#0369a1] whitespace-nowrap gap-2">
                  <Download />
                  Revenue Report
                </span>
              </a>
            </div>
          </div>
        </div>
    );
}