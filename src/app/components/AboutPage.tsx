import { User, Award, Target, Users } from 'lucide-react';
import ContactForm from './ContactForm';
import Footer from './Footer';

type PageType = 'home' | 'about' | 'services' | 'recruitment';

interface AboutPageProps {
  onNavigate?: (page: PageType) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-[#f5f3ed] py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <p className="text-red-600 font-semibold mb-2 text-sm tracking-wide uppercase">Learn About Us</p>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">About Good Luck</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Your trusted partner in recruitment and employment solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Director's Message */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold shadow-md text-xl">
                1
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Director's Message</h2>
            </div>
            
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Good Luck Employment Agency is a Singapore-based recruitment agency. We specialise in providing reliable work force for various sectors. As an agency holding long-lasting relationships. As a government-registered agency, we are committed to provide people with the right career can be significant for your company's success and long term well-being.
              </p>
              
              <p>
                Our goal is to continue to be the go-to agency for recruitment and placement matters, while upholding the values that we cherish most – good quality employment services to Singapore. We look forward to work with you and hope to be a reliable business partner in upcoming years.
              </p>

              <div className="pt-8 border-t border-gray-200 mt-8">
                <p className="text-xs text-gray-500 mb-4 italic">Yours faithfully,</p>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-md">
                    <User className="w-10 h-10 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-xl">Mr. Sekar</p>
                    <p className="text-sm text-red-600 font-semibold">Director</p>
                    <p className="text-xs text-gray-500 italic mt-1">(Good Luck Employment Agency)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Good Luck Employment Agency Pte Ltd</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-400">Page 01</p>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
              <div className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                Introduction
              </div>
            </div>
            
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Good Luck Employment Agency Pte Ltd - a trusted provider of recruitment and employment services in Singapore. At Good Luck Employment Agency, we understand that finding the right talent can be a challenging and time-consuming process for businesses.
              </p>
              
              <p>
                Whether you are a business owner in need of staffing solutions to help our clients meet their workforce needs. From permanent hires to temporary placements, our recruitment expertise allows us to connect employers with the right candidates.
              </p>

              <p>
                As Good Luck Employment Agency, we are committed to upholding the highest standards of integrity and professionalism in all our interactions with our clients and candidates. We strive to build long-term relationships with our clients, and we take pride in our record of successful application as a testament to our dedication to excellence in our field.
              </p>

              <p>
                Thank you for considering Good Luck Employment Agency Pte Ltd as your partner in recruitment and employment services. We look forward to the opportunity to work with you.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Good Luck Employment Agency Pte Ltd</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-400">Page 02</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-xl">
            <Award className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Excellence</h3>
            <p className="text-red-100">
              We maintain the highest standards in recruitment and service delivery
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-xl">
            <Target className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Integrity</h3>
            <p className="text-red-100">
              Building trust through transparent and honest business practices
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-xl">
            <Users className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Partnership</h3>
            <p className="text-red-100">
              Creating long-lasting relationships with clients and candidates
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white shadow-2xl mb-20">
          <h3 className="text-4xl font-bold mb-4">Ready to Find the Right Talent?</h3>
          <p className="mb-8 text-gray-300 text-lg">
            Let us help you build your team with qualified professionals
          </p>
          <button 
            onClick={() => onNavigate?.('services')}
            className="inline-block px-10 py-4 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl hover:shadow-xl transition-all font-semibold text-lg cursor-pointer"
          >
            Explore Our Services
          </button>
        </div>

        {/* Contact Form */}
        <ContactForm />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}