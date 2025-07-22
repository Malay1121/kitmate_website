import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-white via-[#F3F5F7] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#600FD4] mb-6 leading-tight break-words">
              AI Recipe & Meal Planning App<br />
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#3D3D3D] mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Turn ingredients you already have into <strong>personalized healthy recipes</strong>. Kitmate is the smart meal planner that saves money, reduces food waste, and creates <strong>quick dinner ideas for busy people</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#8A47EB] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-[#600FD4] hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg">
                <span>📲 Download the Best AI Recipe App</span>
                <ArrowRight size={20} />
              </button>
              
              <button className="border-2 border-[#8A47EB] text-[#8A47EB] px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-[#8A47EB] hover:text-white transition-all duration-200 flex items-center justify-center space-x-2">
                <Play size={20} />
                <span>See How Smart Meal Planning Works</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 flex justify-center">
              <div 
                className="w-80 h-[600px] bg-gradient-to-br from-[#8A47EB] to-[#600FD4] rounded-3xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300"
                role="presentation"
                aria-hidden="true"
              >
                <div className="bg-white w-full h-full rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-[#8A47EB] rounded-full"></div>
                      <span className="font-semibold text-[#600FD4]">Kitmate</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#E5E5EA] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#E5E5EA] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#8A47EB] rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-[#F3F5F7] rounded-xl p-4 mb-4">
                    <div className="font-semibold text-[#600FD4] mb-2">Today's Recipe</div>
                    <div className="text-sm text-[#3D3D3D] mb-3">Creamy Pasta with Tomatoes</div>
                    <div className="flex justify-between text-xs text-[#3D3D3D]">
                      <span>🕒 25 min</span>
                      <span>👥 2 servings</span>
                      <span>🔥 420 cal</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#8A47EB] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-sm text-[#3D3D3D]">Pasta - 200g</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#8A47EB] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-sm text-[#3D3D3D]">Tomatoes - 3 pieces</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#E5E5EA] rounded-full flex items-center justify-center">
                        <span className="text-[#3D3D3D] text-xs">?</span>
                      </div>
                      <span className="text-sm text-[#3D3D3D]">Cream - 100ml</span>
                    </div>
                  </div>
                  
                  <button className="bg-[#8A47EB] text-white py-3 rounded-xl font-medium hover:bg-[#600FD4] transition-colors text-center w-full">
                    Start Cooking
                  </button>
                </div>
              </div>
            </div>
            
            {/* Floating ingredients */}
            <div 
              className="absolute top-10 -left-10 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-2xl animate-bounce"
              role="presentation"
              aria-hidden="true"
            >
              🍅
            </div>
            <div 
              className="absolute bottom-20 -right-10 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-xl animate-pulse"
              role="presentation"
              aria-hidden="true"
            >
              🍝
            </div>
            <div 
              className="absolute top-32 right-10 w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-xl animate-bounce delay-300"
              role="presentation"
              aria-hidden="true"
            >
              🥚
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;