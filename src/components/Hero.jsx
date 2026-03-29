const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center navy-gradient eiffel-bg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-32">
        <div className="text-center">
          {/* French Flag Accent */}
          <div className="flex justify-center mb-6">
            <div className="flex space-x-1">
              <div className="w-2 h-6 sm:w-3 sm:h-8 bg-blue-600 rounded-l"></div>
              <div className="w-2 h-6 sm:w-3 sm:h-8 bg-white"></div>
              <div className="w-2 h-6 sm:w-3 sm:h-8 bg-red-600 rounded-r"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-white mb-4 sm:mb-6 animate-fade-in">
            Master French with{' '}
            <span className="text-gradient">Confidence</span>{' '}
            🇫🇷
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up px-4">
            Learn French from Beginner to Advanced with Personal One-to-One Guidance
          </p>

          {/* Highlight Line */}
          <div className="inline-flex items-center space-x-2 bg-gold/20 border border-gold/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-10 animate-slide-up">
            <span className="text-gold font-semibold text-sm sm:text-base">3+ Years Experience</span>
            <span className="text-gray-400">|</span>
            <span className="text-gold font-semibold text-sm sm:text-base">Certified French Teacher</span>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 animate-slide-up px-4">
            <div className="flex items-center space-x-2 glass-card px-3 sm:px-4 py-2">
              <span className="text-gold">✔</span>
              <span className="text-white text-xs sm:text-sm md:text-base">One-to-One Sessions</span>
            </div>
            <div className="flex items-center space-x-2 glass-card px-3 sm:px-4 py-2">
              <span className="text-gold">✔</span>
              <span className="text-white text-xs sm:text-sm md:text-base">Online & Offline Classes</span>
            </div>
            <div className="flex items-center space-x-2 glass-card px-3 sm:px-4 py-2">
              <span className="text-gold">✔</span>
              <span className="text-white text-xs sm:text-sm md:text-base">DELF / TEF / TCF Preparation</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-slide-up px-4">
            <a href="#contact" className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 animate-pulse-gold w-full sm:w-auto">
              Book Free Demo
            </a>
            <a href="#courses" className="btn-secondary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 w-full sm:w-auto">
              Join Now
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto animate-fade-in px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">3+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">100+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">100%</div>
              <div className="text-gray-400 text-xs sm:text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gold">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
