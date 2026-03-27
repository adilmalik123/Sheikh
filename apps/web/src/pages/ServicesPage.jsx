
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Package, Palette, Printer, CheckCircle2, ArrowRight, Check, Minus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingTier from '@/components/PricingTier';

const ServicesPage = () => {
  const tissueBoxPricing = [
    {
      name: 'Basic',
      price: '$2.50',
      description: 'Perfect for small businesses starting out. Get professional quality without breaking the bank.',
      features: [
        'Single color printing',
        'Standard sizes only',
        'Minimum order: 500 units',
        '14-day delivery',
        'Basic design support',
        'Standard SBS board'
      ],
      recommended: false,
      theme: 'teal'
    },
    {
      name: 'Standard',
      price: '$3.75',
      description: 'Most popular choice for growing brands. Full color and custom sizing to stand out.',
      features: [
        'Full-color CMYK printing',
        'Custom sizes available',
        'Minimum order: 1000 units',
        '10-day delivery',
        'Professional design service',
        'Free 3D digital mockups',
        'Premium matte/gloss finish'
      ],
      recommended: true,
      theme: 'orange'
    },
    {
      name: 'Premium',
      price: '$5.20',
      description: 'For premium brands requiring luxury. Special finishes and dedicated support.',
      features: [
        'Full-color + special finishes',
        'Any custom size & shape',
        'Minimum order: 2000 units',
        '7-day priority delivery',
        'Dedicated designer',
        'Unlimited revisions',
        'Foil stamping & embossing'
      ],
      recommended: false,
      theme: 'purple'
    }
  ];

  const designServices = [
    {
      title: 'Logo Design',
      deliverables: ['3 initial concepts', 'Unlimited revisions', 'Vector files', 'Brand guidelines'],
      turnaround: '5-7 business days',
      color: 'text-[#7C3AED]',
      bg: 'bg-[#7C3AED]/10'
    },
    {
      title: 'Packaging Design',
      deliverables: ['Custom artwork', 'Print-ready files', '3D mockups', 'Die-cut templates'],
      turnaround: '7-10 business days',
      color: 'text-[#F59E0B]',
      bg: 'bg-[#F59E0B]/10'
    },
    {
      title: 'Brand Identity',
      deliverables: ['Logo suite', 'Color palette', 'Typography guide', 'Brand assets'],
      turnaround: '10-14 business days',
      color: 'text-[#DB2777]',
      bg: 'bg-[#DB2777]/10'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Vibrant Packaging Solutions | Zain Packages</title>
        <meta name="description" content="Explore our comprehensive packaging services including custom tissue box design, graphic design, and offset printing with competitive pricing." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Header Section */}
          <section className="py-20 bg-gradient-to-b from-[#0D9488]/10 via-background to-background relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#0D9488]/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-4xl mx-auto"
              >
                <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                  Our <span className="text-gradient-teal">Services</span>
                </h1>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                  Professional, vibrant packaging solutions tailored to elevate your brand and captivate your audience.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Featured Image Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[21/9] max-h-[500px]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1633927275459-05077d1028dd" 
                  alt="Professional Design Workspace" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1F2937]/90 to-transparent flex items-center">
                  <div className="p-8 md:p-16 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Crafting Excellence</h2>
                    <p className="text-lg text-gray-200">Where creativity meets precision printing to deliver packaging that speaks volumes.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
              
              {/* Service 1: Tissue Boxes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#059669] flex items-center justify-center mr-6 shadow-lg transform -rotate-3">
                      <Package className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Custom Tissue Boxes</h2>
                      <p className="text-lg text-[#0D9488] font-medium mt-1">Design & Printing</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                  {tissueBoxPricing.map((tier, index) => (
                    <PricingTier
                      key={index}
                      {...tier}
                      onSelect={() => window.location.href = '/order'}
                    />
                  ))}
                </div>

                {/* Comparison Table */}
                <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg">
                  <div className="p-8 bg-muted/50 border-b border-border">
                    <h3 className="text-2xl font-bold">Compare Tiers</h3>
                    <p className="text-muted-foreground">Find the perfect fit for your packaging needs.</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-muted/30">
                          <th className="p-4 font-bold text-foreground border-b border-border">Feature</th>
                          <th className="p-4 font-bold text-[#0D9488] border-b border-border">Basic</th>
                          <th className="p-4 font-bold text-[#FF6B35] border-b border-border">Standard</th>
                          <th className="p-4 font-bold text-[#7C3AED] border-b border-border">Premium</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {[
                          { name: 'Printing Colors', b: 'Single Color', s: 'Full CMYK', p: 'CMYK + Spot Colors' },
                          { name: 'Custom Sizing', b: false, s: true, p: true },
                          { name: 'Design Revisions', b: '1 Round', s: '3 Rounds', p: 'Unlimited' },
                          { name: '3D Mockups', b: false, s: true, p: true },
                          { name: 'Foil Stamping', b: false, s: false, p: true },
                          { name: 'Turnaround Time', b: '14 Days', s: '10 Days', p: '7 Days (Priority)' },
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                            <td className="p-4 font-medium text-foreground">{row.name}</td>
                            <td className="p-4 text-muted-foreground">
                              {typeof row.b === 'boolean' ? (row.b ? <Check className="w-5 h-5 text-[#0D9488]" /> : <Minus className="w-5 h-5 text-muted-foreground/50" />) : row.b}
                            </td>
                            <td className="p-4 text-muted-foreground font-medium">
                              {typeof row.s === 'boolean' ? (row.s ? <Check className="w-5 h-5 text-[#FF6B35]" /> : <Minus className="w-5 h-5 text-muted-foreground/50" />) : row.s}
                            </td>
                            <td className="p-4 text-muted-foreground font-bold">
                              {typeof row.p === 'boolean' ? (row.p ? <Check className="w-5 h-5 text-[#7C3AED]" /> : <Minus className="w-5 h-5 text-muted-foreground/50" />) : row.p}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>

              {/* Service 2: Graphic Design */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#DB2777] flex items-center justify-center mr-6 shadow-lg transform rotate-3">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Graphic Design</h2>
                      <p className="text-lg text-[#7C3AED] font-medium mt-1">Creative Services</p>
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full px-8 h-12 font-bold shadow-vibrant-purple">
                      Request Design Quote
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {designServices.map((service, index) => (
                    <div key={index} className="bg-card border-2 border-border hover:border-[#7C3AED]/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl group">
                      <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-6`}>
                        <Palette className={`w-6 h-6 ${service.color}`} />
                      </div>
                      <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                      <div className="mb-8">
                        <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Deliverables</p>
                        <ul className="space-y-3">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${service.color}`} />
                              <span className="font-medium text-foreground/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-6 border-t border-border">
                        <p className="text-sm text-muted-foreground font-medium">
                          <span className="font-bold text-foreground">Turnaround:</span> {service.turnaround}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Service 3: Offset Printing */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#F59E0B] flex items-center justify-center mr-6 shadow-lg transform -rotate-3">
                      <Printer className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Offset Printing</h2>
                      <p className="text-lg text-[#FF6B35] font-medium mt-1">High-Volume Production</p>
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button className="bg-[#FF6B35] hover:bg-[#E85D2A] text-white rounded-full px-8 h-12 font-bold shadow-vibrant-orange">
                      Request Bulk Quote
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-card border-2 border-border rounded-3xl p-10">
                    <h3 className="text-2xl font-bold mb-8">Technical Specifications</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-[#FF6B35] mb-4 text-lg">Printing Capabilities</h4>
                        <ul className="space-y-3 font-medium text-foreground/80">
                          <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#FF6B35] mr-3"></span> Full-color CMYK</li>
                          <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#FF6B35] mr-3"></span> Spot color options</li>
                          <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#FF6B35] mr-3"></span> High-resolution output</li>
                          <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#FF6B35] mr-3"></span> Color matching</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#FF6B35] mb-4 text-lg">Finishing Options</h4>
                        <ul className="space-y-3 font-medium text-foreground/80">
                          <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#FF6B35] mr-3"></span> Gloss/matte lamination</li>
                          <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#FF6B35] mr-3"></span> UV coating</li>
                          <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#FF6B35] mr-3"></span> Embossing/debossing</li>
                          <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#FF6B35] mr-3"></span> Die-cutting</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FF6B35] to-[#F43F5E] rounded-3xl p-10 text-white shadow-vibrant-orange">
                    <h3 className="text-2xl font-bold mb-8">Bulk Volume Discounts</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { qty: '500-999', discount: '5%' },
                        { qty: '1000-2499', discount: '12%' },
                        { qty: '2500-4999', discount: '18%' },
                        { qty: '5000+', discount: '25%' }
                      ].map((tier, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                          <p className="text-4xl font-black mb-1">{tier.discount}</p>
                          <p className="text-white/80 font-medium uppercase tracking-wider text-sm">Off {tier.qty} units</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
