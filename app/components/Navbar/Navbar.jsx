'use client';
import React, { useState } from 'react';

const VaultNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white shadow-lg relative z-50">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-blue-400 hover:text-black transition-colors duration-300">
                            <img src="/VAULT.png" alt="" className='w-20 h-auto'/>
                        </a>
                    </div>

                    {/* Desktop Menu - Centered */}
                    <div className="hidden xl:flex flex-1 justify-center">
                        <div className="flex items-baseline space-x-2 2xl:space-x-4">
                            <a href="#" className="text-black hover:text-blue-400 px-2 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-colors duration-300">
                                HOME
                            </a>
                            <a href="#" className="text-black hover:text-blue-400 px-2 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-colors duration-300">
                                ABOUT US
                            </a>
                            <a href="#" className="text-black hover:text-blue-400 px-2 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-colors duration-300">
                                NEWS
                            </a>

                            {/* Products Dropdown */}
                            <div className="relative group">
                                <a href="#" className="text-black hover:text-blue-400 px-2 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-colors duration-300">
                                    PRODUCTS
                                </a>
                                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200">
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center border-b border-blue-400 pb-2">
                                            OUR PRODUCTS
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium text-gray-800 mb-2">Security Solutions</h4>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">Digital Vault Systems</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">Encryption Software</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">Access Control</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">Biometric Solutions</a>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-800 mb-2">Enterprise Products</h4>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">Vault Enterprise</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">Cloud Security</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">Data Protection</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">Compliance Tools</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href="#" className="text-black hover:text-blue-400 px-2 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-colors duration-300">
                                CLIENTS
                            </a>

                            {/* Technology Dropdown */}
                            <div className="relative group">
                                <a
                                    href="#"
                                    className="text-black hover:text-blue-400 px-2 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-colors duration-300"
                                >
                                    TECHNOLOGY
                                </a>
                                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl lg:max-w-5xl xl:max-w-6xl h-auto max-h-[30rem] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200 overflow-y-auto">
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center border-b border-blue-400 pb-2">
                                            TECHNOLOGY STACK
                                        </h3>
                                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 leading-relaxed">
                                            <div>
                                                <h4 className="font-medium text-blue-900 mb-2 text-lg ">UI DESIGN</h4>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">HTML/HTML5, CSS3</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">ANGULARJS, JS</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">AJAX/JSON</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">JQUERY, JQUERY UI</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">DRUPAL</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">JOOMLA</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">WORDPRESS</a>

                                                <h4 className="font-medium text-blue-900 mb-2 text-lg mt-4">CLOUD COMPUTING</h4>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">AWS DEVELOPMENT</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">GOOGLE CLOUD</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">GO DADDY</a>
                                            </div>

                                            <div>
                                                <h4 className="font-medium text-blue-900 mb-2 text-lg">SERVER SIDE SCRIPTING</h4>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">PHP</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">J2EE, J2SE, SWING, SERVLET</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">SPRING, STRUTS, HIBERNATE</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">JSP, JSF, APACHECXF</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">JUNIT, TESTING, MOCKITO</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">MICROSFT VISIO, ENTERPRISE ARCHITECT</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">SHELL</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">PERL</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">PYTHON</a>
                                            </div>

                                            <div>
                                                <h4 className="font-medium text-blue-900 mb-2 text-lg">DATA MINING AND ANALYTICS</h4>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">DATABASE DESIGN: ORACLE</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">SQL DATABASE</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">REDIS</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">CASSANDRA</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">DATABASE CONSULTING: SQL SERVER</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">DATABASE DEVELOPMENT: MONGODB</a>

                                                <h4 className="font-medium text-blue-900 mb-2 text-lg mt-4">WEB SERVER TECHNOLOGY</h4>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">JBOSS</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">APACHE</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">TOMCAT</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">IIS</a>
                                            </div>

                                            <div className="lg:block xl:block">
                                                <h4 className="font-medium text-blue-900 mb-2 text-lg">TESTING</h4>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">SOFTWARE TESTING</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">UNIT TESTING</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">INTEGRATION TESTING</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">SYSTEM TESTING</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">DEVELOPMENT AUTOMATION</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">DevSecOps</a>

                                                <h4 className="font-medium text-blue-900 mb-2 text-lg mt-4">SOFTWARE PROCESS</h4>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 text-sm py-1 leading-relaxed">SDLC</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services Dropdown */}
                            <div className="relative group">
                                <a
                                    href="#"
                                    className="text-black hover:text-blue-400 px-2 py-2 rounded-md text-xs lg:text-sm font-medium uppercase tracking-wide transition-colors duration-300"
                                >
                                    SERVICES
                                </a>
                                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl lg:max-w-5xl xl:max-w-6xl h-auto max-h-[30rem] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200 overflow-y-auto">
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center border-b border-blue-400 pb-2">
                                            OUR SERVICES
                                        </h3>
                                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                            <div>
                                                <h4 className="font-medium text-blue-900 mb-2 text-lg">ONLINE MARKETING</h4>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">SEO SERVICES</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">SEARCH ENGINE MARKETING</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">SOCIAL MEDIA MARKETING</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">PAY PER CLICK MANAGEMENT</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">SEO COPYWRITING</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">DIGITAL MARKETING</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">BRAND CONSULTING</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">LEAD MANAGEMENT SYSTEM</a>

                                                <h4 className="font-medium text-blue-900 mb-2 text-lg mt-4">CONSULTANT</h4>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">NETSUITE SOLUTION CONSULTANT</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">RECRUITMENT SERVICE</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">SHAREPOINT DEVELOPMENT</a>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-blue-900 mb-2 text-lg">DEVELOPMENT</h4>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">System Integration</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">Custom Development</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">Training & Support</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">Maintenance</a>
                                            </div>

                                            <div>
                                                <h4 className="font-medium text-blue-900 mb-2 text-lg">WEB DEVELOPMENT</h4>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">WEBSITE DESIGN</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">WEBSITE DEVELOPMENT</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">CRM SOFTWARE DEVELOPMENT</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">EDUCATIONAL WEB PORTAL</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">RESTAURANT WEB PORTAL</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">HEALTH WEB PORTAL</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">TRAVEL PORTAL DEVELOPMENT</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">REAL ESTATE PORTAL</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">E-COMMERCE WEBSITE</a>
                                            </div>

                                            <div className="lg:block xl:block">
                                                <h4 className="font-medium text-blue-900 mb-2 text-lg">IMPLEMENTATION</h4>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">System Integration</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">Custom Development</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">Training & Support</a>
                                                <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 text-sm transition-colors duration-200">Maintenance</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href="#" className="text-black hover:text-blue-400 px-2 py-2 rounded-md text-xs lg:text-sm font-medium uppercase tracking-wide transition-colors duration-300">
                                CAREERS
                            </a>
                            <a href="#" className="text-black hover:text-blue-400 px-2 py-2 rounded-md text-xs lg:text-sm font-medium uppercase tracking-wide transition-colors duration-300">
                                CONTACT 
                            </a>
                            <a href="#" className="text-black hover:text-blue-400 px-2 py-2 rounded-md text-xs lg:text-sm font-medium uppercase tracking-wide transition-colors duration-300">
                                BLOGS
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button - Changed from xl to lg */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-800 hover:text-blue-400 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    className={!isMobileMenuOpen ? 'block' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={isMobileMenuOpen ? 'block' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu - Changed from xl to lg */}
            <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
                    <a href="#" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium uppercase">HOME</a>
                    <a href="#" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium uppercase">ABOUT US</a>
                    <a href="#" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium uppercase">NEWS</a>
                    <a href="#" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium uppercase">PRODUCTS</a>
                    <a href="#" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium uppercase">CLIENTS</a>
                    <a href="#" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium uppercase">TECHNOLOGY</a>
                    <a href="#" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium uppercase">SERVICES</a>
                    <a href="#" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium uppercase">CAREERS</a>
                    <a href="#" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium uppercase">CONTACT US</a>
                    <a href="#" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium uppercase">BLOGS</a>
                </div>
            </div>
        </nav>
    );
};

export default VaultNavbar;