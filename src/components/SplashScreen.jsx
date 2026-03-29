import { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only show splash screen on mobile
    if (!isMobile) {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete, isMobile]);

  if (!isVisible || !isMobile) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a1628] navy-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center animate-fade-in">
        {/* French Flag with Border */}
        <div className="flex space-x-1 border-2 border-white/50 rounded-lg p-2 mb-6">
          <div className="w-4 h-12 sm:w-6 sm:h-16 bg-blue-600 rounded-l"></div>
          <div className="w-4 h-12 sm:w-6 sm:h-16 bg-white"></div>
          <div className="w-4 h-12 sm:w-6 sm:h-16 bg-red-600 rounded-r"></div>
        </div>

        {/* Brand Name */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-white mb-2 tracking-wider">
          wanderers of french
        </h1>

        {/* Tagline */}
        <p className="text-gray-400 text-sm sm:text-base mt-2">
          Master French with Confidence 🇫🇷
        </p>

        {/* Loading indicator */}
        <div className="mt-8 flex space-x-2">
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
