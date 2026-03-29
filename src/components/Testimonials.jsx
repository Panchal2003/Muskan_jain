import { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'A1 Student',
      image: '👩',
      rating: 5,
      text: "Best French teacher! I gained so much confidence in speaking. Muskan's teaching style is amazing and she makes learning fun!",
      highlight: "Confidence in speaking",
    },
    {
      name: 'Rahul Verma',
      role: 'A2 Student',
      image: '👨',
      rating: 5,
      text: "I was struggling with French grammar until I found Muskan. Her one-to-one sessions helped me understand complex concepts easily. Highly recommended!",
      highlight: "Grammar mastery",
    },
    {
      name: 'Ananya Singh',
      role: 'DELF Preparation',
      image: '👩‍🎓',
      rating: 5,
      text: "Thanks to Muskan, I cleared my DELF exam with flying colors! Her personalized approach and exam-focused preparation made all the difference.",
      highlight: "DELF success",
    },
    {
      name: 'Vikram Patel',
      role: 'Advanced Student',
      image: '👨‍💼',
      rating: 5,
      text: "The best investment I made in learning French. Muskan's patience and expertise helped me achieve fluency. Now I can confidently speak French!",
      highlight: "Achieved fluency",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-32 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
          What Our <span className="text-gradient">Students Say</span>
        </h2>
        <p className="section-subtitle text-base sm:text-lg">
          Real feedback from real students who transformed their French skills
        </p>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card p-4 sm:p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                index === activeIndex 
                  ? 'scale-105 border-gold/50 shadow-lg shadow-gold/20' 
                  : 'hover:scale-102 opacity-70 hover:opacity-100'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Quote Icon */}
              <div className="text-gold text-2xl sm:text-3xl mb-3 sm:mb-4">"</div>

              {/* Rating */}
              <div className="flex space-x-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-sm sm:text-base">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-4">
                {testimonial.text}
              </p>

              {/* Highlight Badge */}
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-2 sm:px-3 py-1 mb-3 sm:mb-4">
                <span className="text-gold text-xs font-semibold">{testimonial.highlight}</span>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-3 sm:pt-4 border-t border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">{testimonial.image}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-gold text-xs sm:text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-8 md:p-12 rounded-3xl relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Featured Content */}
            <div className="text-center px-4 sm:px-8">
              {/* Quote Icon */}
              <div className="text-gold text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">"</div>

              {/* Rating */}
              <div className="flex justify-center space-x-1 sm:space-x-2 mb-4 sm:mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <span key={i} className="text-gold text-xl sm:text-2xl">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                {testimonials[activeIndex].text}
              </p>

              {/* Author */}
              <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl">{testimonials[activeIndex].image}</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-base sm:text-lg">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-gold text-sm sm:text-base">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-gold scale-125' 
                      : 'bg-gold/30 hover:bg-gold/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6">
          <div className="glass-card px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center space-x-2">
            <span className="text-gold">⭐</span>
            <span className="text-white text-sm sm:text-base">4.9/5 Rating</span>
          </div>
          <div className="glass-card px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center space-x-2">
            <span className="text-gold">👥</span>
            <span className="text-white text-sm sm:text-base">100+ Students</span>
          </div>
          <div className="glass-card px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center space-x-2">
            <span className="text-gold">🏆</span>
            <span className="text-white text-sm sm:text-base">95% Success Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
