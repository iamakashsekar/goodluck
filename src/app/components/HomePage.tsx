import { Phone, Mail, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Footer from './Footer';
import imgServiceLogo from 'figma:asset/edc7e64ee40cfa7bbb1fe063aee22e78d6b92251.png';

interface HomePageProps {
  onNavigate?: (page: 'services') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [currentHiringSlide, setCurrentHiringSlide] = useState(0);

  // Latest hiring images - You can update these with your actual hiring images
  const hiringSlides = [
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop',
      title: 'NOW HIRING',
      position: 'Senior Accountant',
      location: 'CBD Area',
      badge: 'URGENT'
    },
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop',
      title: 'NOW HIRING',
      position: 'Civil Engineer',
      location: 'Construction Projects',
      badge: 'HOT'
    },
    {
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop',
      title: 'NOW HIRING',
      position: 'Office Coordinator',
      location: 'Jurong Area',
      badge: 'NEW'
    },
    {
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop',
      title: 'NOW HIRING',
      position: 'Nursing Staff',
      location: 'Healthcare Facilities',
      badge: 'URGENT'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHiringSlide((prev) => (prev + 1) % hiringSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [hiringSlides.length]);

  const nextHiringSlide = () => {
    setCurrentHiringSlide((prev) => (prev + 1) % hiringSlides.length);
  };

  const prevHiringSlide = () => {
    setCurrentHiringSlide((prev) => (prev - 1 + hiringSlides.length) % hiringSlides.length);
  };

  return (
    <div className="min-h-screen bg-[#f5f3ed] py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <p className="text-sm text-red-600 mb-3 font-medium">Good Luck Employment Agency PTE.LTD</p>
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">Company Profile</h1>
        </div>

        {/* Latest Hiring Slider - Full Width on Top */}
        <div className="relative rounded-3xl shadow-2xl overflow-hidden border border-red-600 group bg-black h-[500px] mb-16">
          {/* Slider Container */}
          <div className="relative w-full h-[500px]">
            {hiringSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-all duration-700 ${
                  index === currentHiringSlide 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.position}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevHiringSlide}
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/50 text-white rounded-full p-1.5 md:p-2 hover:bg-white/30 transition-all z-20"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextHiringSlide}
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/50 text-white rounded-full p-1.5 md:p-2 hover:bg-white/30 transition-all z-20"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Progress Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {hiringSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHiringSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentHiringSlide 
                    ? 'w-12 h-4 bg-red-600 shadow-lg' 
                    : 'w-4 h-4 bg-white/50 hover:bg-white/80'
                }`}
              ></button>
            ))}
          </div>

          {/* Pulse Animation Border Effect */}
          <div className="absolute inset-0 border-4 border-red-600 rounded-3xl opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></div>
        </div>

        {/* Company Profile Section - Below Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Contact Person */}
          <div className="bg-white rounded-xl p-5 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mb-4 shadow-md">
              <User className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm text-gray-500 mb-2">Contact Person</p>
            <p className="font-bold text-gray-900 text-lg">Mr. Sekar</p>
          </div>

          {/* Phone Number */}
          <div className="bg-white rounded-xl p-5 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mb-4 shadow-md">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm text-gray-500 mb-2">Phone Number</p>
            <p className="font-bold text-gray-900 text-lg">+65 8728 6434</p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl p-5 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mb-4 shadow-md">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm text-gray-500 mb-2">Email Address</p>
            <p className="font-bold text-gray-900 text-lg break-all">sekar@goodluck.agency</p>
          </div>

          {/* Registration Details */}
          <div className="bg-white rounded-xl p-5 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mb-4 shadow-md">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            <p className="text-sm text-gray-500 mb-2">MOM Licence</p>
            <p className="font-bold text-gray-900 text-lg">06C3188</p>
            <p className="text-xs text-gray-500 mt-1">Reg: R1107951</p>
          </div>
        </div>

        {/* Mission, Vision, and Info Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Box */}
          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg border border-red-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-base">
              To provide reliable and professional employment solutions that connect talented individuals with opportunities, 
              fostering growth and success for both employers and employees across Singapore.
            </p>
          </div>

          {/* Vision Box */}
          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg border border-red-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-base">
              To be Singapore's most trusted employment agency, recognized for our integrity, professional service, 
              and commitment to creating meaningful employment partnerships that drive economic growth.
            </p>
          </div>

          {/* Why Choose Us Box */}
          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg border border-red-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Why Choose Us</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">✓</span>
                <span>Licensed by Ministry of Manpower (MOM)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">✓</span>
                <span>Experienced team with industry expertise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">✓</span>
                <span>Personalized recruitment solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">✓</span>
                <span>Wide network across multiple industries</span>
              </li>
            </ul>
          </div>

          {/* Our Commitment Box */}
          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg border border-red-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Commitment</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-base">
              We are committed to ethical recruitment practices, ensuring fair treatment for all candidates and clients. 
              Our dedicated team works tirelessly to match the right talent with the right opportunities, creating lasting partnerships.
            </p>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-20 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Environment</h2>
            <p className="text-gray-600 text-lg">Building successful partnerships through professional service</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Photo 1 */}
            <div className="group cursor-pointer">
              <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1760009436767-d154e930e55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NzY2MTk0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Construction Workers"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-center font-semibold text-gray-900 text-lg mb-2">Construction Workers</p>
                  <p className="text-center text-sm text-gray-600 leading-relaxed">
                    Skilled labor for building and infrastructure projects, delivering quality workmanship.
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="group cursor-pointer">
              <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1706066012947-65a9dcc95285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YWZmJTIwaG91c2VrZWVwaW5nJTIwd29ya2VyfGVufDF8fHx8MTc2NzcwODQ5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Domestic & Hospitality Staff"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-center font-semibold text-gray-900 text-lg mb-2">Domestic & Hospitality Staff</p>
                  <p className="text-center text-sm text-gray-600 leading-relaxed">
                    Professional service staff for hotels and households, ensuring exceptional guest experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="group cursor-pointer">
              <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1758691737246-95bf8f09a997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3JrZXJzJTIwYnVzaW5lc3MlMjBwZW9wbGU8ZW58MXx8fHwxNjc3MDgzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Office & Administrative Staff"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-center font-semibold text-gray-900 text-lg mb-2">Office & Administrative Staff</p>
                  <p className="text-center text-sm text-gray-600 leading-relaxed">
                    Qualified professionals for corporate environments, managing operations efficiently.
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 4 */}
            <div className="group cursor-pointer">
              <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1690356107685-3725367f6f3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljaWFuJTIwd29ya2luZyUyMG1hY2hpbmVyeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njc3MDg4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Technicians & Skilled Workers"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-center font-semibold text-gray-900 text-lg mb-2">Technicians & Skilled Workers</p>
                  <p className="text-center text-sm text-gray-600 leading-relaxed">
                    Expert tradespeople for technical and specialized roles, bringing precision and expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <ContactForm />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}