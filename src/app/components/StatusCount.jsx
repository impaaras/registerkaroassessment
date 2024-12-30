"use client";

import { useEffect, useState } from "react";

export function StatusCount() {
  const stats = [
    { value: 0, suffix: "M+", label: "CUSTOMERS", target: 1 },
    { value: 0, suffix: "+", label: "YEARS OF EXCELLENCE", target: 12 },
    { value: 0, suffix: "+", label: "R&D ENGINEERS", target: 41 },
    { value: 0, suffix: "+", label: "COUNTRIES", target: 78 },
    { value: 0, suffix: "+", label: "PARTNERS", target: 3287 },
    { value: 0, suffix: "+", label: "AWARDS RECEIVED", target: 41 },
  ];

  const [counters, setCounters] = useState(stats);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const incrementValues = stats.map((stat) => stat.target / steps);

    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep === steps) {
        clearInterval(timer);
        setCounters(stats.map((stat) => ({ ...stat, value: stat.target })));
        return;
      }

      setCounters((prevCounters) =>
        prevCounters.map((counter, index) => ({
          ...counter,
          value: Math.min(
            counter.target,
            Math.round(incrementValues[index] * currentStep)
          ),
        }))
      );

      currentStep++;
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-[#F0813C] text-sm font-medium mb-2">
          WHY REGISTER KARO
        </h2>
        <h3 className="text-3xl font-bold text-[#472D1E]">
          Some Numbers are important
        </h3>
      </div>

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {counters.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA229] via-[#2F5795] to-[#2F5795] mb-2">
              {stat.value.toLocaleString()}
              {stat.suffix}
            </div>
            <div className="text-lg font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
