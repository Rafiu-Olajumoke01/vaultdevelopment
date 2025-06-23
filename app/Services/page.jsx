'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    id: 1,
    title: 'SOFTWARE DEVELOPMENT',
    image: '/service-imgOne.svg',
    description:
      'It is a process involving the creation, maintenance of applications, frameworks of software, design, programming, testing and bug fixing.',
    delay: '100',
  },
  {
    id: 2,
    title: 'MOBILE DEVELOPMENT',
    image: '/service-imgTwo.svg',
    description:
      'The act of developing app suitable for mobile devices that involve writing software for small, wireless computing devices.',
    delay: '200',
  },
  {
    id: 3,
    title: 'WEBSITE DEVELOPMENT',
    image: '/service-imgThree.svg',
    description:
      'It involves building and maintaining the websites, it makes the website look great, works quickly with firm user experience.',
    delay: '300',
  },
  {
    id: 4,
    title: 'CRM SOFTWARE DEVELOPMENT',
    image: '/service-imgFour.svg',
    description:
      'It is the tool or technique that helps companies make a healthy relationship with their customers by organizing the data.',
    delay: '400',
  },
  {
    id: 5,
    title: 'UI/UX DESIGNING',
    image: '/service-imgFive.svg',
    description:
      'It increases the user experience and customer satisfaction, which ultimately increases the number of customers, resulting in the growth of the business.',
    delay: '500',
  },
  {
    id: 6,
    title: 'DIGITAL MARKETING',
    image: '/service-imgSix.svg',
    description:
      'It is a strategy that uses multiple channels to attract, engage and convert customers online.',
    delay: '600',
  },
];

export default function ServicesGrid() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen py-16 px-4 overflow-hidden">
      {/* Decorative background images */}
      <img
        src="./side-design_home@3x.png"
        alt=""
        className="absolute top-0 left-0 w-28 opacity-10 z-0"
      />
      <img
        src="/side-design_home@3x.png"
        alt=""
        className="absolute bottom-0 right-0 w-28 opacity-10 rotate-180 z-0"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#062953] text-xl md:text-2xl lg:text-3xl font-bold inline-block relative after:content-[''] after:block after:w-24 after:h-[3px] after:bg-blue-600 after:mx-auto after:mt-3">
            OUR SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="relative group bg-white shadow-xl p-6 min-h-[300px] border border-gray-200 overflow-hidden transition-all duration-300">
                {/* Blue overlay on hover */}
                <div className="absolute inset-0 bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center z-10 flex flex-col justify-center items-center px-6 text-white">
                  <h3 className="text-xl font-bold mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-sm text-center">{service.description}</p>
                </div>

                {/* Main content */}
                <div className="relative z-20 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="mb-4 flex justify-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
