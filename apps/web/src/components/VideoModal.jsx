
import React from 'react';
import { X, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoModal = ({ isOpen, onClose, video }) => {
  if (!isOpen || !video) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      >
        <div className="absolute inset-0 bg-accent/95 backdrop-blur-sm" onClick={onClose} />
        
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-5xl bg-white rounded-none overflow-hidden shadow-2xl border border-primary/30 z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/50 bg-card">
            <h3 className="text-foreground font-serif font-bold text-lg truncate pr-4">{video.title}</h3>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Placeholder (Simulated Embed) */}
          <div className="relative aspect-video bg-black w-full flex items-center justify-center group">
            {video.thumbnailUrl ? (
              <img src={video.thumbnailUrl} alt={video.title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
            ) : null}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-luxury">
                <PlayCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <div className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden mr-4">
                <div className="h-full w-1/3 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 overflow-y-auto bg-white">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-primary/20">
                {video.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">{video.title}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {video.description || "Experience the luxury and quality of Sheikh Cosmetics. Watch to learn more about our premium formulations and manufacturing excellence."}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
