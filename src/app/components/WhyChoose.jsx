"use client";

import {
  Shield,
  CheckCircle,
  Smile,
  UserPlus,
  ShieldCheck,
} from "lucide-react";

export default function WhyChoose() {
  return (
    <div className="max-w-8xl mx-auto py-20 px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Text Section */}
        <div className="lg:pr-12">
          <p className="text-orange-400 font-medium mb-2">
            WHY REGISTERKARO.IN
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Register Karo
          </h2>
          <p className="text-gray-600">
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>

        {/* Right Cards Grid Section */}
        <div className="space-y-6">
          {/* Top Row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Confidential & Safe
              </h3>
              <p className="text-gray-600 text-center">
                All your private information is safe with us
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                No Hidden Fee
              </h3>
              <p className="text-gray-600 text-center">
                Everything is put before you with no hidden charges or
                conditions
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Row - 3 cards */}
      <div className="flex justify-end ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:w-[74%]">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <Smile className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">
              Guaranteed Satisfaction
            </h3>
            <p className="text-gray-600 text-center">
              We ensure that you stay 100% satisfied with our offered services
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <UserPlus className="w-12 h-12 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">
              Expert CA/CS Assistance
            </h3>
            <p className="text-gray-600 text-center">
              Prompt support from our in-house expert professionals
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <ShieldCheck className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">
              Confidential & Safe
            </h3>
            <p className="text-gray-600 text-center">
              All your private information is safe with us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
