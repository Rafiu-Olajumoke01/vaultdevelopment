'use client';
import React from 'react';
import Image from 'next/image';

const technologies = [
  '/08-golang.svg',
  '/02-javascript-1.svg',
  '/05-vuejs.svg',
  '/04-angular-js.svg',
  '/03-react-1.svg',
  '/06-solidity.svg',
  '/12-php-1.svg',
  '/11-react-native-1.svg',
  '/13-css-3.svg',
  '/07-node-js.svg',
  '/10-swift.svg',
  '/14-html-5.svg',
  '/08-golang.svg',
  '/09-kotlin-2.svg',
];

export default function TechnologiesPage() {
  return (
    <div className="bg-white min-h-screen px-6 pt-23 pb-10">
      <div className="max-w-6xl w-full mx-auto">
        <h3 className="text-3xl font-bold mb-30 tracking-wide text-[#062953] relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-28 after:h-1 after:bg-[#529FF1] after:rounded-full text-center">
          TECHNOLOGIES
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
          {technologies.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Technology ${index + 1}`}
              width={100}
              height={100}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
