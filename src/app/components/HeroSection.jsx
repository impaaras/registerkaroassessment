"use client";

import {
  Star,
  Play,
  Users,
  BarChart3,
  HandshakeIcon,
  PlayCircle,
} from "lucide-react";
import heroImage from "../images/hero.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="bg-gradient-to-br from-white to-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with Rating */}
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

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Your trusted partner
              <br />
              for compliance business needs
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various,{" "}
              <span className="font-medium">registrations, tax filings</span>,
              and other <span className="font-medium">legal matters</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 " />
                  <span className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#FFA229] via-[#2F5795] to-[#2F5795] mb-2">
                    4.5+
                  </span>
                </div>
                <p className="text-sm text-gray-600">Customer Rating</p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  <span className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#FFA229] via-[#2F5795] to-[#2F5795] mb-2">
                    20,000+
                  </span>
                </div>
                <p className="text-sm text-gray-600">Clients</p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <HandshakeIcon className="w-6 h-6 " />
                  <span className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#FFA229] via-[#2F5795] to-[#2F5795] mb-2">
                    99.8%
                  </span>
                </div>
                <p className="text-sm text-gray-600">Financial Stability</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6">
              <button className="bg-[#2B4162] text-white px-8 py-3 rounded-md hover:bg-blue-900 transition-colors">
                Talk An Expert
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors">
                <PlayCircle className="w-6 h-6" />
                <span>See how it works</span>
              </button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative">
            <div className="relative">
              {/* <Image
                src={heroImage}
                alt="Business Compliance Illustration"
                className="w-full h-auto"
              /> */}
              <Image
                src={heroImage}
                alt="Business Compliance"
                // className="w-full"
                width={600}
                height={600}
                priority
              />

              {/* Service Pills */}
              <div className="absolute -right-4 top-4 flex flex-col gap-3 animate-float">
                <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                  Annual Compliance
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                  Payroll Services
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                  Company Formation
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                  Annual Compliance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
