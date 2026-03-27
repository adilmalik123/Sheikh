
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Star } from 'lucide-react';

const PricingTier = ({ name, price, description, features, recommended, onSelect, theme = 'teal' }) => {
  
  const themeStyles = {
    teal: {
      border: 'border-[#0D9488]/20',
      bg: 'bg-white',
      title: 'text-[#0D9488]',
      price: 'text-foreground',
      check: 'text-[#0D9488]',
      button: 'bg-[#0D9488]/10 text-[#0D9488] hover:bg-[#0D9488] hover:text-white',
      shadow: 'hover:shadow-vibrant-teal'
    },
    orange: {
      border: 'border-[#FF6B35]',
      bg: 'bg-gradient-to-b from-[#FF6B35]/5 to-white',
      title: 'text-[#FF6B35]',
      price: 'text-[#FF6B35]',
      check: 'text-[#FF6B35]',
      button: 'bg-[#FF6B35] text-white hover:bg-[#E85D2A] shadow-vibrant-orange',
      shadow: 'shadow-vibrant-orange scale-105 z-10'
    },
    purple: {
      border: 'border-[#7C3AED]/20',
      bg: 'bg-white',
      title: 'text-[#7C3AED]',
      price: 'text-foreground',
      check: 'text-[#7C3AED]',
      button: 'bg-[#7C3AED]/10 text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white',
      shadow: 'hover:shadow-vibrant-purple'
    }
  };

  const currentTheme = themeStyles[theme];

  return (
    <Card className={`relative h-full flex flex-col transition-all duration-500 border-2 rounded-3xl ${currentTheme.border} ${currentTheme.bg} ${currentTheme.shadow}`}>
      {recommended && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
          <span className="bg-gradient-orange-coral text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center">
            <Star className="w-4 h-4 mr-1 fill-current" />
            Most Popular
          </span>
        </div>
      )}
      
      <CardHeader className="text-center pt-8 pb-6">
        <CardTitle className={`text-2xl font-extrabold mb-2 ${currentTheme.title}`}>{name}</CardTitle>
        <CardDescription className="text-base font-medium">{description}</CardDescription>
        <div className="mt-6 flex items-baseline justify-center">
          <span className={`text-5xl font-black tracking-tight ${currentTheme.price}`}>{price}</span>
          {price !== 'Custom' && <span className="text-muted-foreground ml-2 font-medium">/ unit</span>}
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 px-8">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${currentTheme.check}`} />
              <span className="text-foreground/80 font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="mt-auto p-8 pt-6">
        <Button 
          className={`w-full h-12 rounded-xl font-bold text-lg transition-all duration-300 ${currentTheme.button}`}
          onClick={onSelect}
        >
          Select Plan
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingTier;
