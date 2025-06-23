'use client';

import Image from 'next/image';
import { useState } from 'react';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '4-6 years',
    salary: '₹12-18 LPA',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
    description: 'Join our engineering team to build scalable web applications and contribute to our cutting-edge technology stack.',
    responsibilities: [
      'Develop and maintain full-stack web applications',
      'Collaborate with cross-functional teams to define and implement new features',
      'Optimize applications for maximum speed and scalability',
      'Mentor junior developers and conduct code reviews'
    ],
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '4+ years of experience in full-stack development',
      'Strong proficiency in React, Node.js, and modern JavaScript',
      'Experience with cloud platforms (AWS/Azure)',
      'Excellent problem-solving and communication skills'
    ],
    benefits: ['Health Insurance', 'Flexible Hours', 'Remote Work', 'Learning Budget'],
    urgent: true,
    featured: true
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₹8-12 LPA',
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research', 'Design Systems'],
    description: 'Create beautiful and intuitive user experiences for our digital products across web and mobile platforms.',
    responsibilities: [
      'Design user interfaces for web and mobile applications',
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and design systems',
      'Collaborate with developers to ensure design implementation'
    ],
    requirements: [
      'Bachelor\'s degree in Design or related field',
      '2+ years of UI/UX design experience',
      'Proficiency in Figma, Sketch, or Adobe XD',
      'Strong portfolio demonstrating design skills',
      'Understanding of user-centered design principles'
    ],
    benefits: ['Health Insurance', 'Creative Freedom', 'Design Conferences', 'Flexible Hours'],
    urgent: false,
    featured: true
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Delhi, India',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '₹10-15 LPA',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform'],
    description: 'Build and maintain our cloud infrastructure, ensuring reliable and scalable deployment pipelines.',
    responsibilities: [
      'Design and implement CI/CD pipelines',
      'Manage cloud infrastructure on AWS/Azure',
      'Monitor system performance and reliability',
      'Implement security best practices and compliance'
    ],
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of DevOps/Infrastructure experience',
      'Strong knowledge of containerization and orchestration',
      'Experience with cloud platforms and automation tools',
      'Understanding of security and compliance requirements'
    ],
    benefits: ['Health Insurance', 'Certification Support', 'Flexible Hours', 'Stock Options'],
    urgent: true,
    featured: false
  },
  {
    id: 4,
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    experience: '5-7 years',
    salary: '₹15-22 LPA',
    skills: ['Product Strategy', 'Analytics', 'Agile', 'User Research', 'Roadmapping'],
    description: 'Drive product vision and strategy, working closely with engineering and design teams to deliver exceptional products.',
    responsibilities: [
      'Define product strategy and roadmap',
      'Gather and analyze user feedback and market research',
      'Work with engineering teams to prioritize features',
      'Track product metrics and KPIs'
    ],
    requirements: [
      'MBA or Bachelor\'s degree in relevant field',
      '5+ years of product management experience',
      'Strong analytical and strategic thinking skills',
      'Experience with agile development methodologies',
      'Excellent communication and leadership abilities'
    ],
    benefits: ['Health Insurance', 'Stock Options', 'Remote Work', 'Learning Budget'],
    urgent: false,
    featured: true
  },
  {
    id: 5,
    title: 'Data Scientist',
    department: 'Analytics',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₹9-14 LPA',
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'Data Visualization'],
    description: 'Analyze complex datasets to derive actionable insights and build machine learning models for business solutions.',
    responsibilities: [
      'Develop machine learning models and algorithms',
      'Analyze large datasets to identify trends and patterns',
      'Create data visualizations and reports for stakeholders',
      'Collaborate with product teams to implement data-driven solutions'
    ],
    requirements: [
      'Master\'s degree in Data Science, Statistics, or related field',
      '2+ years of experience in data science or analytics',
      'Strong proficiency in Python, R, and SQL',
      'Experience with machine learning frameworks',
      'Excellent analytical and problem-solving skills'
    ],
    benefits: ['Health Insurance', 'Research Time', 'Conference Attendance', 'Flexible Hours'],
    urgent: false,
    featured: false
  },
  {
    id: 6,
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Chennai, India',
    type: 'Full-time',
    experience: '1-3 years',
    salary: '₹5-8 LPA + Commission',
    skills: ['Sales', 'CRM', 'Communication', 'Negotiation', 'Lead Generation'],
    description: 'Drive revenue growth by identifying and converting leads into long-term clients for our technology solutions.',
    responsibilities: [
      'Generate and qualify leads through various channels',
      'Present product demonstrations to potential clients',
      'Negotiate contracts and close deals',
      'Maintain relationships with existing clients'
    ],
    requirements: [
      'Bachelor\'s degree in Business or related field',
      '1+ years of sales experience preferred',
      'Excellent communication and presentation skills',
      'Goal-oriented with strong negotiation abilities',
      'Experience with CRM software is a plus'
    ],
    benefits: ['Health Insurance', 'Commission Structure', 'Travel Opportunities', 'Performance Bonuses'],
    urgent: true,
    featured: false
  }
];

const departments = ['All', 'Engineering', 'Design', 'Product', 'Analytics', 'Sales'];
const locations = ['All', 'Mumbai, India', 'Bangalore, India', 'Delhi, India', 'Remote', 'Hyderabad, India', 'Chennai, India'];

const companyValues = [
  {
    icon: '🚀',
    title: 'Innovation First',
    description: 'We embrace cutting-edge technologies and encourage creative problem-solving in everything we do.'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and foster an environment where everyone\'s voice is heard.'
  },
  {
    icon: '📈',
    title: 'Growth Mindset',
    description: 'We support continuous learning and provide opportunities for professional and personal development.'
  },
  {
    icon: '⚖️',
    title: 'Work-Life Balance',
    description: 'We prioritize employee wellbeing with flexible schedules and comprehensive benefits.'
  }
];

const benefits = [
  { icon: '🏥', title: 'Comprehensive Health Insurance', description: 'Medical, dental, and vision coverage for you and your family' },
  { icon: '💻', title: 'Remote Work Options', description: 'Flexible hybrid work arrangements with modern tech setup' },
  { icon: '📚', title: 'Learning & Development', description: '₹50,000 annual learning budget for courses and conferences' },
  { icon: '🏖️', title: 'Unlimited PTO', description: 'Take time off when you need it with our flexible vacation policy' },
  { icon: '💰', title: 'Stock Options', description: 'Equity participation in company growth and success' },
  { icon: '🍕', title: 'Free Meals & Snacks', description: 'Complimentary breakfast, lunch, and healthy snacks daily' }
];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const filteredJobs = jobOpenings.filter(job => {
    const deptMatch = selectedDepartment === 'All' || job.department === selectedDepartment;
    const locMatch = selectedLocation === 'All' || job.location === selectedLocation;
    return deptMatch && locMatch;
  });

  const featuredJobs = jobOpenings.filter(job => job.featured);

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <div className="w-full h-full bg-gradient-to-l from-white/5 to-transparent backdrop-blur-sm"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl font-bold leading-tight">
                  Build Your <span className="text-blue-300">Future</span> With Us
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                  Join a team of passionate innovators creating the next generation of technology solutions. 
                  Your career journey starts here.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                  <div className="text-3xl font-bold">{jobOpenings.length}+</div>
                  <div className="text-blue-200 text-sm">Open Positions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-blue-200 text-sm">Team Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                  <div className="text-3xl font-bold">5★</div>
                  <div className="text-blue-200 text-sm">Glassdoor Rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowApplicationForm(true)}
                  className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Apply Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                  View Open Roles
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center text-white space-y-4">
                  <div className="text-5xl">👥</div>
                  <h3 className="text-2xl font-bold">Join Our Team</h3>
                  <p className="text-blue-200">
                    We're always looking for talented individuals who share our passion for innovation and excellence.
                  </p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values shape everything we do and create an environment where you can thrive and make a real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Opportunities</h2>
            <p className="text-xl text-gray-600">Hot positions we're actively hiring for</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJobs.map((job) => (
              <div key={job.id} className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-white/20 rounded-lg px-3 py-1 text-sm font-medium">
                    {job.department}
                  </div>
                  {job.urgent && (
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      URGENT
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{job.title}</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">{job.description}</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-blue-200">
                    <span>📍</span> {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-blue-200">
                    <span>💼</span> {job.experience}
                  </div>
                  <div className="flex items-center gap-2 text-blue-200">
                    <span>💰</span> {job.salary}
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedJob(job)}
                  className="w-full bg-white text-blue-800 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Your Perfect Role</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Department</label>
                <div className="flex flex-wrap gap-2">
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      onClick={() => setSelectedDepartment(dept)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedDepartment === dept
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Location</label>
                <div className="flex flex-wrap gap-2">
                  {locations.map((location) => (
                    <button
                      key={location}
                      onClick={() => setSelectedLocation(location)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedLocation === location
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600">
                Showing <span className="font-bold text-blue-600">{filteredJobs.length}</span> positions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Jobs Listing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      {job.urgent && (
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold">
                          URGENT HIRING
                        </span>
                      )}
                      {job.featured && (
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                          FEATURED
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <span className="text-blue-600">🏢</span> {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-blue-600">📍</span> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-blue-600">⏰</span> {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-blue-600">💼</span> {job.experience}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-blue-600">💰</span> {job.salary}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 5).map((skill, index) => (
                        <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 5 && (
                        <span className="text-gray-500 text-sm">+{job.skills.length - 5} more</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                    <button 
                      onClick={() => setSelectedJob(job)}
                      className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => setShowApplicationForm(true)}
                      className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      Quick Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Benefits Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team members with competitive benefits and perks that support your work and life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h2>
                <p className="text-gray-600">{selectedJob.department} • {selectedJob.location}</p>
              </div>
              <button 
                onClick={() => setSelectedJob(null)}
                className="text-gray-500 hover:text-gray-700 text-3xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Experience</h4>
                  <p className="text-blue-700">{selectedJob.experience}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Job Type</h4>
                  <p className="text-blue-700">{selectedJob.type}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Salary</h4>
                  <p className="text-blue-700">{selectedJob.salary}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Job Description</h3>
                <p className="text-gray-700 leading-relaxed">{selectedJob.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.benefits.map((benefit, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                <button 
                  onClick={() => {
                    setSelectedJob(null);
                    setShowApplicationForm(true);
                  }}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-blue-700 transition-colors duration-300"
                >
                  Apply for This Position
                </button>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-bold hover:bg-gray-50 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Apply for Position</h2>
              <button 
                onClick={() => setShowApplicationForm(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Position Applied For</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    <option value="">Select a position</option>
                    {jobOpenings.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-8">5-8 years</option>
                    <option value="8+">8+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current/Expected Salary *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="e.g., ₹8-12 LPA"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <div className="text-4xl text-gray-400 mb-2">📄</div>
                    <p className="text-gray-600 mb-2">Drag and drop your resume here, or click to browse</p>
                    <p className="text-sm text-gray-500">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    <button type="button" className="mt-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors">
                      Choose File
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Tell us why you're the perfect fit for this role..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                  <input 
                    type="url" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio/GitHub (if applicable)</label>
                  <input 
                    type="url" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="https://yourportfolio.com or https://github.com/yourusername"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm text-gray-700">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and 
                      <a href="#" className="text-blue-600 hover:underline ml-1">Privacy Policy</a>. 
                      I consent to the processing of my personal data for recruitment purposes.
                    </span>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                  <button 
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Submit Application
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-bold hover:bg-gray-50 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}