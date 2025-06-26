'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss how we can help accelerate your digital journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Send us a message
              </h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder-gray-400"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder-gray-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder-gray-400"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Applications</option>
                    <option value="consulting">Tech Consulting</option>
                    <option value="partnership">Partnership</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder-gray-400 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">24H</div>
                  <div className="text-xs text-blue-800">Response Time</div>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">100+</div>
                  <div className="text-xs text-blue-800">Projects Done</div>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">5★</div>
                  <div className="text-xs text-blue-800">Client Rating</div>
                </div>
              </div>

              {/* Office Location */}
              <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Our Office</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Vault Technologies</div>
                    <div className="text-gray-600 text-sm leading-relaxed">
                      Plot 123, Admiralty Way<br />
                      Lekki Phase 1, Lagos<br />
                      Lagos State, Nigeria
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-blue-600 font-medium">📞</span>
                        <span className="text-gray-700">+234 802 123 4567</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-blue-600 font-medium">✉️</span>
                        <span className="text-gray-700">hello@vault.ng</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-blue-600">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <div className="text-gray-500 text-sm">
                      24/7 emergency support for enterprise clients
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-3">
                  <a href="#" className="bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-3 text-center">
                    <div className="font-bold text-blue-600 mb-1">LinkedIn</div>
                  </a>
                  <a href="#" className="bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-3 text-center">
                    <div className="font-bold text-blue-600 mb-1">Twitter</div>
                  </a>
                  <a href="#" className="bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-3 text-center">
                    <div className="font-bold text-blue-600 mb-1">Instagram</div>
                  </a>
                  <a href="#" className="bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-3 text-center">
                    <div className="font-bold text-blue-600 mb-1">GitHub</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Find Us in Lagos
          </h2>
          <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-4 shadow-lg">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-64 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-3">📍</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Interactive Map</div>
                <div className="text-gray-600 text-sm">Plot 123, Admiralty Way, Lekki Phase 1</div>
                <div className="text-blue-600 text-sm mt-1">Lagos, Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-2 text-blue-600">
            VAULT
          </div>
          <p className="text-gray-600 mb-4">
            Building the future of technology in Nigeria
          </p>
          <div className="text-gray-500 text-sm">
            © 2024 Vault Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}