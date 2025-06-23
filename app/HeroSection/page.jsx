'use client';
import { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Code,
  Cpu,
  Database,
  Globe
} from 'lucide-react';

const techSlides = [
  {
    title: 'ANALYTICAL REPORTING',
    description: 'Acquiring and utilising accurate information in the form of analytical data is fundamental to many. We at Techasoft give consistent reporting that incorporates analysis of various factors and performance based on the results.',
  },

  {
    title: 'DIGITAL MARKETING',
    description: 'Vault is an advanced digital marketing company in Bangalore that enables brands to communicate and interface with their audiences in a much better way through entire computerized transformation.',
  },

  {
    title: 'APPLICATION DEVELOPMENT',
    description: 'We provide full-cycle software development service encompassing planning, requirements definition, design and prototyping, software development, testing, deployment and application maintenance',
  },

  {
    title: 'SOFTWARE ROBUSTNESS',
    description: 'We help companies to focus on core business by taking over complete responsibility. We provide both black-box and white-box testing support on demand..',
  }

];

const gradients = [
  'from-[#2A59B9] via-[#3B82F6] to-[#1D4ED8]',
  'from-[#2A59B9] via-[#3B82F6] to-[#1E40AF]',
  'from-[#1D4ED8] via-[#2A59B9] to-[#3B82F6]',
  'from-[#1E40AF] via-[#2A59B9] to-[#2563EB]'
];

export default function TechTalksSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % techSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + techSlides.length) % techSlides.length);
  };

  useEffect(() => {
    timeoutRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  const goToSlide = (index) => {
    clearInterval(timeoutRef.current);
    setCurrentIndex(index);
    timeoutRef.current = setInterval(nextSlide, 5000);
  };

  return (
    <div className="w-full bg-gray-100 transition-colors duration-500 flex flex-col">
      <div className="relative flex flex-col md:flex-row overflow-hidden min-h-[65vh] w-full">
        <div className="relative w-full md:w-[70%] overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradients[currentIndex]} transition-all duration-1000`}>
            <div className="absolute inset-0 opacity-20">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Slide Content */}
          <div className="relative z-10 h-full flex items-center px-6 md:px-12 py-12">
            <div className="max-w-xl">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 backdrop-blur-sm rounded-full text-white text-xs font-semibold tracking-wider uppercase">
                  {techSlides[currentIndex].tech}
                </span>
              </div>

              <div className="mb-4 text-white/80">{techSlides[currentIndex].icon}</div>

              <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight text-white drop-shadow-2xl">
                {techSlides[currentIndex].title}
              </h1>

              <p className="text-sm md:text-base font-medium mb-4 text-white/90 leading-relaxed">
                {techSlides[currentIndex].description}
              </p>

              <div className="flex gap-3">
                <button className="px-4 py-2 bg-white text-[#2A59B9] font-semibold text-xs uppercase tracking-wider hover:bg-blue-50 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {techSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === i
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>
        </div>

        
        <div className="relative md:absolute top-1/2 right-35 transform -translate-y-1/2 translate-x-1/4 mt-6 md:mt-0 w-[90%] md:w-[80%] lg:w-[75%] max-w-md h-50 md:h-56 rounded-xl overflow-hidden shadow-2xl border border-white/20 z-20 ">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/UwsrzCVZAb8?autoplay=1&mute=1&loop=1&playlist=UwsrzCVZAb8"
            title="Tech Innovations"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Spacer */}
        <div className="hidden md:block w-[15%]"></div>
      </div>

      {/* Bottom Text */}
      <div className="bg-white py-10 px-4 flex items-center justify-center">
        <h2 className="text-[#062953] text-xl md:text-2xl lg:text-3xl font-bold text-center">
          BRIDGING THE GAP BETWEEN BUSINESS AND TECHNOLOGY
        </h2>
      </div>
    </div>
  );
}