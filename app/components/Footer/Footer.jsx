'use client'

import Link from 'next/link'

const footerData = [
  {
    title: 'Company Info',
    links: [
      'Techasoft Pvt. Ltd.',
      '#435, 3rd Floor, 27th Main Road, HSR Layout, Bangalore - 560102',
      'info@techasoft.com',
      '+91 8884 739 988',
      'Get Direction'
    ]
  },
  {
    title: 'Branch Offices',
    links: [
      'Hyderabad - Al Hasnath Colony, Toli Chowki, Telangana',
      'Jabalpur - Teen Patti, Madhya Pradesh',
      'Delhi - Abul Fazal Enclave, Jamia Nagar, Okhla',
      'Haryana - Sector 57, Gurgaon',
      'Thane - Vedant Complex, Vartak Nagar',
      'Jamshedpur - Bistupur, Jharkhand'
    ]
  },
  {
    title: 'International Services',
    links: [
      'Digital Marketing',
      'SEO Agency',
      'Search Engine Marketing',
      'Social Media Marketing',
      'Mississauga, ON, Canada - +1 647 470 2985',
      'Dubai - Meena Bazar - +971 507557789'
    ]
  },
  {
    title: 'Ecommerce Services',
    links: [
      'Book E-commerce Store',
      'Electronic E-commerce Store',
      'Home E-commerce Store',
      'Jewelry E-commerce Store'
    ]
  },
  {
    title: 'Product Services',
    links: [
      'Healthcare Management',
      'Election Management Software',
      'Banking Management Software',
      'Trading Software',
      'Travel Management Software',
      'Event Management Software',
      'Custom Boutique Software',
      'Wedding Management Software',
      'Salon Booking Software'
    ]
  },
  {
    title: 'Testing & Consulting',
    links: [
      'Software Testing',
      'Security Testing',
      'Performance Testing',
      'NetSuite Consultant',
      'Recruitment Service',
      'SharePoint Development & Support',
      'Software Consultant',
      'NetSuite Support Services'
    ]
  },
  {
    title: 'General Services',
    links: [
      'Website Design',
      'Mobile App Development',
      'UI/UX Design',
      'Logo Design',
      'Brochure Design',
      'HR and Payroll Management',
      'SEO Services',
      'SEO Company In India'
    ]
  },
  {
    title: 'Hire Developers',
    links: [
      'PHP Developers',
      'Android Developers',
      'iOS Developers',
      'React Native Developers',
      'Angular Developers',
      'Node.js Developers',
      'NetSuite Developers',
      'SharePoint Developers'
    ]
  },
  {
    title: 'Training We Offer',
    links: [
      'Software Training in Bangalore',
      'Digital Marketing Training',
      'Full Stack Development Training',
      'IMS and SIP Training',
      'DevOps Training',
      'Contact Us For Training - +91 8867 746 186'
    ]
  },
  {
    title: 'Technology & Quick Links',
    links: [
      'Machine Learning Services',
      'Artificial Intelligence Services',
      'Logo Design Packages',
      'SEO Packages',
      'Portfolio',
      'Become a Partner',
      'Programming Guidelines for PHP',
      'Brand Guidelines',
      'HTML Sitemap',
      'XML Sitemap'
    ]
  },
  {
    title: 'Job Openings',
    links: [
      'Android Developer Jobs',
      'React Native Developer Jobs',
      'Angular Developer Jobs',
      'Node.js Developer Jobs',
      'Overseas Education Counselor Jobs',
      'Automation Testing Jobs',
      'Work From Home Jobs'
    ]
  },
  {
    title: 'Other Services',
    links: [
      'Bulk Laptop Dealers',
      'Guest Post Package',
      'Bulk SMS Services'
    ]
  }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm py-12 px-4 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {footerData.map((section, index) => (
          <div key={index}>
            <h3 className="text-white font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link href="#" className="hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
