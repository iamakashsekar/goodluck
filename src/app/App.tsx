import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import RecruitmentPage from './components/RecruitmentPage';
import Header from './components/Header';
import faviconImg from "figma:asset/0f776687004221f86bd0cfbe701a57121a9effc7.png";

type PageType = 'home' | 'about' | 'services' | 'recruitment';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Set favicon
  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = faviconImg;
    document.getElementsByTagName('head')[0].appendChild(link);
    
    // Set page title
    document.title = 'Good Luck Employment Agency | MOM Licensed Employment Services';
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f3ed]">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage onNavigate={setCurrentPage} />}
        {currentPage === 'services' && <ServicesPage onNavigate={setCurrentPage} />}
        {currentPage === 'recruitment' && <RecruitmentPage />}
      </main>
    </div>
  );
}