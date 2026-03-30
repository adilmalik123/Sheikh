import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import HomePage from '@/pages/HomePage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import BrandsPage from '@/pages/BrandsPage.jsx';
import BrandDetailPage from '@/pages/BrandDetailPage.jsx';
import ProductsPage from '@/pages/ProductsPage.jsx';
import ProductDetailPage from '@/pages/ProductDetailPage.jsx';
import DistributorsPage from '@/pages/DistributorsPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import VideosPage from '@/pages/VideosPage.jsx';
import PrivateLabelPage from '@/pages/PrivateLabelPage.jsx';
import { seoMeta } from '@/content/siteContent';
import { useLanguage } from '@/context/LanguageContext';

function App() {
  const { copy } = useLanguage();

  return (
    <Router>
      <ScrollToTop />
      <Helmet>
        <title>{copy.common.seoTitle}</title>
        <meta name="description" content={seoMeta.description} />
        <meta name="keywords" content={seoMeta.keywords} />
      </Helmet>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/brands/:slug" element={<BrandDetailPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/private-label" element={<PrivateLabelPage />} />
        <Route path="/distributors" element={<DistributorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
