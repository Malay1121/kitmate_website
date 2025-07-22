import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Add Your Pantry Ingredients',
      description: 'Speak, type, or scan your grocery bill to add what you have at home.',
      emoji: '🛒',
      color: 'from-[#8A47EB] to-[#600FD4]'
    },
    {
      number: 2,
      title: 'Get AI-Powered Recipe Suggestions',
      description: 'Our smart meal planner suggests healthy recipes based on your diet preferences, allergies, and available ingredients.',
      emoji: '🤖',
      color: 'from-[#FF324B] to-[#8A47EB]'
    },
    {
      number: 3,
      title: 'Cook Smart & Track Nutrition',
      description: 'Follow easy step-by-step cooking guides with detailed nutrition info for every meal.',
      emoji: '🍳',
      color: 'from-[#1F73F1] to-[#8A47EB]'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#600FD4] mb-6">
            Quick & Easy Recipes For Busy Students & Professionals
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#3D3D3D] max-w-3xl mx-auto">
            Three simple steps to get <strong>personalized healthy recipes</strong> using ingredients you already have. Save money and reduce food waste with our smart meal planner.
          </p>
        </div>

        <div className="relative">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {step.emoji}
                  </div>
                  <div className="w-12 h-12 bg-white border-4 border-[#8A47EB] rounded-full flex items-center justify-center absolute -bottom-2 left-1/2 transform -translate-x-1/2 shadow-md">
                    <span className="text-[#8A47EB] font-bold text-lg">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#600FD4] mb-4">
                  {step.title}
                </h3>
                
                <p className="text-sm sm:text-base md:text-lg text-[#3D3D3D] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Connecting arrows for desktop */}
          <div className="hidden md:block absolute top-12 left-1/4 w-1/2 h-1 border-t-2 border-dashed border-[#8A47EB] opacity-30"></div>
          <div className="hidden md:block absolute top-12 left-1/4 w-1/4 h-1">
            <ArrowRight className="absolute right-0 top-0 transform -translate-y-1/2 text-[#8A47EB] opacity-50" size={20} />
          </div>
          <div className="hidden md:block absolute top-12 right-1/4 w-1/4 h-1">
            <ArrowRight className="absolute right-0 top-0 transform -translate-y-1/2 text-[#8A47EB] opacity-50" size={20} />
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-[#8A47EB] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#600FD4] hover:scale-105 transition-all duration-200 flex items-center mx-auto space-x-2 shadow-lg">
            <span>Try Kitmate – Smart Meal Planner For Free</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;