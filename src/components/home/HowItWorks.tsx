import React from "react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full relative bg-gray-50 mt-16 px-4 flex flex-col items-center"
    >
      <h1
        className="flex justify-center items-center text-3xl sm:text-4xl font-bold leading-tight text-gray-800 text-center mb-5"
        tabIndex={-1}
      >
        How Medibly Works
      </h1>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-full flex justify-center mb-8">
          <div className="flex justify-center items-center text-lg sm:text-xl font-normal leading-7 text-gray-600 text-center max-w-2xl">
            A streamlined platform delivering financial insights to doctors and clinics
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center">
          {/* For Doctors */}
          <div className="flex-1 m-3 min-w-[300px] max-w-sm rounded-xl border border-[#f3f4f6] shadow-lg flex flex-col items-start p-8 bg-gray-50">
            <div className="flex flex-col items-center w-full p-0 mb-[17.96px]">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center mb-0 self-start mx-auto">
                <div className="w-6 h-8 flex items-center justify-center">
                  <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/OU1KBkpeDz.png)] bg-cover bg-no-repeat" />
                </div>
              </div>
              <p className="text-2xl font-bold text-[#1f2937] mt-[22px] w-full text-left">
                Visual Insights KPI
              </p>
            </div>
            <div className="p-0 w-full">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/F1aeJ2LjY2.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                    Send monthly bank statements and billing reports via a simple and guided interface
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/csg0thPs9y.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                    Automatically generated reports with KPIs, revenue analysis, and cash flow indicators
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/Ehoe4ZbfLo.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                    View your financials from any device, with individual login and PDF export capabilities
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* For Financial Admins */}
          <div className="flex-1 m-3 min-w-[300px] max-w-sm rounded-xl border border-[#f3f4f6] shadow-lg flex flex-col items-start p-8 bg-gray-50">
            <div className="flex flex-col items-center w-full p-0">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center mb-0">
                <div className="w-[27px] h-8 flex items-center justify-center">
                  <div className="w-[27px] h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/SDFhTcE3UQ.png)] bg-cover bg-no-repeat" />
                </div>
              </div>
              <p className="font-['Inter'] text-2xl font-bold text-[#1f2937] mt-8 mb-6 w-full text-left">
                Financial Consultant
              </p>
            </div>
            <div className="p-0 w-full">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/sm3Ps1Zkge.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                    Save time with a system that transforms raw uploads into ready-to-use Power BI dashboards
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/DmnrGeOg7i.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                    Each clinic&apos;s files and reports are organized, private, and easily accessible
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/tXdyaNqvRy.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                    Automate account blocking for clients with overdue payments
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Engagement & Notifications */}
          <div className="flex-1 m-3 min-w-[300px] max-w-sm rounded-xl border border-[#f3f4f6] shadow-lg flex flex-col items-start p-8 bg-gray-50">
            <div className="flex flex-col items-center w-full p-0">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center mb-0">
                <div className="w-[30px] h-8 flex items-center justify-center">
                  <div className="w-[30px] h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/5BVKOAHZkd.png)] bg-cover bg-no-repeat" />
                </div>
              </div>
              <div className="font-['Inter'] text-2xl font-bold text-[#1f2937] mt-8 mb-6 w-full text-left">
              Engagement & Notification
              </div>
            </div>
            <div className="p-0 w-full">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/bzwYRvSw1t.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                  Alert clients when reports are ready or documents are missing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/mChK0PtAJo.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                    Ensure clients always receive reports on time, every month
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/4gA96jWyKR.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                  Monitor which reports are accessed and downloaded
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}