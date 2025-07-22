import React from 'react';
import { Instagram, Mail, Smartphone, Shield, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3D3D3D] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#8A47EB] to-[#600FD4] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">Kitmate</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
              The best AI recipe app that turns pantry ingredients into personalized healthy recipes. Save money cooking at home with our smart meal planner.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#8A47EB] rounded-full flex items-center justify-center hover:bg-[#600FD4] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@kitmate.app" className="w-10 h-10 bg-[#8A47EB] rounded-full flex items-center justify-center hover:bg-[#600FD4] transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#8A47EB] rounded-full flex items-center justify-center hover:bg-[#600FD4] transition-colors">
                <Smartphone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">AI Recipe App Features</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-sm sm:text-base text-gray-300 hover:text-[#8A47EB] transition-colors">Smart Meal Planner</a></li>
              <li><a href="#how-it-works" className="text-sm sm:text-base text-gray-300 hover:text-[#8A47EB] transition-colors">Pantry Recipes</a></li>
              <li><a href="#early-access" className="text-sm sm:text-base text-gray-300 hover:text-[#8A47EB] transition-colors">Nutrition Tracking</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-300 hover:text-[#8A47EB] transition-colors">High-Protein Meal Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Cooking Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm sm:text-base text-gray-300 hover:text-[#8A47EB] transition-colors">Quick Dinner Ideas</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-300 hover:text-[#8A47EB] transition-colors">Healthy Student Meals</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-300 hover:text-[#8A47EB] transition-colors">Easy Recipes for Busy People</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-300 hover:text-[#8A47EB] transition-colors">Save Money Cooking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm sm:text-base text-gray-300 hover:text-[#8A47EB] transition-colors flex items-center space-x-2">
                <Shield size={16} />
                <span>Privacy Policy</span>
              </a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-300 hover:text-[#8A47EB] transition-colors flex items-center space-x-2">
                <FileText size={16} />
                <span>Terms of Service</span>
              </a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-300 hover:text-[#8A47EB] transition-colors">Cookie Policy</a></li>
              <li><a href="mailto:hello@kitmate.app" className="text-sm sm:text-base text-gray-300 hover:text-[#8A47EB] transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-300">
            © 2025 Kitmate - Best AI Recipe App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;