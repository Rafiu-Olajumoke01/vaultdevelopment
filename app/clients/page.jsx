'use client';

import Image from 'next/image';
import { useState } from 'react';

const clients = [
  {
    id: 1,
    name: 'Flutterwave',
    description: 'Leading African fintech company providing payment infrastructure for global merchants and payment service providers.',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80',
    industry: 'Fintech',
    location: 'Lagos, Nigeria',
    partnership: '2019',
    services: ['Payment Processing', 'API Integration', 'Mobile Solutions'],
    testimonial: 'Vault delivered exceptional technical expertise and transformed our payment infrastructure completely.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jumia Technologies',
    description: 'Africa\'s leading e-commerce platform, revolutionizing online shopping and logistics across the continent.',
    logo: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=600&q=80',
    industry: 'E-commerce',
    location: 'Lagos, Nigeria',
    partnership: '2020',
    services: ['E-commerce Platform', 'Logistics Solutions', 'Mobile Apps'],
    testimonial: 'Vault\'s innovative approach to e-commerce technology has streamlined our operations significantly.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Access Bank',
    description: 'Leading Nigerian bank providing comprehensive financial services with cutting-edge digital banking solutions.',
    logo: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=600&q=80',
    industry: 'Banking',
    location: 'Lagos, Nigeria',
    partnership: '2021',
    services: ['Digital Banking', 'Security Solutions', 'Mobile Banking'],
    testimonial: 'Exceptional security focus and user experience design. Our customers love the new digital platform.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Nigerian National Petroleum Corporation',
    description: 'Nigeria\'s national oil company focused on petroleum exploration, production, and sustainable energy solutions.',
    logo: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=600&q=80',
    industry: 'Energy',
    location: 'Abuja, Nigeria',
    partnership: '2022',
    services: ['IoT Solutions', 'Data Analytics', 'Process Automation'],
    testimonial: 'Vault\'s expertise in IoT and data analytics has revolutionized our operational monitoring capabilities.',
    rating: 4,
  },
  {
    id: 5,
    name: 'Lifeshelve Healthcare',
    description: 'Digital healthcare platform providing telemedicine services and health management tools across Nigeria.',
    logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80',
    industry: 'Healthcare',
    location: 'Lagos, Nigeria',
    partnership: '2023',
    services: ['Telemedicine', 'Health Analytics', 'Patient Management'],
    testimonial: 'Professional team with deep understanding of Nigerian healthcare technology requirements.',
    rating: 5,
  },
  {
    id: 6,
    name: 'uLesson Education',
    description: 'Leading EdTech company creating interactive learning platforms and digital classroom solutions for African students.',
    logo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
    industry: 'Education',
    location: 'Lagos, Nigeria',
    partnership: '2023',
    services: ['E-Learning Platforms', 'Educational Apps', 'LMS Development'],
    testimonial: 'Vault delivered an exceptional learning management system that exceeded our expectations.',
    rating: 4,
  },
];

const industries = ['All', 'Fintech', 'E-commerce', 'Banking', 'Energy', 'Healthcare', 'Education'];

export default function ClientsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedClient, setSelectedClient] = useState(null);

  const filteredClients = selectedIndustry === 'All' 
    ? clients 
    : clients.filter(client => client.industry === selectedIndustry);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              Our <span className="text-blue-600 mb-5">Trusted</span> Clients
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              We're proud to partner with innovative companies across diverse industries, 
              helping them achieve digital transformation and sustainable growth through cutting-edge technology solutions.
            </p>
            {/* <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-white shadow-lg rounded-lg px-6 py-3 border border-gray-200">
                <span className="text-2xl font-bold text-blue-600">50+</span>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg px-6 py-3 border border-gray-200">
                <span className="text-2xl font-bold text-blue-600">100+</span>
                <p className="text-sm text-gray-600">Projects Delivered</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg px-6 py-3 border border-gray-200">
                <span className="text-2xl font-bold text-blue-600">6</span>
                <p className="text-sm text-gray-600">Industries Served</p>
              </div>
            </div> */}
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <Image
                src="https://www.techasoft.com/debug/img/banner_icon.png"
                alt="Client collaboration"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl object-contain transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                Since 2019
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-gray-600 text-lg">Filter clients by industry to see our diverse portfolio</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedIndustry === industry
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      </section>

      {/* Clients Grid */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClients.map((client) => (
            <div 
              key={client.id} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative mb-6">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="rounded-xl object-cover w-full h-48 shadow-md"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {client.industry}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{client.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>📍 {client.location}</span>
                    <span>•</span>
                    <span>🤝 Partner since {client.partnership}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {client.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Services Provided:</h4>
                    <div className="flex flex-wrap gap-1">
                      {client.services.map((service, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center mb-2">
                      {renderStars(client.rating)}
                    </div>
                    <p className="text-sm text-gray-700 italic">"{client.testimonial}"</p>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={() => setSelectedClient(client)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-sm"
                  >
                    View Details
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-medium text-sm">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold">{selectedClient.name}</h3>
              <button 
                onClick={() => setSelectedClient(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <img 
              src={selectedClient.logo} 
              alt={selectedClient.name}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <div className="space-y-4">
              <p className="text-gray-700">{selectedClient.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong>Industry:</strong> {selectedClient.industry}
                </div>
                <div>
                  <strong>Location:</strong> {selectedClient.location}
                </div>
                <div>
                  <strong>Partnership Since:</strong> {selectedClient.partnership}
                </div>
                <div className="flex items-center">
                  <strong className="mr-2">Rating:</strong> {renderStars(selectedClient.rating)}
                </div>
              </div>
              <div>
                <strong>Services:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedClient.services.map((service, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <strong>Client Testimonial:</strong>
                <p className="mt-2 italic">"{selectedClient.testimonial}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}