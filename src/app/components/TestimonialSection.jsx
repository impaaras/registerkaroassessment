"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import quotes from "../images/quotes.png";
import Image from "next/image";

const testimonials = [
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Chris",
    position: "President and CEO, PrintReach, USA",
    rating: 4.5,
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "John",
    position: "Manager, TechCorp, UK",
    rating: 4.0,
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "John",
    position: "Manager, TechCorp, UK",
    rating: 4.0,
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Sara",
    position: "Director, Innovate Inc, Canada",
    rating: 5.0,
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "John",
    position: "Manager, TechCorp, UK",
    rating: 4.0,
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Mike",
    position: "Founder, StartUpX, Germany",
    rating: 4.8,
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "John",
    position: "Manager, TechCorp, UK",
    rating: 4.0,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - getVisibleSlides() ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - getVisibleSlides() : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return 3; // Desktop
    }
    return 3; // Default for SSR
  };

  return (
    <div className="bg-[#1C4670] text-white py-8 md:py-12 lg:py-16">
      <div className="mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">
            What people say about us
          </h2>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 md:p-4 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out w-[100%] md:w-[120%]"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / getVisibleSlides())
              }%)`,
              // width: "110%",
              // width: `${(testimonials.length / getVisibleSlides()) * 60}%`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-2 md:px-4 transition-all duration-300`}
                style={{ width: `${100 / getVisibleSlides()}%` }}
              >
                <div className="bg-white text-gray-800 p-4 md:p-6 lg:p-8 rounded-lg h-full">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <Image
                      src={quotes}
                      alt={testimonial.author}
                      className="w-10 h-10 md:w-6 md:h-6"
                    />
                    <div className="flex gap-1 ">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 md:w-5 md:h-5 ${
                            i < Math.floor(testimonial.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400 opacity-50"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-base md:text-lg mb-4 md:mb-6">
                    {testimonial.text}
                  </blockquote>
                  <div className="flex items-center gap-3 md:gap-4">
                    <img
                      src="/api/placeholder/48/48"
                      alt={testimonial.author}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                    />
                    <div className="py-2 md:py-4">
                      <h4 className="font-bold text-sm md:text-base">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {testimonials
            .slice(0, testimonials.length - (getVisibleSlides() - 1))
            .map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-orange-500" : "bg-white/30"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
