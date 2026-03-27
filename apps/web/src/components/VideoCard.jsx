
import React from 'react';
import { Play, Clock } from 'lucide-react';

const VideoCard = ({ thumbnail, title, description, category, onPlay }) => {
  return (
    <div 
      className="group relative rounded-none overflow-hidden cursor-pointer bg-card border border-border/50 shadow-lg hover:shadow-luxury transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
      onClick={onPlay}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-accent/5">
            <Play className="w-12 h-12 text-primary/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-accent/40 group-hover:bg-accent/20 transition-colors duration-500 mix-blend-multiply" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-primary/90 transition-all duration-500 shadow-xl">
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </div>
        </div>

        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-xs font-medium text-primary border border-primary/30 uppercase tracking-wider">
              {category}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col bg-white">
        <h3 className="font-serif text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mt-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
