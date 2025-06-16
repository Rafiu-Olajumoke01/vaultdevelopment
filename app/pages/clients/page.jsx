'use client';

import React from 'react';
import Image from 'next/image';

const clientLogos = [
  '/logo_(1).png',
  '/logo_(2).svg',
  '/logo_(3).png',
  '/logo_(4).svg',
  '/logo_(5).svg',
  '/logo_(9).png',
  '/logo_(10).png',
  '/logo.svg',
  '/logo_(1).png',
  '/logo_(2).svg',
  '/logo_(3).png',
  '/logo_(4).svg',
  '/logo_(5).svg',
];

export default function OurClientsPage() {
  return (
    <div className="bg-white pt-0 mt-0 mb-5"> 
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold mt-0 mb-30 tracking-wide text-[#062953] text-center relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-24 after:h-1 after:bg-[#062953] after:rounded-full">
          OUR CLIENTS
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md w-full flex items-center justify-center h-24"
            >
              <Image
                src={logo}
                alt={`Client ${index + 1}`}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
