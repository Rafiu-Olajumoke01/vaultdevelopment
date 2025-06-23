'use client';
import React from 'react';
import {
    Laptop,
    ShoppingCart,
    Banknote,
    Truck,
    Hospital,
    Plane,
    GraduationCap,
    Factory,
} from 'lucide-react';

const industries = [
    { icon: <Laptop size={28} />, label: 'TECHNOLOGY' },
    { icon: <ShoppingCart size={28} />, label: 'ECOMMERCE' },
    { icon: <Banknote size={28} />, label: 'BANKING' },
    { icon: <Truck size={28} />, label: 'LOGISTICS' },
    { icon: <Hospital size={28} />, label: 'HOSPITAL' },
    { icon: <Plane size={28} />, label: 'TRAVEL' },
    { icon: <GraduationCap size={28} />, label: 'EDUCATION' },
    { icon: <Factory size={28} />, label: 'MANUFACTURING' },
];

export default function IndustriesPage() {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat px-6 py-16"
            style={{
                backgroundImage: `url('/industries-back (1).jpg')`,
            }}
        >
            
            <div className="absolute inset-0 z-0" />

       
            <div className="relative z-10 max-w-5xl mx-auto text-white text-center">
                <h3 className="relative inline-block text-3xl font-bold mb-10 tracking-wide text-white after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-24 after:h-1 after:bg-white after:rounded-full">
                    INDUSTRIES
                </h3>


                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {industries.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-5 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition duration-300"
                        >
                            <div className="mb-2 text-white">{item.icon}</div>
                            <p className="text-sm font-semibold text-white tracking-wide">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
