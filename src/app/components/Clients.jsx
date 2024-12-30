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
  Twitter,
} from "lucide-react";

export default function ClientsSection() {
  const [showMore, setShowMore] = useState(false);

  const mainLogos = [
    { Icon: Circle, color: "text-blue-500" },
    { Icon: Triangle, color: "text-green-500" },
    { Icon: Square, color: "text-purple-500" },
    { Icon: Github, color: "text-gray-700" },
    { Icon: Facebook, color: "text-blue-600" },
    { Icon: Box, color: "text-orange-500" },
    { Icon: Layout, color: "text-teal-500" },
    { Icon: Diamond, color: "text-pink-500" },
  ];

  const additionalLogos = [
    { Icon: Trello, color: "text-blue-400" },
    { Icon: Slack, color: "text-purple-600" },
    { Icon: Figma, color: "text-black" },
    { Icon: Gitlab, color: "text-orange-600" },
    { Icon: Chrome, color: "text-blue-500" },
    { Icon: Codepen, color: "text-gray-800" },
    { Icon: Codesandbox, color: "text-blue-700" },
    { Icon: Framer, color: "text-black" },
  ];

  return (
    <main className="bg-white py-20 px-4">
      <div className="mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Happy Clients
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service for
            state of the art customer service.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-8 flex-wrap justify-center">
            <div
              className={`flex gap-8 flex-wrap justify-center transition-transform duration-700 ${
                showMore ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              {mainLogos.map((logo, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-500 hover:scale-110"
                >
                  <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl">
                    <logo.Icon className={`w-12 h-12 ${logo.color}`} />
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`absolute top-0 left-0 flex gap-8 flex-wrap justify-center transition-transform duration-700 ${
                showMore ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {additionalLogos.map((logo, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-500 hover:scale-110"
                >
                  <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl">
                    <logo.Icon className={`w-12 h-12 ${logo.color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!showMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowMore(true)}
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium group"
              >
                Show more
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
