
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';

const BrandCard = ({ brand }) => {
  const imageUrl = brand.image ? pb.files.getUrl(brand, brand.image) : 'https://images.unsplash.com/photo-1671789407812-d9c6edeb7bff';
  const logoUrl = brand.logo ? pb.files.getUrl(brand, brand.logo) : null;

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-soft-rose border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={brand.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {logoUrl && (
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full p-2 shadow-lg">
            <img src={logoUrl} alt={`${brand.name} logo`} className="w-full h-full object-contain" />
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">{brand.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">{brand.description}</p>
        {brand.benefits && (
          <div className="mb-6">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Key Benefits</p>
            <p className="text-sm text-foreground/80">{brand.benefits}</p>
          </div>
        )}
        <Link to={`/products?brand=${encodeURIComponent(brand.name)}`} className="mt-auto inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
          View Products <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;
