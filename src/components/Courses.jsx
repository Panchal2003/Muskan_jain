import { useState } from 'react';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const a1Topics = [
    'French Alphabets',
    'Greetings',
    'Introduction',
    'Numbers (0–100)',
    'Nationalities',
    'Days & Months',
    'Colors & Clothes',
    'Fruits & Vegetables',
    'Family Members',
    'Jobs & Professions',
    'Weather & Seasons',
    'Date & Time',
    'Articles (Definite & Indefinite)',
    'Subject Pronouns',
    'Present Tense (Group 1,2,3)',
    'Negative Sentences',
    'Interrogative Sentences',
    'Prepositions',
    'Descriptive Adjectives',
    'Future Tense',
    'Role Play & Speaking',
  ];

  const a2Topics = [
    'Past Tense (Group 1,2,3)',
    'Imparfait',
    'Future Tense',
    'Imperative',
    'Gerondif',
    'COD & COI',
    'Comparatives & Superlatives',
    'Reflexive Verbs',
    'Relative Pronouns',
    'Numbers (100–1000)',
    'Adverbs',
    'Possessive Pronouns',
    'Email & Letter Writing',
    'Essay & Speaking',
  ];

  const courses = [
    {
      id: 'a1',
      level: 'A1',
      title: 'A1 French Course',
      subtitle: 'Beginner Level',
      description: 'Perfect for absolute beginners. Build a strong foundation in French with essential vocabulary, grammar, and speaking skills.',
      topics: a1Topics,
      duration: '2-3 Months',
      popular: false,
    },
    {
      id: 'a2',
      level: 'A2',
      title: 'A2 French Course',
      subtitle: 'Elementary Level',
      description: 'Take your French to the next level. Master intermediate grammar, expand your vocabulary, and improve your communication skills.',
      topics: a2Topics,
      duration: '3-4 Months',
      popular: true,
    },
  ];

  const openModal = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <section id="courses" className="py-16 sm:py-20 md:py-32 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
          Our <span className="text-gradient">Courses</span>
        </h2>
        <p className="section-subtitle text-base sm:text-lg">
          Comprehensive French language courses designed to take you from beginner to advanced level
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="glass-card p-6 sm:p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden"
              onClick={() => openModal(course)}
            >
              {course.popular && (
                <div className="absolute top-4 right-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}

              <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-navy">{course.level}</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-playfair font-bold text-white">{course.title}</h3>
                  <p className="text-gold text-sm sm:text-base">{course.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">{course.description}</p>

              <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-white/10">
                <div>
                  <span className="text-gray-400 text-xs sm:text-sm">Duration</span>
                  <div className="text-white font-semibold text-sm sm:text-base">{course.duration}</div>
                </div>
                <button className="btn-primary text-sm sm:text-base">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Course Features */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gold/10 rounded-full flex items-center justify-center">
              <span className="text-xl sm:text-2xl">👨‍🏫</span>
            </div>
            <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">One-to-One</h4>
            <p className="text-gray-400 text-xs sm:text-sm">Personalized attention</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gold/10 rounded-full flex items-center justify-center">
              <span className="text-xl sm:text-2xl">📱</span>
            </div>
            <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Online Classes</h4>
            <p className="text-gray-400 text-xs sm:text-sm">Learn from anywhere</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gold/10 rounded-full flex items-center justify-center">
              <span className="text-xl sm:text-2xl">📚</span>
            </div>
            <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Study Materials</h4>
            <p className="text-gray-400 text-xs sm:text-sm">Comprehensive resources</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gold/10 rounded-full flex items-center justify-center">
              <span className="text-xl sm:text-2xl">🎯</span>
            </div>
            <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Exam Prep</h4>
            <p className="text-gray-400 text-xs sm:text-sm">DELF/TEF/TCF ready</p>
          </div>
        </div>
      </div>

      {/* Course Modal */}
      {selectedCourse && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-navy-light rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-navy">{selectedCourse.level}</span>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-white">{selectedCourse.title}</h3>
                  <p className="text-gold text-base sm:text-lg">{selectedCourse.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">{selectedCourse.description}</p>

              {/* Topics */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-white font-semibold text-lg sm:text-xl mb-3 sm:mb-4">What You'll Learn:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {selectedCourse.topics.map((topic, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-gold">✓</span>
                      <span className="text-gray-300 text-sm sm:text-base">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Duration & CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-4 sm:pt-6 border-t border-white/10 gap-4">
                <div>
                  <span className="text-gray-400 text-xs sm:text-sm">Duration</span>
                  <div className="text-white font-semibold text-lg sm:text-xl">{selectedCourse.duration}</div>
                </div>
                <a href="#contact" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center" onClick={closeModal}>
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;
