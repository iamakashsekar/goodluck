import { Search, Users, FileCheck, UserPlus, Plane, RefreshCw, XCircle, Navigation as NavigationIcon, ArrowDown, Phone, Mail, MapPin, Clipboard, Shield, Home as HomeIcon, CheckCircle, ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';
import Footer from './Footer';

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-[#f5f3ed] py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Recruitment Process Title */}
        <div className="mb-16 text-center">
          <p className="text-red-600 font-semibold mb-2 text-sm tracking-wide uppercase">Our Process</p>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Recruitment Process</h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            A comprehensive, step-by-step approach to finding and placing the right talent for your organization
          </p>
        </div>

        {/* Flowchart Container */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-12 border border-gray-100">
          {/* START */}
          <div className="flex justify-center mb-8">
            <div className="px-8 py-3 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full font-bold text-lg shadow-lg">
              START
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <ArrowDown className="w-8 h-8 text-red-600 animate-bounce" />
          </div>

          {/* PHASE 1: PRE-RECRUITMENT */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl font-bold text-xl shadow-lg">
                <span className="w-8 h-8 bg-white text-red-600 rounded-full flex items-center justify-center text-lg">1</span>
                PRE-RECRUITMENT
              </div>
            </div>

            {/* Flow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Advertising */}
              <div className="relative">
                <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg transition-all h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-md">
                      <Search className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-center font-bold text-gray-900 mb-2">Advertising</div>
                  <div className="text-center text-sm text-gray-600">Marketing of the opportunity</div>
                </div>
                {/* Arrow Right - Hidden on mobile */}
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-red-600" />
                </div>
              </div>

              {/* Filtering */}
              <div className="relative">
                <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg transition-all h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-md">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-center font-bold text-gray-900 mb-2">Filtering</div>
                  <div className="text-center text-sm text-gray-600">Candidate screening</div>
                </div>
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-red-600" />
                </div>
              </div>

              {/* Shortlist */}
              <div className="relative">
                <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg transition-all h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-md">
                      <FileCheck className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-center font-bold text-gray-900 mb-2">Shortlist</div>
                  <div className="text-center text-sm text-gray-600">Top candidates</div>
                </div>
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-red-600" />
                </div>
              </div>

              {/* Approval */}
              <div>
                <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg transition-all h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-md">
                      <UserPlus className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-center font-bold text-gray-900 mb-2">Approval</div>
                  <div className="text-center text-sm text-gray-600">Client confirmation</div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {/* Online Interview */}
              <div className="relative">
                <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg transition-all h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-md">
                      <FileCheck className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-center font-bold text-gray-900 mb-2">Online Interview</div>
                  <div className="text-center text-sm text-gray-600">Virtual assessment</div>
                </div>
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-red-600" />
                </div>
              </div>

              {/* Authentication */}
              <div>
                <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg transition-all h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-md">
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-center font-bold text-gray-900 mb-2">Authentication</div>
                  <div className="text-center text-sm text-gray-600">Client verification</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center my-8">
            <ArrowDown className="w-8 h-8 text-red-600 animate-bounce" />
          </div>

          {/* PHASE 2: AFTER RECRUITMENT */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl font-bold text-xl shadow-lg">
                <span className="w-8 h-8 bg-white text-red-600 rounded-full flex items-center justify-center text-lg">2</span>
                AFTER RECRUITMENT
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Airport Pickup */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                      <Plane className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-center font-bold text-gray-900 mb-2">Airport Pickup</div>
                  <div className="text-center text-sm text-gray-600">Transportation arranged</div>
                </div>
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Medical Checkup */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                      <FileCheck className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-center font-bold text-gray-900 mb-2">Medical Checkup</div>
                  <div className="text-center text-sm text-gray-600">Health screening</div>
                </div>
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Insurance */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-center font-bold text-gray-900 mb-2">E Insurance</div>
                  <div className="text-center text-sm text-gray-600">Coverage setup</div>
                </div>
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Thumbprint */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-center font-bold text-gray-900 mb-2">Thumbprint</div>
                  <div className="text-center text-sm text-gray-600">Biometric registration</div>
                </div>
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Deploy to Company */}
              <div>
                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-center font-bold text-gray-900 mb-2">Deploy to Company</div>
                  <div className="text-center text-sm text-gray-600">Start work assignment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center my-8">
            <ArrowDown className="w-8 h-8 text-red-600 animate-bounce" />
          </div>

          {/* END */}
          <div className="flex justify-center">
            <div className="px-8 py-3 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full font-bold text-lg shadow-lg">
              END
            </div>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-12 border border-gray-100">
          {/* PHASE 3: POST RECRUITMENT */}
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl font-bold text-xl shadow-lg">
                <span className="w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center text-lg">+</span>
                ADDITIONAL SERVICES
              </div>
            </div>

            {/* Essential Services */}
            <div className="mb-8">
              <h3 className="text-center font-bold text-gray-900 mb-6 text-lg">Essential Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {/* Compensation */}
                <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-5 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-md">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-center text-sm font-bold text-gray-900">Compensation</div>
                </div>

                {/* Security Bond */}
                <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-5 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-md">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-center text-sm font-bold text-gray-900">Security Bond</div>
                </div>

                {/* Medical Insurance */}
                <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-5 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-md">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-center text-sm font-bold text-gray-900">Medical Insurance</div>
                </div>

                {/* Accommodation */}
                <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-5 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-md">
                      <HomeIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-center text-sm font-bold text-gray-900">Accommodation</div>
                </div>

                {/* Transportation */}
                <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-5 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-md">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-center text-sm font-bold text-gray-900">Transportation</div>
                </div>
              </div>
            </div>

            {/* Misc Services */}
            <div>
              <h3 className="text-center font-bold text-gray-900 mb-6 text-lg">Miscellaneous Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {/* Renewal */}
                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-2xl p-5 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center shadow-md">
                      <RefreshCw className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-center text-sm font-bold text-gray-900">Renewal</div>
                </div>

                {/* Cancellation */}
                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-2xl p-5 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center shadow-md">
                      <XCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-center text-sm font-bold text-gray-900">Cancellation</div>
                </div>

                {/* Deportation */}
                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-2xl p-5 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center shadow-md">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-center text-sm font-bold text-gray-900">Deportation</div>
                </div>

                {/* Transfer */}
                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-2xl p-5 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center shadow-md">
                      <NavigationIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-center text-sm font-bold text-gray-900">Transfer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}