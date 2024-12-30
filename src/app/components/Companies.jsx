"use client";

import Image from "next/image";
import Coinbase from "../images/companylogo/coinbase.png";
import Spotify from "../images/companylogo/spotify.png";
import Slack from "../images/companylogo/slack.png";
import Dropbox from "../images/companylogo/dropbox.png";
import Webflow from "../images/companylogo/webflow.png";
import Zoom from "../images/companylogo/zoom.png";

export default function Companies() {
  const clients = [
    { name: "Coinbase", logo: Coinbase },
    { name: "Spotify", logo: Spotify },
    { name: "Slack", logo: Slack },
    { name: "Dropbox", logo: Dropbox },
    { name: "Webflow", logo: Webflow },
    { name: "Zoom", logo: Zoom },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
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
    </div>
  );
}
