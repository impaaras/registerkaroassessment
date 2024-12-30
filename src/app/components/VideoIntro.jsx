"use client";

import { LightbulbIcon, TrendingUp } from "lucide-react";
import youtubeVideo from "../images/youtube.png";
import Image from "next/image";

export default function VideoIntro() {
  return (
    <div className="bg-[#1C4670] text-white px-4 sm:px-6 md:px-8 lg:px-20 py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Our Video Introductions
            </h2>
            <p className="text-gray-300 mb-8 md:mb-12 text-base md:text-lg">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt apis dui.
            </p>

            {/* Feature 1 */}
            <div className="flex items-start gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="bg-[#FFA229] p-2 md:p-3 rounded-full flex-shrink-0">
                <LightbulbIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Explore ideas together
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-[#FFA229] p-2 md:p-3 rounded-full flex-shrink-0">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Bring those ideas to life
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/UdG1AA2gWQs?si=HneqhJXOf7FltoQe"
                title="YouTube video player"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
