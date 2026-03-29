const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl">
              <div className="aspect-square bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/muskan.png" 
                  alt="Muskan Jain - French Language Teacher" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="section-title text-left">
              Meet Your <span className="text-gradient">French Mentor</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Muskan Jain is a professional French teacher with <span className="text-gold font-semibold">3+ years of experience</span> in teaching students from beginner to advanced level.
              </p>
              
              <p>
                She holds a <span className="text-gold font-semibold">Certificate, Diploma, and Advanced Diploma in French</span>, demonstrating her deep understanding of the language and commitment to excellence.
              </p>
              
              <p>
                Her teaching focuses on <span className="text-gold font-semibold">speaking confidence, grammar clarity, and real-life communication skills</span>. She provides one-to-one personalized sessions to ensure fast and effective learning.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl">
                <div className="text-gold text-2xl mb-2">🎯</div>
                <div className="text-white font-semibold">Personalized Learning</div>
                <div className="text-gray-400 text-sm">Tailored to your pace</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-gold text-2xl mb-2">💬</div>
                <div className="text-white font-semibold">Speaking Focus</div>
                <div className="text-gray-400 text-sm">Build real confidence</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-gold text-2xl mb-2">📚</div>
                <div className="text-white font-semibold">Grammar Mastery</div>
                <div className="text-gray-400 text-sm">Clear understanding</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-gold text-2xl mb-2">🏆</div>
                <div className="text-white font-semibold">Exam Preparation</div>
                <div className="text-gray-400 text-sm">DELF/TEF/TCF ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
