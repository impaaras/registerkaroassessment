"use client";
import { useState } from "react";
import {
  Circle,
  Triangle,
  Square,
  Github,
  Facebook,
  Box,
  Layout,
  Diamond,
  Trello,
  Slack,
  Figma,
  Gitlab,
  Chrome,
  Codepen,
  Codesandbox,
  Framer,
} from "lucide-react";

export default function ClientsSection() {
  const [showMore, setShowMore] = useState(false);

  const mainLogos = [
    { Icon: Circle, color: "text-blue-500", position: "top-4 left-8" },
    { Icon: Github, color: "text-gray-700", position: "top-16 left-32" },
    { Icon: Facebook, color: "text-blue-600", position: "top-4 left-64" },
    { Icon: Box, color: "text-orange-500", position: "top-24 left-96" },
    { Icon: Layout, color: "text-teal-500", position: "top-8 right-96" },
    { Icon: Diamond, color: "text-pink-500", position: "top-20 right-64" },
    { Icon: Triangle, color: "text-green-500", position: "top-12 right-32" },
    { Icon: Square, color: "text-purple-500", position: "top-4 right-8" },
    { Icon: Github, color: "text-gray-700", position: "bottom-24 left-16" },
    { Icon: Facebook, color: "text-blue-600", position: "bottom-8 left-48" },
    { Icon: Box, color: "text-orange-500", position: "bottom-20 left-80" },
    { Icon: Diamond, color: "text-pink-500", position: "bottom-4 right-80" },
    { Icon: Triangle, color: "text-green-500", position: "bottom-16 right-48" },
    { Icon: Square, color: "text-purple-500", position: "bottom-8 right-16" },
    { Icon: Layout, color: "text-teal-500", position: "top-32 left-1/2" },
    { Icon: Diamond, color: "text-pink-500", position: "bottom-32 left-1/2" },
  ];

  const additionalLogos = [
    { Icon: Trello, color: "text-blue-400", position: "top-8 left-16" },
    { Icon: Slack, color: "text-purple-600", position: "top-24 left-48" },
    { Icon: Figma, color: "text-black", position: "top-12 left-80" },
    { Icon: Gitlab, color: "text-orange-600", position: "top-8 right-80" },
    { Icon: Chrome, color: "text-blue-500", position: "top-24 right-48" },
    { Icon: Codepen, color: "text-gray-800", position: "top-12 right-16" },
    {
      Icon: Codesandbox,
      color: "text-blue-700",
      position: "bottom-24 left-32",
    },
    { Icon: Framer, color: "text-black", position: "bottom-8 left-64" },
    { Icon: Trello, color: "text-blue-400", position: "bottom-20 right-64" },
    { Icon: Slack, color: "text-purple-600", position: "bottom-8 right-32" },
    { Icon: Figma, color: "text-black", position: "top-32 left-1/2" },
    { Icon: Gitlab, color: "text-orange-600", position: "bottom-32 left-1/2" },
  ];

  return (
    <div className="bg-white py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Happy Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service for
            state of the art customer service.
          </p>
        </div>

        <div className="relative h-[300px] overflow-hidden">
          {/* Main Logos */}
          <div
            className={`absolute w-full transition-transform duration-700 ease-in-out ${
              showMore ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="relative h-[300px]">
              {mainLogos.map(({ Icon, color, position }, index) => (
                <div
                  key={index}
                  className={`absolute ${position} transition-all duration-300 hover:scale-110`}
                >
                  <div className="bg-white rounded-full shadow-lg p-4 w-20 h-20 flex items-center justify-center border border-gray-100">
                    <Icon className={`w-10 h-10 ${color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`absolute w-full transition-transform duration-700 ease-in-out ${
              showMore ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="relative h-[300px]">
              {additionalLogos.map(({ Icon, color, position }, index) => (
                <div
                  key={index}
                  className={`absolute ${position} transition-all duration-300 hover:scale-110`}
                >
                  <div className="bg-white rounded-full shadow-lg p-4 w-20 h-20 flex items-center justify-center border border-gray-100">
                    <Icon className={`w-10 h-10 ${color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 transition-colors font-medium"
          >
            {showMore ? (
              <>
                Show less
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
              </>
            ) : (
              <>
                Show more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
