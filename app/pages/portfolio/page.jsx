'use client';

import portfolioItems from './../data/portfolioItem';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <h3 className="relative text-3xl font-bold text-center mb-8 inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-black after:mx-auto after:mt-2">
                Our Portfolio
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {portfolioItems.slice(0, 6).map((item, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={600}
                            height={400}
                            className="object-cover w-full h-60"
                            unoptimized
                        />
                    </div>
                ))}
            </div>

            <div className="text-center mt-8">
                <Link
                    href="/portfolio"
                    className="inline-block px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                >
                    View All
                </Link>
            </div>
        </div>
    );
}
