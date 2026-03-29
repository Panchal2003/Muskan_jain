const Certificates = () => {
  const certificates = [
    {
      title: 'Certificate in French',
      icon: '📜',
      description: 'Foundation level certification demonstrating basic French language proficiency',
    },
    {
      title: 'Diploma in French',
      icon: '🎓',
      description: 'Intermediate level certification showing comprehensive French language skills',
    },
    {
      title: 'Advanced Diploma in French',
      icon: '🏆',
      description: 'Advanced level certification proving expert-level French language mastery',
    },
  ];

  return (
    <section id="certificates" className="py-16 sm:py-20 md:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
          My <span className="text-gradient">Certifications</span>
        </h2>
        <p className="section-subtitle text-base sm:text-lg">
          Recognized qualifications that demonstrate my expertise and commitment to French language education
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group glass-card p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20"
            >
              {/* Certificate Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl sm:text-4xl">{cert.icon}</span>
              </div>

              {/* Certificate Title */}
              <h3 className="text-lg sm:text-xl font-playfair font-bold text-white text-center mb-3">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-center text-xs sm:text-sm">
                {cert.description}
              </p>

              {/* Gold Badge */}
              <div className="mt-4 sm:mt-6 flex justify-center">
                <div className="flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-3 sm:px-4 py-1 sm:py-2">
                  <span className="text-gold">✓</span>
                  <span className="text-gold text-xs sm:text-sm font-semibold">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Element */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center space-x-3 sm:space-x-4 glass-card px-6 sm:px-8 py-3 sm:py-4 rounded-full">
            <span className="text-gold text-xl sm:text-2xl">🏅</span>
            <span className="text-white font-semibold text-sm sm:text-base">All certifications are officially recognized and verified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
