"use client";

import React, { useState, useEffect } from "react";
import {
  Star,
  PlayCircle,
  Users,
  BarChart3,
  HandshakeIcon,
} from "lucide-react";
import Image from "next/image";
import heroImage from "../images/hero.png";
import target from "../images/target.png";

export default function HeroSection() {
  const [customerRating, setCustomerRating] = useState(0);
  const [clients, setClients] = useState(0);
  const [financialStability, setFinancialStability] = useState(0);

  useEffect(() => {
    const animateNumber = (setter, target, duration) => {
      const increment = target / (duration / 10);
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setter(Math.floor(current));
      }, 10);
    };

    animateNumber(setCustomerRating, 4.5, 2000);
    animateNumber(setClients, 20000, 2500);
    animateNumber(setFinancialStability, 99.8, 2000);
  }, []);

  return (
    <main className="bg-gradient-to-br from-[#FFF0DCAB] via-[#EDF6FFB2] to-[#E0EAF4] md:px-10 px-4">
      <div className="px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="order-2 lg:order-2">
            <div className="flex items-center gap-2 mb-8">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-medium">Google Rating</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <h1 className="text-5xl sm:text-5xl font-bold leading-tight mb-6">
              Your Trusted Partner
              <br />
              For <span className="text-[#FFA229]">Compliance </span>
              Needs
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various,{" "}
              <span className="font-medium">registrations, tax filings</span>,
              and other <span className="font-medium">legal matters</span>.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-12 h-12 text-[#4F4F4F]" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA229] via-[#1C4670] to-[#1C4670] ">
                    {customerRating.toFixed(1)}+
                  </span>
                  <p className="text-sm text-gray-600">Customer Rating</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-12 h-12 text-[#4F4F4F]" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA229] via-[#1C4670] to-[#1C4670] ">
                    {clients.toLocaleString()}+
                  </span>
                  <p className="text-sm text-gray-600">Clients</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <HandshakeIcon className="w-12 h-12 text-[#4F4F4F]" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA229] via-[#2F5795] to-[#2F5795] ">
                    {financialStability.toFixed(1)}%
                  </span>
                  <p className="text-sm text-gray-600">Financial Stability</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <button className="bg-[#2B4162] text-white px-8 py-3 rounded-md hover:bg-blue-900 transition-colors">
                Get Started For Free
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors">
                <PlayCircle
                  className="w-6 h-6"
                  color="#FFF"
                  style={{ backgroundColor: "#FD4E25", borderRadius: "50px" }}
                />
                <span>See how it works</span>
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src={heroImage}
              alt="Business Compliance"
              width={630}
              height={600}
              priority
            />
            <div className="">
              <div className="absolute md:-right-2 top-52 -right-14 mr-2 top-4 flex flex-col gap-3 animate-float hidden md:block">
                <div className="bg-white px-6 py-3 mb-4 rounded shadow-lg">
                  Annual Compliance
                </div>
                <div className="bg-white px-6 py-3 mb-4 rounded shadow-lg">
                  Payroll Services
                </div>
                <div className="bg-white px-6 py-3 mb-4 rounded shadow-lg">
                  Company Formation
                </div>
                <div className="bg-white px-6 py-3 mb-4 rounded shadow-lg">
                  Annual Compliance
                </div>
                <div className="absolute right-0 -bottom-56">
                  <Image
                    src={target}
                    alt="Target image"
                    className="hidden md:block "
                    width={400}
                    height={100}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
