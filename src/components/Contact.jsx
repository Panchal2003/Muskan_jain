import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hello! I'm interested in French classes.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919971314085?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="section-subtitle text-base sm:text-lg">
          Ready to start your French journey? Contact us today!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-playfair font-bold text-white mb-4 sm:mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell us about your French learning goals..."
                />
              </div>
              <button type="submit" className="w-full btn-primary py-3 sm:py-4 text-sm sm:text-base">
                Send Message via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            {/* Phone */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">📞</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Phone</h4>
                  <a href="tel:+919971314085" className="text-gold hover:text-gold-light transition-colors text-sm sm:text-base">
                    +91 99713 14085
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">📸</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Instagram</h4>
                  <a
                    href="https://www.instagram.com/bulbul12.05?igsh=MWR3MWx1eHh4djl4MQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light transition-colors text-sm sm:text-base"
                  >
                    Muskan Jain
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">💬</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">WhatsApp</h4>
                  <a
                    href="https://wa.me/919971314085"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light transition-colors text-sm sm:text-base"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Location</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Online & Offline Classes Available</p>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gold/10 border border-gold/30 rounded-2xl p-4 sm:p-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                <span className="text-gold text-lg sm:text-xl">⚡</span>
                <h4 className="text-white font-semibold text-sm sm:text-base">Quick Response</h4>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm">
                We typically respond within 1 hour during business hours. For immediate assistance, call us directly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
