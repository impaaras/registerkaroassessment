"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Nulla facilisi. Phasellus tincidunt enim sed metus faucibus, vitae porta est sagittis. Sed vitae scelerisque nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices.",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras vel elit felis. Vestibulum convallis ipsum id aliquam varius. Etiam nec laoreet libero, a pellentesque nisl.",
  },
];

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <p className="text-center text-[#F0813C] text-sm mb-2">FAQ</p>
        <h2 className="text-center text-3xl font-bold text-[#472D1E] mb-8">
          Frequent Ask Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="relative border border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
            >
              {/* Gradient Left Border */}
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-t from-[#F0813C] to-[#0A1B44] rounded-l-lg" />

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#472D1E] ml-2">{faq.question}</span>
                  <ChevronRight
                    className={`text-gray-400 transition-transform duration-200 ${
                      expandedIndex === index ? "rotate-90" : ""
                    }`}
                  />
                </div>

                {/* Answer */}
                <div
                  className={`ml-2 mt-2 text-gray-600 transition-all duration-200 overflow-hidden ${
                    expandedIndex === index
                      ? "max-h-48 opacity-100 pt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-[#1c4670] text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-opacity-90 transition-colors">
            Show more
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
