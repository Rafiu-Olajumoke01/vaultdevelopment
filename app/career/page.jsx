'use client';

import { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, X, Search, Users, TrendingUp, Award, ChevronRight, Building, Calendar } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Mumbai',
    type: 'Full-time',
    salary: '₹12-18 LPA',
    skills: ['React', 'Node.js', 'TypeScript'],
    featured: true,
    posted: '2 days ago',
    applicants: '25+ applicants'
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Bangalore',
    type: 'Full-time',
    salary: '₹8-12 LPA',
    skills: ['Figma', 'Prototyping', 'Research'],
    posted: '5 days ago',
    applicants: '18+ applicants'
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Delhi',
    type: 'Full-time',
    salary: '₹10-15 LPA',
    skills: ['Docker', 'AWS', 'Kubernetes'],
    posted: '1 week ago',
    applicants: '32+ applicants'
  },
  {
    id: 4,
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹15-22 LPA',
    skills: ['Strategy', 'Analytics', 'Leadership'],
    posted: '3 days ago',
    applicants: '41+ applicants'
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplication, setShowApplication] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Building className="w-4 h-4 text-blue-300" />
              <span className="text-blue-100 text-sm font-medium">Vault Careers</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Shape the Future of
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Technology</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Join our world-class team of innovators, creators, and problem-solvers building next-generation software solutions
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-300" />
                <span className="font-semibold text-white">{jobs.length}</span>
                <span>Open Positions</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-300" />
                <span className="font-semibold text-white">Remote</span>
                <span>Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-300" />
                <span className="font-semibold text-white">Global</span>
                <span>Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search positions, skills, or departments..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
            <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white min-w-[160px]">
              <option value="">All Departments</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="product">Product</option>
            </select>
            <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white min-w-[140px]">
              <option value="">All Locations</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="delhi">Delhi</option>
              <option value="remote">Remote</option>
            </select>
          </div>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
          <p className="text-gray-600 text-lg">Discover opportunities that match your passion and expertise</p>
        </div>

        <div className="grid gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
              {job.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-purple-600 text-white px-4 py-1 rounded-bl-xl text-sm font-medium">
                  Featured
                </div>
              )}
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-green-500" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-purple-500" />
                          <span className="font-semibold">{job.salary}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <span key={skill} className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-blue-100">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Posted {job.posted}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{job.applicants}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 lg:min-w-[240px]">
                  <button 
                    onClick={() => setSelectedJob(job)}
                    className="flex items-center justify-center gap-2 px-6 py-3 text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-all font-semibold group-hover:border-blue-700 group-hover:text-blue-700"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setShowApplication(true)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg hover:shadow-xl"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-t-3xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedJob.title}</h2>
                  <div className="flex items-center gap-4 text-blue-100">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {selectedJob.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedJob.location}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <h4 className="font-bold text-gray-900">Job Type</h4>
                  </div>
                  <p className="text-gray-700 font-medium">{selectedJob.type}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-gray-900">Salary Range</h4>
                  </div>
                  <p className="text-gray-700 font-medium">{selectedJob.salary}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    <h4 className="font-bold text-gray-900">Applicants</h4>
                  </div>
                  <p className="text-gray-700 font-medium">{selectedJob.applicants}</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About This Role</h3>
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    We're seeking an exceptional {selectedJob.title} to join our innovative {selectedJob.department} team. 
                    This role offers the opportunity to work on cutting-edge projects that impact millions of users worldwide.
                  </p>
                  <p>
                    You'll collaborate with world-class engineers, designers, and product managers in an environment that 
                    values creativity, technical excellence, and continuous learning.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Skills & Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedJob.skills.map((skill) => (
                    <div key={skill} className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 px-4 py-3 rounded-xl text-center">
                      <span className="text-indigo-800 font-semibold">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => {
                    setSelectedJob(null);
                    setShowApplication(true);
                  }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Apply for This Position
                </button>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="flex-1 border-2 border-gray-300 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors text-gray-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Modal */}
      {showApplication && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold">Apply Now</h2>
                  <p className="text-blue-100 mt-1">Join the Vault team</p>
                </div>
                <button 
                  onClick={() => setShowApplication(false)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Position *</label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white transition-all">
                  <option value="">Select Position</option>
                  {jobs.map(job => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Why Vault? *</label>
                <textarea 
                  placeholder="Tell us what excites you about joining our team..."
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Resume *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors bg-gray-50">
                  <div className="mb-4">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-3">Upload your resume</p>
                  <p className="text-sm text-gray-500 mb-4">PDF, DOC, DOCX up to 10MB</p>
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                  <button 
                    type="button"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
                  >
                    Choose File
                  </button>
                </div>
              </div>
              
              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <button 
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                  onClick={() => setShowApplication(false)}
                >
                  Submit Application
                </button>
                <button 
                  onClick={() => setShowApplication(false)}
                  className="flex-1 border-2 border-gray-300 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}