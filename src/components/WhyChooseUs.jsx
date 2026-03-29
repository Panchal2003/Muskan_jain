const WhyChooseUs = () => {
  const features = [
    {
      icon: '👨‍🏫',
      title: 'One-to-One Sessions',
      description: 'Personalized attention tailored to your learning pace and goals',
    },
    {
      icon: '🎯',
      title: 'Personal Attention',
      description: 'Every student matters. Get dedicated focus on your progress',
    },
    {
      icon: '⏰',
      title: 'Flexible Timings',
      description: 'Learn at your convenience with flexible scheduling options',
    },
    {
      icon: '🚀',
      title: 'Fast Results',
      description: 'See noticeable improvement in your French skills quickly',
    },
    {
      icon: '💬',
      title: 'Speaking + Grammar Focus',
      description: 'Balanced approach to build both confidence and accuracy',
    },
    {
      icon: '📱',
      title: 'Online & Offline',
      description: 'Choose between online or in-person classes based on your preference',
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
          Why Choose <span className="text-gradient">Us</span>
        </h2>
        <p className="section-subtitle text-base sm:text-lg">
          Discover what makes our French language teaching stand out from the rest
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10"
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl sm:text-3xl">{feature.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-playfair font-bold text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center space-x-3 sm:space-x-4 glass-card px-6 sm:px-8 py-3 sm:py-4 rounded-full">
            <span className="text-gold text-xl sm:text-2xl">✨</span>
            <span className="text-white font-semibold text-sm sm:text-base">Join 100+ satisfied students today!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
