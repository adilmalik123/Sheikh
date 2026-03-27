
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features, ctaText, ctaLink, onCtaClick, theme = 'teal' }) => {
  
  const themeStyles = {
    teal: {
      wrapper: 'from-[#0D9488]/10 to-[#F43F5E]/5 border-[#0D9488]/20 hover:border-[#0D9488]/50 shadow-vibrant-teal',
      iconBg: 'bg-gradient-to-br from-[#0D9488] to-[#059669]',
      iconColor: 'text-white',
      title: 'text-gradient-teal',
      check: 'text-[#0D9488]',
      button: 'bg-[#0D9488] hover:bg-[#0F766E] text-white'
    },
    purple: {
      wrapper: 'from-[#7C3AED]/10 to-[#F59E0B]/5 border-[#7C3AED]/20 hover:border-[#7C3AED]/50 shadow-vibrant-purple',
      iconBg: 'bg-gradient-to-br from-[#7C3AED] to-[#DB2777]',
      iconColor: 'text-white',
      title: 'text-gradient-purple',
      check: 'text-[#7C3AED]',
      button: 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white'
    },
    orange: {
      wrapper: 'from-[#FF6B35]/10 to-[#0D9488]/5 border-[#FF6B35]/20 hover:border-[#FF6B35]/50 shadow-vibrant-orange',
      iconBg: 'bg-gradient-to-br from-[#FF6B35] to-[#F59E0B]',
      iconColor: 'text-white',
      title: 'text-gradient-orange',
      check: 'text-[#FF6B35]',
      button: 'bg-[#FF6B35] hover:bg-[#E85D2A] text-white'
    }
  };

  const currentTheme = themeStyles[theme] || themeStyles.teal;

  return (
    <Card className={`h-full flex flex-col transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${currentTheme.wrapper} backdrop-blur-sm border-2 overflow-hidden relative group`}>
      {/* Decorative background blob */}
      <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-20 blur-3xl transition-all duration-500 group-hover:scale-150 ${currentTheme.iconBg}`}></div>
      
      <CardHeader className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 ${currentTheme.iconBg}`}>
          <Icon className={`w-7 h-7 ${currentTheme.iconColor}`} />
        </div>
        <CardTitle className={`text-2xl font-bold text-balance mb-2 ${currentTheme.title}`}>{title}</CardTitle>
        <CardDescription className="text-base text-foreground/80 leading-relaxed font-medium">{description}</CardDescription>
      </CardHeader>
      
      {features && features.length > 0 && (
        <CardContent className="flex-1 relative z-10">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3 text-sm font-medium text-foreground/80">
                <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${currentTheme.check}`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
      
      <CardFooter className="mt-auto relative z-10 pt-6">
        <Button 
          className={`w-full group/btn rounded-xl h-12 font-bold shadow-md transition-all duration-300 hover:shadow-lg ${currentTheme.button}`} 
          onClick={onCtaClick}
          asChild={!!ctaLink}
        >
          {ctaLink ? (
            <a href={ctaLink}>
              {ctaText || 'Learn More'}
              <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </a>
          ) : (
            <>
              {ctaText || 'Learn More'}
              <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
