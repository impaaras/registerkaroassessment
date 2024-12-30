"use client";

import Image from "next/image";
import Oracle from "../images/companylogo/oracle.png";
import Morph from "../images/companylogo/morph.png";
import Samsung from "../images/companylogo/samsung.png";
import Monday from "../images/companylogo/monday.png";
import Segment from "../images/companylogo/segment.png";

export default function TrustedCompanies() {
  const clients = [
    { name: "Oracle", logo: Oracle },
    { name: "Morph1", logo: Morph },
    { name: "Morph2", logo: Morph },
    { name: "Samsung", logo: Samsung },
    { name: "Monday", logo: Monday },
    { name: "Segment", logo: Segment },
  ];

  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted By Over 100+ Startups and freelance business
          </h1>
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-200"
            >
              <div className="relative w-32 h-12">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
