import React, { useState } from 'react';
import { ArrowRight, Mail, Instagram, Smartphone } from 'lucide-react';

const EarlyAccess = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="early-access" className="py-16 lg:py-24 bg-gradient-to-br from-[#8A47EB] to-[#600FD4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Download the Best AI Recipe App – Available Soon!
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join the waitlist for the most advanced <strong>smart meal planner</strong>. Get personalized healthy recipes, save money on groceries, and reduce food waste. Launching soon on Google Play Store!
          </p>

          <div className="max-w-md mx-auto mb-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-stretch">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email for early access"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full text-[#3D3D3D] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 text-base sm:text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#FF324B] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#e02940] hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Mail size={20} />
                <span>Join Waitlist</span>
              </button>
            </form>
            
            {isSubmitted && (
              <div className="mt-4 p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                <p className="text-white font-medium">✅ Success! You'll be first to access the best AI recipe app when it launches.</p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#8A47EB] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-200 flex items-center space-x-2 shadow-lg">
              <Smartphone size={20} />
              <span>Get Smart Meal Planner App</span>
            </button>
            
            <a 
              href="https://www.instagram.com/kitmate.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-[#8A47EB] transition-all duration-200 flex items-center space-x-2"
            >
              <Instagram size={20} />
              <span>Follow @kitmate.app</span>
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/80 text-sm">
              Join 15,000+ users waiting for the best cooking assistant app 🔥
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;