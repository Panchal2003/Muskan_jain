const StudentResults = () => {
  return (
    <section id="results" className="py-16 sm:py-20 md:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
          Student <span className="text-gradient">Achievements</span>
        </h2>
        <p className="section-subtitle text-base sm:text-lg">
          Real results from real students. See what our learners have achieved
        </p>

        {/* Featured Student */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Gold Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center shadow-lg shadow-gold/30">
                <span className="text-xl sm:text-2xl">🏆</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              {/* Student Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 relative">
                  <img 
                    src="/student.png" 
                    alt="Lakshay Chaudhary" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Student Info */}
              <div className="text-center md:text-left flex-grow">
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-white mb-2">
                  Lakshay Chaudhary
                </h3>
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                  <span className="text-gold text-3xl sm:text-4xl font-bold">80%</span>
                  <span className="text-gray-400 text-sm sm:text-base">in French</span>
                </div>
                <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
                  "Thanks to Muskan's personalized teaching approach, I was able to achieve an excellent score in my French examination. Her one-to-one sessions made all the difference!"
                </p>
                
                {/* Achievement Tags */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                  <span className="bg-gold/10 border border-gold/30 text-gold px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    🎯 Top Performer
                  </span>
                  <span className="bg-gold/10 border border-gold/30 text-gold px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    ⭐ Excellent Score
                  </span>
                  <span className="bg-gold/10 border border-gold/30 text-gold px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    🇫🇷 French Master
                  </span>
                </div>
              </div>
            </div>

            {/* Motivational Line */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-gradient">
                You will be the next! 🚀
              </p>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Join hundreds of successful students who transformed their French skills
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-card p-4 sm:p-6 rounded-2xl text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">100+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Students Taught</div>
          </div>
          <div className="glass-card p-4 sm:p-6 rounded-2xl text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">95%</div>
            <div className="text-gray-400 text-xs sm:text-sm">Pass Rate</div>
          </div>
          <div className="glass-card p-4 sm:p-6 rounded-2xl text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">4.9★</div>
            <div className="text-gray-400 text-xs sm:text-sm">Average Rating</div>
          </div>
          <div className="glass-card p-4 sm:p-6 rounded-2xl text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">3+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentResults;
