import imgLogo from "figma:asset/0f776687004221f86bd0cfbe701a57121a9effc7.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'about' | 'services' | 'recruitment') => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate('home')}>
            <img 
              src={imgLogo} 
              alt="Good Luck Employment Agency" 
              className="h-14 w-14 object-contain"
            />
            <div>
              <div className="text-xl font-bold text-gray-900 leading-tight">Good Luck</div>
              <div className="text-xs text-red-600 font-semibold tracking-wide">EMPLOYMENT AGENCY</div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => onNavigate('home')}
              className={`px-6 py-2.5 rounded-lg transition-all font-medium ${
                currentPage === 'home' 
                  ? 'bg-red-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`px-6 py-2.5 rounded-lg transition-all font-medium ${
                currentPage === 'about' 
                  ? 'bg-red-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => onNavigate('services')}
              className={`px-6 py-2.5 rounded-lg transition-all font-medium ${
                currentPage === 'services' 
                  ? 'bg-red-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => onNavigate('recruitment')}
              className={`px-6 py-2.5 rounded-lg transition-all font-medium ${
                currentPage === 'recruitment' 
                  ? 'bg-red-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Recruitment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}