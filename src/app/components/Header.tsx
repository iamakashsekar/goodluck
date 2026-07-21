import { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import imgLogo from "figma:asset/0f776687004221f86bd0cfbe701a57121a9effc7.png";

type PageType = 'home' | 'about' | 'services' | 'recruitment';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9mZmljZSUyMHRlYW18ZW58MXx8fHwxNzY3NzA3NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Your Trusted Employment Partner',
      subtitle: 'Connecting Talent with Opportunity Since 2009'
    },
    {
      image: 'https://images.unsplash.com/photo-1759884247231-24a9d8f6d454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3JrcGxhY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc2NzcwNzU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Professional Recruitment Services',
      subtitle: 'MOM Licensed & Certified Employment Agency'
    },
    {
      image: 'https://images.unsplash.com/photo-1590650423710-ffa6e7f63440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzdWNjZXNzJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzY3NzA3NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Building Successful Teams',
      subtitle: 'Quality Manpower Solutions Across All Industries'
    },
    {
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3NTkzMjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Excellence in Employment',
      subtitle: 'Tailored Solutions for Your Business Needs'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="relative">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate('home')}>
              <img 
                src={imgLogo} 
                alt="Good Luck Employment Agency" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-tight">Good Luck</h1>
                <p className="text-xs text-red-600 font-semibold tracking-wide">EMPLOYMENT AGENCY</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => onNavigate('home')}
                className={`text-gray-700 hover:text-red-600 font-medium transition-colors ${
                  currentPage === 'home' ? 'text-red-600' : ''
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className={`text-gray-700 hover:text-red-600 font-medium transition-colors ${
                  currentPage === 'about' ? 'text-red-600' : ''
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => onNavigate('services')}
                className={`text-gray-700 hover:text-red-600 font-medium transition-colors ${
                  currentPage === 'services' ? 'text-red-600' : ''
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => onNavigate('recruitment')}
                className={`text-gray-700 hover:text-red-600 font-medium transition-colors ${
                  currentPage === 'recruitment' ? 'text-red-600' : ''
                }`}
              >
                Recruitment Process
              </button>
              <a 
                href="tel:+6587286434"
                className="px-6 py-2.5 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-8 py-4 space-y-4">
              <button 
                onClick={() => onNavigate('home')}
                className="block w-full text-left text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="block w-full text-left text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
              >
                About Us
              </button>
              <button 
                onClick={() => onNavigate('services')}
                className="block w-full text-left text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
              >
                Services
              </button>
              <button 
                onClick={() => onNavigate('recruitment')}
                className="block w-full text-left text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
              >
                Recruitment Process
              </button>
              <a 
                href="tel:+6587286434"
                className="block w-full text-center px-6 py-2.5 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Slider */}
      <div className="pt-20" id="home">
        <div className="relative">
          <div className="relative h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-16 md:px-20 w-full">
                <div className="max-w-xl">
                  <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-2 leading-tight animate-fade-in">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-sm md:text-base text-white/90">
                    {slides[currentSlide].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/50 text-white rounded-full p-1.5 md:p-2 hover:bg-white/30 transition-all z-10"
            onClick={prevSlide}
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/50 text-white rounded-full p-1.5 md:p-2 hover:bg-white/30 transition-all z-10"
            onClick={nextSlide}
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-red-600' : 'bg-white/50'
                }`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* Latest Hiring Ticker - Fixed at bottom */}
        <div className="fixed bottom-0 left-0 right-0 bg-red-600 shadow-lg overflow-hidden z-40">
          <div className="flex items-center">
            <div className="flex-shrink-0 px-6 py-3 font-bold text-sm md:text-base text-white">
              🔥 LATEST HIRING:
            </div>
            <div className="flex-1 overflow-hidden py-3">
              <div className="flex animate-scroll whitespace-nowrap">
                <div className="flex items-center space-x-12 px-6">
                  <span className="text-sm md:text-base text-white">Administrative Officer - Central Area</span>
                  <span className="text-white/50">•</span>
                  <span className="text-sm md:text-base text-white">Senior Accountant - CBD</span>
                  <span className="text-white/50">•</span>
                  <span className="text-sm md:text-base text-white">Civil Engineer - Construction Projects</span>
                  <span className="text-white/50">•</span>
                  <span className="text-sm md:text-base text-white">Heavy Equipment Operator - West Region</span>
                  <span className="text-white/50">•</span>
                  <span className="text-sm md:text-base text-white">Office Coordinator - Jurong</span>
                  <span className="text-white/50">•</span>
                  <span className="text-sm md:text-base text-white">Nursing Staff - Healthcare Facilities</span>
                  <span className="text-white/50">•</span>
                  <span className="text-sm md:text-base text-white">Maintenance Technician - Multiple Locations</span>
                  <span className="text-white/50">•</span>
                </div>
                <div className="flex items-center space-x-12 px-6">
                  <span className="text-sm md:text-base text-white">Administrative Officer - Central Area</span>
                  <span className="text-white/50">•</span>
                  <span className="text-sm md:text-base text-white">Senior Accountant - CBD</span>
                  <span className="text-white/50">•</span>
                  <span className="text-sm md:text-base text-white">Civil Engineer - Construction Projects</span>
                  <span className="text-white/50">•</span>
                  <span className="text-sm md:text-base text-white">Heavy Equipment Operator - West Region</span>
                  <span className="text-white/50">•</span>
                  <span className="text-sm md:text-base text-white">Office Coordinator - Jurong</span>
                  <span className="text-white/50">•</span>
                  <span className="text-sm md:text-base text-white">Nursing Staff - Healthcare Facilities</span>
                  <span className="text-white/50">•</span>
                  <span className="text-sm md:text-base text-white">Maintenance Technician - Multiple Locations</span>
                  <span className="text-white/50">•</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        @media (max-width: 768px) {
          .header-slider .slick-prev {
            left: 15px;
          }
          
          .header-slider .slick-next {
            right: 15px;
          }

          .header-slider .slick-prev,
          .header-slider .slick-next {
            width: 40px;
            height: 40px;
          }

          .header-slider .slick-prev:before,
          .header-slider .slick-next:before {
            font-size: 40px;
          }
        }
      `}</style>
    </header>
  );
}