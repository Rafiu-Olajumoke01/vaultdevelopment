'use client';
import React from 'react';

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Banner */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/AboutBanner2.jpg"
                        alt="Development Excellence"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 "></div>
                </div>
                <div className="relative flex items-center justify-center h-full">
                    <div className="text-center px-4 sm:px-6">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl text-dark-400 mb-4 md:mb-6 drop-shadow-2xl">
                            Get to know <span className='text-dark-400'>Vault</span>
                        </h1>
                        <div className="w-24 md:w-32 h-1 bg-blue-400 mx-auto mb-4"></div>
                    </div>
                </div>
            </div>

            {/* About Page Content */}
            <div
                className="min-h-[1200px] pt-12 md:pt-20 pb-16 md:pb-32 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/AboutBanner.svg')" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center space-y-12 md:space-y-16">
                        
                        {/* Welcome Section */}
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 w-full max-w-6xl border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
                            <div className="text-center mb-8 md:mb-10">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">WELCOME TO VAULT</h2>
                                <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto mb-6 md:mb-8"></div>
                                <p className="text-lg sm:text-xl text-blue-600 font-medium">Your Gateway to Exceptional Development Solutions</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                                <div>
                                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                                        Welcome to Vault, where development excellence meets innovation in every project we create. We are passionate developers dedicated to transforming complex business challenges into elegant digital solutions through cutting-edge technology, creative problem-solving, and unmatched expertise.
                                    </p>
                                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                        Our journey began with a simple yet powerful vision: to create impactful digital experiences that drive business growth, streamline operations, and turn innovative ideas into reality.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-6 md:p-8 rounded-xl md:rounded-2xl">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Our Story</h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        Founded by a team of software architects with decades of combined experience, Vault represents the culmination of years spent mastering the art of clean code, scalable architecture, and user-centric design. We believe that great software tells a story, and we're here to help you write yours.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Statistics Section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-6xl">
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-2">200+</div>
                                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Projects Completed</p>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-2">150+</div>
                                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Happy Clients</p>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-2">25+</div>
                                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Expert Developers</p>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-2">8</div>
                                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Years Experience</p>
                            </div>
                        </div>

                        {/* Vision & Mission Cards */}
                        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 w-full max-w-6xl">
                            {/* Vision Card */}
                            <div className="bg-blue-50 rounded-2xl md:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-blue-200 hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300">
                                <div className="text-center">
                                    <div className="bg-blue-500 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg">
                                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">OUR VISION</h3>
                                    <div className="w-12 md:w-16 h-1 bg-blue-500 mx-auto mb-4 md:mb-6"></div>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                        To become the leading development company that transforms businesses through innovative technology solutions, setting new standards in software quality, user experience, and technical excellence while fostering a culture of continuous learning and innovation.
                                    </p>
                                </div>
                            </div>

                            {/* Mission Card */}
                            <div className="bg-blue-50 rounded-2xl md:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-blue-200 hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300">
                                <div className="text-center">
                                    <div className="bg-blue-500 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg">
                                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">OUR MISSION</h3>
                                    <div className="w-12 md:w-16 h-1 bg-blue-500 mx-auto mb-4 md:mb-6"></div>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                        To deliver exceptional software solutions through cutting-edge technology, clean code practices, and outstanding client collaboration, while building lasting partnerships and contributing positively to the tech community through knowledge sharing and mentorship.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* What Makes Us Special */}
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 w-full max-w-6xl border border-gray-100">
                            <div className="text-center mb-8 md:mb-12">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">WHAT MAKES US SPECIAL</h2>
                                <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto mb-6 md:mb-8"></div>
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                                    Discover the unique elements that set Vault apart in the development landscape
                                </p>
                            </div>
                            
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                                {/* Modern Tech Stack */}
                                <div className="text-center p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-md">
                                    <div className="bg-blue-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                                        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Modern Tech Stack</h4>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">Latest technologies and frameworks including React, Node.js, Python, and cloud platforms for scalable solutions.</p>
                                </div>

                                {/* Expert Team */}
                                <div className="text-center p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-md">
                                    <div className="bg-blue-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                                        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Expert Team</h4>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">Certified developers with expertise in full-stack development, DevOps, and emerging technologies.</p>
                                </div>

                                {/* Agile Process */}
                                <div className="text-center p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-md sm:col-span-2 lg:col-span-1">
                                    <div className="bg-blue-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                                        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Agile Process</h4>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">Streamlined development process with regular updates, transparent communication, and iterative improvements.</p>
                                </div>
                            </div>
                        </div>

                        {/* Core Values Section */}
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 w-full max-w-6xl border border-gray-100">
                            <div className="text-center mb-8 md:mb-12">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">OUR CORE VALUES</h2>
                                <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto mb-6 md:mb-8"></div>
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                                    The fundamental principles that guide everything we do at Vault
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                                {/* Quality */}
                                <div className="text-center p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-md">
                                    <div className="bg-blue-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                                        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">Quality</h4>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">We never compromise on code quality, testing standards, or performance optimization.</p>
                                </div>

                                {/* Innovation */}
                                <div className="text-center p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-md">
                                    <div className="bg-blue-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                                        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">Innovation</h4>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">We continuously explore new technologies and methodologies to deliver cutting-edge solutions.</p>
                                </div>

                                {/* Excellence */}
                                <div className="text-center p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-md">
                                    <div className="bg-blue-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                                        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">Excellence</h4>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">We strive for excellence in every line of code and client interaction.</p>
                                </div>

                                {/* Collaboration */}
                                <div className="text-center p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-md">
                                    <div className="bg-blue-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                                        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">Collaboration</h4>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">We believe in transparent communication and partnership with our clients throughout the development process.</p>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Us Section */}
                        <div className="bg-blue-50 rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 w-full max-w-6xl border border-blue-200">
                            <div className="text-center mb-8 md:mb-12">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">WHY CHOOSE VAULT?</h2>
                                <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto mb-6 md:mb-8"></div>
                            </div>
                            
                            <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
                                <div>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                                        At Vault, we believe that great software is more than just code—it's a solution that transforms businesses, streamlines processes, and creates meaningful user experiences. Our team of passionate developers and dedicated project managers work tirelessly to ensure every application we build tells a story of innovation, reliability, and user-centric design.
                                    </p>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                                        We combine proven development methodologies with cutting-edge technologies, using the latest frameworks and tools to create applications that not only meet your current needs but also scale with your business growth. Every project at Vault is crafted with attention to detail, from the initial architecture design to the final deployment.
                                    </p>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                        Join us on this digital transformation journey where every line of code is a step towards excellence, every feature is designed with purpose, and every project becomes a testament to what's possible when technology meets creativity.
                                    </p>
                                </div>
                                <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Our Promise to You</h3>
                                    <ul className="space-y-3 md:space-y-4">
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mr-2 md:mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm md:text-base text-gray-700">Exceptional code quality in every project we deliver</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mr-2 md:mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm md:text-base text-gray-700">Transparent communication throughout the development process</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mr-2 md:mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm md:text-base text-gray-700">Scalable solutions that grow with your business</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mr-2 md:mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm md:text-base text-gray-700">Continuous support and maintenance post-launch</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}