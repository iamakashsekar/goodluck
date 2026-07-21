import { Briefcase, Users, Wrench, HardHat, Heart, FileText, Calculator, UserCheck, Settings, Zap, Building2 } from 'lucide-react';
import ContactForm from './ContactForm';
import Footer from './Footer';

type PageType = 'home' | 'about' | 'services' | 'recruitment';

interface ServicesPageProps {
  onNavigate?: (page: PageType) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="min-h-screen bg-[#f5f3ed] py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Services Intro */}
        <div className="mb-16">
          <p className="text-red-600 font-semibold mb-2 text-sm tracking-wide uppercase">What We Offer</p>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            <span className="text-red-600">Services</span> we offer
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl">
            Good Luck Employment Agency PTE.LTD offers a fine range of professional recruiting work / manpower solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Accounts & Administrative Staff */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold shadow-md text-xl">
                1
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Accounts & Administrative Staff</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Calculator className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Secretaries</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <UserCheck className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Accounts Assistant</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <FileText className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Chartered Accountant</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Settings className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Computer Operator</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Briefcase className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Administrative Manager</span>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
              <div className="aspect-video bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1713947503588-8ff8196dc4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFjY291bnRhbnQlMjBvZmZpY2V8ZW58MXx8fHwxNzY3NjQ4NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Accounts & Administrative Staff Professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-400 uppercase tracking-wider">
              GOOD LUCK EMPLOYMENT AGENCY PTE LTD · 03
            </div>
          </div>

          {/* Office Staff */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold shadow-md text-xl">
                2
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Office Staff</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Users className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Receptionist</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Briefcase className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Office Admin</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <FileText className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Store Keeper</span>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
              <div className="aspect-video bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1762341119317-fb5417c18407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB3b3JrZXIlMjBjb21wdXRlcnxlbnwxfHx8fDE3Njc2OTE0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Office Staff Professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-400 uppercase tracking-wider">
              GOOD LUCK EMPLOYMENT AGENCY PTE LTD · 04
            </div>
          </div>

          {/* Technicians */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold shadow-md text-xl">
                3
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Technicians</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Zap className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Mechanical, Electrical & Electronics Technician</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Wrench className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Boiler & Pump Technician</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Settings className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Oil and Purifier Technician</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Wrench className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Plumbing Technician</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Settings className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">AC and Refrigerator Technician</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Zap className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Elevator Technician</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Wrench className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Decorator & Carpenter</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Settings className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Aluminum Doors & Windows Fitters</span>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
              <div className="aspect-video bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1636218685495-8f6545aadb71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHRlY2huaWNpYW4lMjB3b3JrfGVufDF8fHx8MTc2NzY3NDM1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Technician Professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-400 uppercase tracking-wider">
              GOOD LUCK EMPLOYMENT AGENCY PTE LTD · 05
            </div>
          </div>

          {/* Engineering Staff */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold shadow-md text-xl">
                4
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Engineering Staff</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Building2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Industrial & Production Engineer</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Settings className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Elevator Engineer</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Wrench className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Quality Control Engineer</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Zap className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">HVAC Engineer</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Settings className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Quality Surveyor</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Building2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Textile Mill</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Wrench className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Mechanical Engineer</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Settings className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">CNC Machinist</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Zap className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Electrical & Electronic Engineer</span>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
              <div className="aspect-video bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1694522362256-6c907336af43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjBoZWxtZXR8ZW58MXx8fHwxNzY3NzA5NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Engineering Staff Professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-400 uppercase tracking-wider">
              GOOD LUCK EMPLOYMENT AGENCY PTE LTD · 06
            </div>
          </div>

          {/* Heavy Equipment Operator */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold shadow-md text-xl">
                5
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Heavy Equipment Operator</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <HardHat className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Bulldozer & Trailer Lorry Drivers</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Settings className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Excavator Operator</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <HardHat className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Forklift Operator</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Wrench className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Class 3, Class 4 & Class 5 Drivers</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Settings className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Lorry Crane Operators</span>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
              <div className="aspect-video bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1576669801820-a9ab287ac2d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JrbGlmdCUyMGRyaXZlciUyMHdhcmVob3VzZXxlbnwxfHx8fDE3Njc3MDk0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Heavy Equipment Operator"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-400 uppercase tracking-wider">
              GOOD LUCK EMPLOYMENT AGENCY PTE LTD · 07
            </div>
          </div>

          {/* Hospital & Elderly Home */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold shadow-md text-xl">
                6
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Hospital & Elderly Home</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Heart className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Nurses</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Users className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">Laboratory Technicians</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <Heart className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">X-Ray Technicians</span>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
              <div className="aspect-video bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1762955913084-96ea3f986468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY2FyZWdpdmVyJTIwZWxkZXJseXxlbnwxfHx8fDE3Njc3MTE4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Young nurse helping elderly person"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-400 uppercase tracking-wider">
              GOOD LUCK EMPLOYMENT AGENCY PTE LTD · 08
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-16 text-center text-white shadow-2xl mb-20">
          <h3 className="text-4xl font-bold mb-4">Need Qualified Staff?</h3>
          <p className="mb-8 text-red-100 text-lg max-w-2xl mx-auto">
            Contact us today to discuss your recruitment needs and let us help you find the perfect candidates
          </p>
          <button 
            onClick={() => onNavigate?.('recruitment')}
            className="inline-block px-10 py-4 bg-white text-red-600 rounded-xl hover:shadow-xl transition-all font-semibold text-lg cursor-pointer"
          >
            View Recruitment Process
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