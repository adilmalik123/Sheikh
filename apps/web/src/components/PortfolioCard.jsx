
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

const PortfolioCard = ({ image, title, description, category }) => {
  
  const getCategoryColor = (cat) => {
    const colors = {
      'Hospitality': 'bg-[#0D9488] text-white',
      'Retail': 'bg-[#FF6B35] text-white',
      'Corporate': 'bg-[#7C3AED] text-white',
      'Food & Beverage': 'bg-[#F59E0B] text-white',
      'Wellness': 'bg-[#059669] text-white',
      'Fashion': 'bg-[#DB2777] text-white'
    };
    return colors[cat] || 'bg-gray-800 text-white';
  };

  const getUnderlineColor = (cat) => {
    const colors = {
      'Hospitality': 'bg-[#0D9488]',
      'Retail': 'bg-[#FF6B35]',
      'Corporate': 'bg-[#7C3AED]',
      'Food & Beverage': 'bg-[#F59E0B]',
      'Wellness': 'bg-[#059669]',
      'Fashion': 'bg-[#DB2777]'
    };
    return colors[cat] || 'bg-gray-800';
  };

  return (
    <Card className="overflow-hidden group border-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer relative">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Vibrant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/90 via-[#1F2937]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        
        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4 z-20">
            <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md ${getCategoryColor(category)}`}>
              {category}
            </span>
          </div>
        )}

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-end">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold text-white mb-2 relative inline-block">
                {title}
                <span className={`absolute -bottom-1 left-0 w-0 h-1 rounded-full transition-all duration-500 group-hover:w-full ${getUnderlineColor(category)}`}></span>
              </h3>
              <p className="text-sm text-gray-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {description}
              </p>
            </div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ${getCategoryColor(category)}`}>
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PortfolioCard;
