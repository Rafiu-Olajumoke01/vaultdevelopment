'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        notRobot: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-12">

                {/* Left Side - Form */}
                <div className="w-full md:w-1/2 max-w-lg order-1 md:order-1">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

                        <p className="text-gray-600 text-center mb-8">
                            Share your query and we'll get back to you soon
                        </p>

                        <div className="space-y-6">
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700 block">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#062953] focus:border-transparent transition-all duration-200 hover:border-gray-300"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700 block">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#062953] focus:border-transparent transition-all duration-200 hover:border-gray-300"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700 block">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#062953] focus:border-transparent transition-all duration-200 hover:border-gray-300"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700 block">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell us about your query or project..."
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#062953] focus:border-transparent transition-all duration-200 hover:border-gray-300"
                                />
                            </div>

                            {/* Enhanced checkbox */}
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                <input
                                    type="checkbox"
                                    id="notRobot"
                                    name="notRobot"
                                    checked={formData.notRobot}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-[#062953] border-gray-300 rounded focus:ring-[#062953] focus:ring-2"
                                />
                                <label htmlFor="notRobot" className="text-sm text-gray-700 flex items-center gap-2">
                                    <span>I am not a robot</span>
                                    <span className="text-green-500">✓</span>
                                </label>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-gradient-to-r from-[#062953] to-[#0a3a6b] text-white py-4 rounded-xl font-semibold hover:from-[#051f3e] hover:to-[#062953] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                            >
                                Send Message
                            </button>
                        </div>

                    </div>
                </div>

                {/* Right Side - Animation Image */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center order-2 md:order-2">
                    <h3 className="relative inline-block text-3xl md:text-4xl font-bold mb-6 text-[#2886f8] text-center after:content-[''] after:block after:mx-auto after:mt-2 after:w-20 after:h-1 after:bg-[#2886f8] after:rounded-full">
                        Get in Touch
                    </h3>

                    <div className="w-full max-w-lg animate-float">
                        <Image
                            src="/10-work@2x (1).png"
                            alt="Contact Animation"
                            width={500}
                            height={500}
                            className="object-contain drop-shadow-lg w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}