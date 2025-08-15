"use client";
import React, { useState, useEffect, useRef } from "react";

interface Card {
  id: number;
  title: string;
  link: string;
  image: string;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const cards: Card[] = [
    {
      id: 1,
      title: "Projects",
      link: "",
      image:
        "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Experience",
      link: "",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Certifications & Skills",
      link: "",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
    },
    {
      id: 4,
      title: "About Me",
      link: "",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const containerTop = rect.top;
        const containerHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calculate scroll progress within the container
        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - containerTop) / (containerHeight + windowHeight)
          )
        );
        setScrollY(scrollProgress);

        // Calculate which card should be active
        const cardIndex = Math.floor(scrollProgress * cards.length);
        setCurrentIndex(Math.min(cardIndex, cards.length - 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [cards.length]);

  return (
    <div className="w-full min-h-screen">
      {/* Carousel Section */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${cards.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-4xl mx-auto px-8">
            {cards.map((card, index) => {
              const isActive = index === currentIndex;
              const offset = (index - currentIndex) * 100;
              const opacity = isActive ? 1 : 0; // make cards disappear when inactive
              const scale = isActive ? 1 : 0.8;

              return (
                <div
                  key={card.id}
                  className="absolute inset-0 transition-all duration-1000 ease-out"
                  style={{
                    transform: `translateY(${offset}px) scale(${scale})`,
                    opacity,
                    zIndex: isActive ? 10 : 1,
                  }}
                >
                  <div className="h-full flex items-center justify-center">
                    <div
                      className={`relative w-full max-w-4xl h-[80vh] rounded-3xl bg-gradient-to-br p-8 shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-500`}
                    >
                      {/* Background Pattern */}

                      <div className="relative z-10 h-full flex flex-col justify-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                          {card.title}
                        </h2>

                        {/*Learn More*/}
                        <div className="flex items-center text-sm font-medium opacity-80">
                          <span>Learn More</span>
                          <svg
                            className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Subtle image overlay */}
                      <div className="absolute inset-0">
                        {/* opacity-5 */}
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover mix-blend-overlay"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Indicator */}
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20">
            <div className="flex flex-col space-y-4">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white scale-150"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Begin?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Let's create something extraordinary together
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
