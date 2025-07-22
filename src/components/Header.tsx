import React, { useState } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';
import * as logoWithoutText from '../assets/logo_without_text.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E5EA] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src={logoWithoutText.default} alt="Kitmate Logo" className="w-8 h-8 rounded-lg" />
              
            </div>
            <span className="text-xl font-bold text-[#600FD4]">Kitmate</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[#3D3D3D] hover:text-[#8A47EB] transition-colors">Features</a>
            <a href="#how-it-works" className="text-[#3D3D3D] hover:text-[#8A47EB] transition-colors">How It Works</a>
            <a href="#early-access" className="text-[#3D3D3D] hover:text-[#8A47EB] transition-colors">Early Access</a>
            <button className="bg-[#8A47EB] text-white px-6 py-2 rounded-full font-medium hover:bg-[#600FD4] hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <Smartphone size={16} />
              <span>Get Early Access</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#F3F5F7] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-[#E5E5EA] pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-[#3D3D3D] hover:text-[#8A47EB] transition-colors">Features</a>
              <a href="#how-it-works" className="text-[#3D3D3D] hover:text-[#8A47EB] transition-colors">How It Works</a>
              <a href="#early-access" className="text-[#3D3D3D] hover:text-[#8A47EB] transition-colors">Early Access</a>
              <button className="bg-[#8A47EB] text-white px-6 py-3 rounded-full font-medium hover:bg-[#600FD4] transition-all duration-200 flex items-center justify-center space-x-2">
                <Smartphone size={16} />
                <span>Get Early Access</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;