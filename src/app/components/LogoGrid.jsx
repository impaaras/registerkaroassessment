"use client";

import { useState } from "react";
import ClientLogo from "./ClientLogo";
import { initialLogos, additionalLogos } from "./LogoData";

export default function LogoGrid() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative h-[500px] overflow-hidden">
      <div
        className={`transition-all duration-700 ease-in-out transform ${
          showMore ? "translate-y-[-100%]" : "translate-y-0"
        }`}
      >
        <div className="absolute inset-0">
          {initialLogos.map((logo, index) => (
            <div
              key={index}
              className={`absolute ${logo.position} transition-all duration-500`}
            >
              <ClientLogo Icon={logo.Icon} color={logo.color} />
            </div>
          ))}
        </div>
      </div>

      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
          showMore ? "translate-y-0" : "translate-y-[100%]"
        }`}
      >
        {additionalLogos.map((logo, index) => (
          <div
            key={index}
            className={`absolute ${logo.position} transition-all duration-500`}
          >
            <ClientLogo Icon={logo.Icon} color={logo.color} />
          </div>
        ))}
      </div>

      {!showMore && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(true)}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium group"
          >
            Show more
            <span className="transform rotate-90 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
