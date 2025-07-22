import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Busy Professional',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      text: 'This AI recipe app helped me save over $200/month on groceries! I love how it creates healthy recipes with ingredients I already have at home.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'College Student',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      text: 'Perfect for quick dinner ideas! As a busy student, this smart meal planner gives me healthy student meals that fit my tight budget and schedule.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Working Mom & Fitness Enthusiast',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      text: 'The AI understands my family\'s allergies and creates high-protein meal plans perfectly. This cooking assistant app makes healthy eating so much easier!',
      rating: 5
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F3F5F7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#600FD4] mb-6">
            Save Money Cooking At Home – Real User Stories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#3D3D3D] max-w-3xl mx-auto">
            Join thousands of users who are saving money, eating healthier, and reducing food waste with our <strong>AI recipe app</strong>.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F2F2F2] rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative"
            >
              <Quote className="absolute top-6 right-6 text-[#8A47EB] opacity-20 group-hover:opacity-40 transition-opacity" size={32} />
              
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-semibold text-[#600FD4] text-base sm:text-lg">{testimonial.name}</h4>
                  <p className="text-[#3D3D3D] text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-[#3D3D3D] leading-relaxed text-sm sm:text-base md:text-lg italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;