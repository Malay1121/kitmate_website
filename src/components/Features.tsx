import React from 'react';
import { Leaf, Settings, Bot, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Smart Pantry Management',
      description: 'Easily manage your pantry by typing, speaking, or scanning grocery bills. Our AI cooking assistant automatically updates ingredients as you cook, helping you save money cooking at home.'
    },
    {
      icon: Settings,
      title: 'Personalized Meal Plans For Every Diet',
      description: 'Get high-protein meal planner suggestions, low-carb recipes, and personalized nutrition recipes based on your diet, allergies, schedule, and available ingredients.'
    },
    {
      icon: Bot,
      title: 'AI-Powered Recipe Generation',
      description: 'Get personalized, step-by-step healthy recipes you can make right now using only ingredients you have. Perfect for quick dinner ideas and easy student meals.'
    },
    {
      icon: BarChart3,
      title: 'Nutrition Tracking Made Easy',
      description: 'Every recipe includes detailed nutrition information — calories, protein, carbs, and fat per serving. Ideal for weight loss, muscle building, and healthy eating goals.'
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-[#F3F5F7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#600FD4] mb-6">
            Recipes With Ingredients You Already Have
          </h2>
          <p className="text-lg sm:text-xl text-[#3D3D3D] max-w-3xl mx-auto">
            Our <strong>AI cooking assistant</strong> transforms pantry ingredients into personalized healthy recipes. Perfect for <strong>easy recipes for busy people</strong> and <strong>quick dinner ideas for students</strong>.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 bg-[#8A47EB]/10 rounded-2xl group-hover:bg-[#8A47EB]/20 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-[#8A47EB]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#600FD4] mb-4">
                {feature.title}
              </h3>
              
              <p className="text-sm sm:text-base text-[#3D3D3D] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;