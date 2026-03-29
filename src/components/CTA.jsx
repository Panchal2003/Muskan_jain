const CTA = () => {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-navy-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* French Flag */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="flex space-x-1">
            <div className="w-2 h-6 sm:w-3 sm:h-8 bg-blue-600 rounded-l"></div>
            <div className="w-2 h-6 sm:w-3 sm:h-8 bg-white"></div>
            <div className="w-2 h-6 sm:w-3 sm:h-8 bg-red-600 rounded-r"></div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4 sm:mb-6">
          Start Your French Journey{' '}
          <span className="text-gradient">Today</span>{' '}
          🇫🇷
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Don't wait! Take the first step towards mastering French. Join our community of successful learners.
        </p>

        {/* Urgency Badge */}
        <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-10">
          <span className="text-red-400 animate-pulse">🔥</span>
          <span className="text-red-400 font-semibold text-sm sm:text-base">Limited Seats Available</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <a href="#contact" className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 animate-pulse-gold w-full sm:w-auto">
            Join Now
          </a>
          <a href="#contact" className="btn-secondary text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 w-full sm:w-auto">
            Contact Now
          </a>
        </div>

        {/* Trust Elements */}
        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-400 text-sm sm:text-base">
          <div className="flex items-center space-x-2">
            <span className="text-gold">✓</span>
            <span>Free Demo Class</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gold">✓</span>
            <span>No Hidden Fees</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gold">✓</span>
            <span>Flexible Schedule</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
