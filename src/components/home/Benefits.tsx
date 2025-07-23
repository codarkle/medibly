import React from "react";
import Image from "next/image";

type Benefit = {
  icon: string;
  title: string;
  items: {
    heading: string;
    description: string;
    icon: string;
  }[];
};

const benefitsData: Benefit[] = [
  {
    title: "For Doctors",
    icon: "/icons/howitworks/users.svg",
    items: [
      {
        heading: "No Spreadsheets, Just Insights",
        description:
          "Upload your monthly data and get interactive financial dashboards - no manual calculations or Excel headaches.",
        icon: "/icons/benefit/thbjzmnzog.svg",
      },
      {
        heading: "Complete Financial Clarity",
        description:
          "Visualize revenue, expenses, and cash flow with intuitive dashboards designed for non-financial professionals.",
        icon: "/icons/benefit/YmDxot2faX.svg",
      },
      {
        heading: "Secure, Personalized Access",
        description:
          "View your reports anytime through your private portal, with password-protected access and downloadable PDFs.",
        icon: "/icons/benefit/8q5khOuczM.svg",
      },
    ],
  },
  {
    title: "For Financial Admins",
    icon: "/icons/benefit/iubGx5vnBS.svg",
    items: [
      {
        heading: "Simplified Client Management",
        description:
          "Organize and process data from multiple clinics seamlessly - no back-and-forth or reformatting.",
        icon: "/icons/benefit/3gmvmpghJW.svg",
      },
      {
        heading: "High-Value Service Offering",
        description:
          "Deliver polished, automated financial insights that elevate your services and client trust.",
        icon: "/icons/benefit/4hj7BV15cJ.svg",
      },
      {
        heading: "Business Growth",
        description:
          "Expand your client base and increase services and profit rates.",
        icon: "/icons/benefit/kxV5BH759K.svg",
      },
    ],
  },
];

function BenefitCard({ benefit }: { benefit: Benefit }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md flex flex-col mx-auto lg:mx-0">
      <div className="flex items-center mb-6">
        <div className="bg-sky-100 rounded-full p-3">
          <Image
            src={benefit.icon}
            alt={`${benefit.title} icon`}
            width={44}
            height={44}
            className="w-11 h-11"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 ml-4">{benefit.title}</h3>
      </div>

      <div className="flex flex-col gap-5">
        {benefit.items.map(({ heading, description, icon }, i) => (
          <div key={i} className="flex">
            <div className="flex-shrink-0 mr-4 mt-1">
              <Image
                src={icon}
                alt={`${heading} icon`}
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{heading}</h4>
              <p className="text-gray-600 mt-1">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section id="benefits" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Why Choose Medibly
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-gray-600 text-lg">
          Designed specifically for the finance production industry
        </p>
      </div>

      <div className="mt-12 flex flex-col lg:flex-row flex-wrap justify-center gap-8">
        {benefitsData.map((benefit, idx) => (
          <BenefitCard key={idx} benefit={benefit} />
        ))}
      </div>
    </section>
  );
}
