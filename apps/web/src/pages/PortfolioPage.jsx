
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioCard from '@/components/PortfolioCard';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, image: 'https://images.unsplash.com/photo-1584313477598-941daf08d31d', title: 'Luxury Hotel Collection', description: 'Premium embossed tissue boxes with gold foil accents for a 5-star hotel chain. Increased guest satisfaction scores by 15%.', category: 'Tissue Boxes', industry: 'Hospitality' },
    { id: 2, image: 'https://images.unsplash.com/photo-1670935725351-926264ca4d1c', title: 'Organic Skincare Line', description: 'Sustainable tissue box design using recycled materials for an organic skincare brand. Reduced carbon footprint by 30%.', category: 'Packaging', industry: 'Retail' },
    { id: 3, image: 'https://images.unsplash.com/photo-1693478921503-4291ea819baa', title: 'Corporate Branding Kit', description: 'Custom tissue boxes featuring company branding for office and reception areas. Delivered 10,000 units across 50 branches.', category: 'Printing', industry: 'Corporate' },
    { id: 4, image: 'https://images.unsplash.com/photo-1548745908-2315705892fb', title: 'Fine Dining Series', description: 'Elegant matte finish boxes for upscale dining establishments. Custom die-cut shapes to match restaurant aesthetics.', category: 'Tissue Boxes', industry: 'Food & Beverage' },
    { id: 5, image: 'https://images.unsplash.com/photo-1686633888256-4fbcb00f7d3f', title: 'Spa & Wellness Collection', description: 'Calming designs with soft colors for wellness centers and spas. Features moisture-resistant coating.', category: 'Graphic Design', industry: 'Wellness' },
    { id: 6, image: 'https://images.unsplash.com/photo-1672796026880-edc609812fd7', title: 'Boutique Fashion Boxes', description: 'Vibrant, eye-catching tissue boxes for fashion boutiques. High-gloss UV coating for premium feel.', category: 'Packaging', industry: 'Fashion' },
    { id: 7, image: 'https://images.unsplash.com/photo-1624698971296-b8b01fd1aab9', title: 'Tech Startup Swag', description: 'Minimalist geometric designs for a tech company onboarding kit. Spot UV printing on matte black board.', category: 'Graphic Design', industry: 'Technology' },
    { id: 8, image: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a', title: 'Airline First Class', description: 'Compact, luxury tissue packs for first-class cabins. Custom sizing to fit specific compartments.', category: 'Tissue Boxes', industry: 'Travel' },
    { id: 9, image: 'https://images.unsplash.com/photo-1625820104062-387167dd655b', title: 'Medical Clinic Supply', description: 'Clean, clinical designs with antibacterial coating for healthcare facilities. Bulk order of 50,000 units.', category: 'Printing', industry: 'Healthcare' },
    { id: 10, image: 'https://images.unsplash.com/photo-1567570670593-6596d461ad38', title: 'Coffee Shop Series', description: 'Rustic kraft paper designs with single-color soy ink printing. 100% biodegradable.', category: 'Packaging', industry: 'Food & Beverage' },
    { id: 11, image: 'https://images.unsplash.com/photo-1610021684546-0df49fdd1621', title: 'Real Estate Welcome Kit', description: 'Premium house-shaped tissue boxes for new homeowners. Includes silver foil stamping.', category: 'Tissue Boxes', industry: 'Real Estate' },
    { id: 12, image: 'https://images.unsplash.com/photo-1591098551421-864da732e63a', title: 'Automotive Showroom', description: 'Sleek, metallic-finish boxes for luxury car dealerships. Custom color matching to car paint codes.', category: 'Printing', industry: 'Automotive' },
    { id: 13, image: 'https://images.unsplash.com/photo-1560775250-9c8a0e9afd38', title: 'Cosmetics Launch', description: 'Vibrant gradient designs for a summer makeup line launch. Soft-touch lamination.', category: 'Graphic Design', industry: 'Beauty' },
    { id: 14, image: 'https://images.unsplash.com/photo-1607825878130-914be8978e27', title: 'Event Goodie Bags', description: 'Custom printed boxes for a major industry conference. Fast 5-day turnaround for 5,000 units.', category: 'Packaging', industry: 'Events' },
    { id: 15, image: 'https://images.unsplash.com/photo-1584313477598-941daf08d31d', title: 'Educational Institute', description: 'Fun, colorful designs for elementary school classrooms. Durable, kid-friendly materials.', category: 'Tissue Boxes', industry: 'Education' }
  ];

  const categories = ['All', 'Tissue Boxes', 'Printing', 'Packaging', 'Graphic Design'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <>
      <Helmet>
        <title>Portfolio - Vibrant Packaging Designs | Zain Packages</title>
        <meta name="description" content="Explore our extensive portfolio of custom tissue box designs, offset printing, and packaging solutions across various industries." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                  Our <span className="text-gradient-purple">Portfolio</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
                  Discover our latest vibrant custom tissue box designs and packaging solutions across various industries.
                </p>
              </motion.div>

              {/* Category Filters */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-3 mb-16"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                      filter === cat 
                        ? 'bg-[#1F2937] text-white shadow-lg scale-105' 
                        : 'bg-muted text-muted-foreground hover:bg-gray-200 hover:text-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>

              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setSelectedProject(project)}
                    >
                      <PortfolioCard 
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        category={project.industry}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mt-24 bg-gradient-to-r from-[#0D9488]/10 via-[#7C3AED]/10 to-[#FF6B35]/10 p-12 rounded-3xl border border-white/20"
              >
                <h2 className="text-3xl font-bold mb-4">Ready to create your custom packaging?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's collaborate to design packaging that perfectly represents your brand's unique identity.
                </p>
                <a href="/contact">
                  <button className="bg-gradient-teal-purple text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-vibrant-purple transition-all duration-300 hover:scale-105">
                    Start Your Project
                  </button>
                </a>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
              
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative w-full max-w-4xl bg-card rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative h-64 sm:h-80 w-full">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold mb-3">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">{selectedProject.title}</h2>
                  </div>
                </div>

                <div className="p-6 sm:p-8 overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-2">Project Overview</h3>
                        <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">The Challenge</h3>
                        <p className="text-muted-foreground leading-relaxed">The client needed a premium packaging solution that reflected their brand's high-end positioning while maintaining durability and cost-effectiveness at scale.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Our Solution</h3>
                        <p className="text-muted-foreground leading-relaxed">We utilized our premium offset printing capabilities combined with custom die-cutting and special finishes to create a standout product that exceeded expectations.</p>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 rounded-2xl p-6 h-fit border border-border">
                      <h3 className="font-bold text-lg mb-4 border-b border-border pb-2">Project Details</h3>
                      <ul className="space-y-4 text-sm">
                        <li>
                          <span className="block text-muted-foreground mb-1">Industry</span>
                          <span className="font-semibold">{selectedProject.industry}</span>
                        </li>
                        <li>
                          <span className="block text-muted-foreground mb-1">Service Type</span>
                          <span className="font-semibold">{selectedProject.category}</span>
                        </li>
                        <li>
                          <span className="block text-muted-foreground mb-1">Timeline</span>
                          <span className="font-semibold">14 Days</span>
                        </li>
                      </ul>
                      <a href="/contact" className="mt-6 w-full flex items-center justify-center px-4 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors">
                        Start Similar Project <ArrowUpRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default PortfolioPage;
