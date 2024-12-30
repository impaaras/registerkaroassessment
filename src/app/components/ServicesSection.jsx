"use client";

import {
  Settings,
  BarChart2,
  Users,
  Package,
  ShoppingCart,
  BookOpen,
} from "lucide-react";

const services = [
  {
    icon: <Settings className="w-16 h-16 text-orange-400" />,
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
  },
  {
    icon: <BarChart2 className="w-16 h-16 text-orange-400" />,
    title: "Company Secretarial Services",
    description:
      "Make data-driven decisions and utilize technology to reach business goals.",
  },
  {
    icon: <Users className="w-16 h-16 text-orange-400" />,
    title: "Virtual Office Address",
    description:
      "Foster customer relationships by effectively serving your market.",
  },
  {
    icon: <Package className="w-16 h-16 text-orange-400" />,
    title: "Annual Compliance Services",
    description:
      "Turn your ideas into modern products with our design experts.",
  },
  {
    icon: <ShoppingCart className="w-16 h-16 text-orange-400" />,
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
  },
  {
    icon: <BookOpen className="w-16 h-16 text-orange-400" />,
    title: "Bookkeeping Services",
    description:
      "Steering user behaviours with creative design, data insights & technology.",
  },
];

export default function ServicesSection() {
  return (
    <div className=" bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-medium uppercase tracking-wide">
            WELCOME TO REGISTERKARO.IN
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Explore Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center px-6 py-8 relative">
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 max-w-sm mx-auto">
                {service.description}
              </p>
              <button className="text-[#1c4670] font-medium inline-flex items-center ">
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              {/* Vertical divider for non-last items in row */}
              {(index + 1) % 3 !== 0 && index < services.length - 1 && (
                <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gray-200" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#1c4670] text-white px-8 py-3 rounded  transition-colors duration-300">
            See All Services
          </button>
        </div>
      </div>
    </div>
  );
}
