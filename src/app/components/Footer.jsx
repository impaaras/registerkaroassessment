"use client";

import {
  PlayCircle,
  Facebook,
  Instagram,
  Pinterest,
  Github,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0A1B44] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Description and Social Links */}
          <div className="md:col-span-1">
            <p className="text-sm mb-6">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-gray-300">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <Github size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <Youtube size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <Instagram size={24} />
              </Link>
            </div>
          </div>

          {/* Start a Business */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFA726]">
              START A BUSINESS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Government Registration */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFA726]">
              GOVERNMENT REGISTRATION
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  App
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance & Tax */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFA726]">
              COMPLIANCE & TAX
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Channels
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Scale
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Watch the Demo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Our Competition
                </Link>
              </li>
            </ul>
          </div>

          {/* BIS & CDSCO */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFA726]">
              BIS & CDSCO
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Media Kit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#FFA726] rounded-full p-4 hover:bg-[#FF9800] transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            © 2024 Registerkaro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
