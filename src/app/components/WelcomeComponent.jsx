"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export function WelcomeSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
  };

  return (
    <section className="relative py-20 px-4">
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#F0813C] to-[#0A1B44]"
        style={{ zIndex: -1 }}
      />

      <div className="container mx-auto text-center text-white">
        <p className="text-sm mb-4">1% OF THE INDUSTRY</p>
        <h2 className="text-4xl font-bold mb-8">
          Welcome to your new digital reality. Now.
        </h2>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-8">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#F0813C] text-white rounded-lg font-medium hover:bg-[#E07232] transition-colors"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="flex justify-center gap-8 flex-wrap">
          <div className="flex items-center gap-2">
            <Check className="text-[#F0813C]" />
            <span>Instant results</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-[#F0813C]" />
            <span>User-friendly interface</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-[#F0813C]" />
            <span>Personalized customization</span>
          </div>
        </div>
      </div>
    </section>
  );
}