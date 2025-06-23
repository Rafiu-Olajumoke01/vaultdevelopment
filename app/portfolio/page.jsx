'use client';
import portfolioItems from './../data/portfolioItem';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
    
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 inline-block relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-24 after:h-1 after:bg-[#124B8D] after:rounded">
            OUR PORTFOLIO
          </h1>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {portfolioItems.slice(0, 6).map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                {/* <p className="text-gray-600 text-sm">
                  {item.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Centered with your blue color */}
        <div className="text-center">
          <Link 
            href="/portfolio" 
            className="inline-block bg-[#124B8D] text-white px-12 py-3 rounded-lg font-semibold hover:bg-[#0f3d73] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
}