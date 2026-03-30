export const seoMeta = {
  title: 'Sheikh Cosmetics - Whitening Cream & Soap Manufacturers | Sheikh Brothers',
  description:
    'Sheikh Cosmetics (Sheikh Brothers) manufacture premium whitening creams, beauty soaps, serums, and skincare products across a portfolio of 100+ beauty brands and 500+ products. The website highlights selected lines including Husn-e-Turk, Beautyloop, Arman, Hijab, Taryak, Shaheen, Almas, and Libnani, alongside private label cosmetic manufacturing for global partners.',
  keywords:
    'whitening cream manufacturer, whitening soap manufacturer, cosmetics manufacturer, private label cosmetics, beauty cream brands, Sheikh Brothers cosmetics',
};

export const languages = [
  { code: 'en', label: 'EN', nativeLabel: 'English' },
  { code: 'ur', label: 'UR', nativeLabel: 'اردو' },
  { code: 'ar', label: 'AR', nativeLabel: 'العربية' },
  { code: 'fa', label: 'FA', nativeLabel: 'فارسی' },
];

const productCopy = {
  en: {
    creamName: 'Whitening Cream',
    soapName: 'Whitening Soap',
    creamDescription:
      'A luminous daily cream designed for glow, tone refinement, and a polished beauty finish.',
    soapDescription:
      'A brightening beauty soap that supports faster beauty results when paired with the cream.',
    creamBenefits: ['Radiance boost', 'Smooth finish', 'Luxury texture'],
    soapBenefits: ['Daily cleansing', 'Brighter look', 'Best with cream'],
  },
  ur: {
    creamName: 'وائٹننگ کریم',
    soapName: 'وائٹننگ صابن',
    creamDescription:
      'روزانہ استعمال کے لئے ایک خوبصورت کریم جو چمک، یکساں رنگت اور نرم لکژری فنش فراہم کرے۔',
    soapDescription:
      'ایک بیوٹی صابن جو کریم کے ساتھ استعمال کرنے پر خوبصورتی کے نتائج کو مزید تیز بناتا ہے۔',
    creamBenefits: ['چمکدار جلد', 'ہموار فنش', 'لکژری ٹیکسچر'],
    soapBenefits: ['روزانہ صفائی', 'نکھرا ہوا انداز', 'کریم کے ساتھ بہترین'],
  },
  ar: {
    creamName: 'كريم التفتيح',
    soapName: 'صابونة التفتيح',
    creamDescription:
      'كريم يومي فاخر يمنح البشرة إشراقة واضحة ومظهرا ناعما ومتوازنا.',
    soapDescription:
      'صابونة تجميلية تساعد على نتائج أسرع عند استخدامها مع الكريم.',
    creamBenefits: ['إشراقة فورية', 'ملمس ناعم', 'تركيبة فاخرة'],
    soapBenefits: ['تنظيف يومي', 'مظهر أكثر إشراقا', 'أفضل مع الكريم'],
  },
  fa: {
    creamName: 'کرم روشن کننده',
    soapName: 'صابون روشن کننده',
    creamDescription:
      'یک کرم روزانه لوکس برای درخشندگی، یکنواختی پوست و جلوه ای نرم و حرفه ای.',
    soapDescription:
      'صابون زیبایی که در کنار کرم، نتیجه روشن کنندگی را سریع تر نشان می دهد.',
    creamBenefits: ['درخشندگی پوست', 'پایان نرم', 'بافت لوکس'],
    soapBenefits: ['پاکسازی روزانه', 'ظاهر روشن تر', 'بهترین همراه کرم'],
  },
};

export const brandProfiles = [
  {
    slug: 'husn-e-turk',
    name: 'Husn-e-Turk',
    palette: 'from-[#f5c7da] via-[#fff0f6] to-[#f5d7b8]',
    heroImage: '/brands/husn-e-turk-brand.avif',
    productImage: '/brands/husn-e-turk-brand.avif',
    soapImage: 'https://images.unsplash.com/photo-1607006483225-6bb186de8de1?auto=format&fit=crop&w=900&q=80',
    statement: {
      en: 'Ottoman-inspired elegance for luminous bridal beauty.',
      ur: 'عثمانی انداز کی شان، دلہن جیسی روشن خوبصورتی کے لئے۔',
      ar: 'أناقة مستوحاة من التراث العثماني لإشراقة عروسية فاخرة.',
      fa: 'الهام گرفته از ظرافت عثمانی برای زیبایی درخشان و مجلل.',
    },
  },
  {
    slug: 'beautyloop',
    name: 'Beautyloop',
    palette: 'from-[#f6d5f0] via-[#fef3ff] to-[#cdb4ff]',
    heroImage: '/brands/beautyloop-whitening-cream.avif',
    productImage: '/brands/beautyloop-whitening-cream.avif',
    soapImage: 'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?auto=format&fit=crop&w=900&q=80',
    statement: {
      en: 'Fresh, playful radiance for trend-led skincare shelves.',
      ur: 'جدید اور دلکش سکن کیئر کے لئے تازہ اور زندہ دل چمک۔',
      ar: 'إشراقة عصرية مرحة لخطوط العناية بالبشرة ذات الطابع العصري.',
      fa: 'درخششی تازه و مدرن برای قفسه های حرفه ای مراقبت از پوست.',
    },
  },
  {
    slug: 'arman',
    name: 'Arman',
    palette: 'from-[#f8d49d] via-[#fff7ea] to-[#efd6c7]',
    heroImage: '/brands/arman-brand.avif',
    productImage: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
    soapImage: 'https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&w=900&q=80',
    statement: {
      en: 'Warm golden care with a refined premium finish.',
      ur: 'سنہری احساس کے ساتھ نفیس پریمیم نگہداشت۔',
      ar: 'عناية ذهبية دافئة بلمسة نهائية راقية ومميزة.',
      fa: 'مراقبتی طلایی و گرم با پایانی ظریف و ممتاز.',
    },
  },
  {
    slug: 'hijab',
    name: 'Hijab',
    palette: 'from-[#d6c2ff] via-[#f8f4ff] to-[#f7d6ea]',
    heroImage: '/brands/hijab-brand.avif',
    productImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80',
    soapImage: 'https://images.unsplash.com/photo-1612810806695-30f7a8258391?auto=format&fit=crop&w=900&q=80',
    statement: {
      en: 'Soft comfort care designed for everyday glow rituals.',
      ur: 'روزانہ کی چمک کے لئے نرم اور آرام دہ نگہداشت۔',
      ar: 'عناية ناعمة ومريحة لروتين يومي مليء بالإشراق.',
      fa: 'مراقبتی نرم و آرامش بخش برای درخشش روزانه پوست.',
    },
  },
  {
    slug: 'taryak',
    name: 'Taryak',
    palette: 'from-[#d7b0ff] via-[#f7edff] to-[#f4d8b5]',
    heroImage: '/brands/taryak-brand.avif',
    productImage: 'https://images.unsplash.com/photo-1570194065650-d99fb4d8a7f1?auto=format&fit=crop&w=900&q=80',
    soapImage: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=900&q=80',
    statement: {
      en: 'Intensive beauty care with a bold prestige identity.',
      ur: 'طاقتور خوبصورتی کی نگہداشت ایک مضبوط اور ممتاز شناخت کے ساتھ۔',
      ar: 'عناية مكثفة بالبشرة بهوية جريئة ومكانة راقية.',
      fa: 'مراقبت زیبایی قوی با هویتی برجسته و لوکس.',
    },
  },
  {
    slug: 'shaheen',
    name: 'Shaheen',
    palette: 'from-[#f0caa7] via-[#fff7f1] to-[#f9d8df]',
    heroImage: '/brands/shaheen-brand.avif',
    productImage: '/slider/shaheen-whitening-cream.avif',
    soapImage: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=900&q=80',
    statement: {
      en: 'Confident beauty essentials for ambitious global markets.',
      ur: 'اعتماد بھری بیوٹی پروڈکٹس جو عالمی مارکیٹ کے لئے تیار ہیں۔',
      ar: 'أساسيات جمالية واثقة للأسواق العالمية الطموحة.',
      fa: 'محصولات زیبایی قدرتمند برای بازارهای جهانی بلندپرواز.',
    },
  },
  {
    slug: 'almas',
    name: 'Almas',
    palette: 'from-[#f9d6c2] via-[#fff6f3] to-[#e6d3ff]',
    heroImage: '/brands/almas-brand.avif',
    productImage: '/slider/almas-whitening-beauty-cream.avif',
    soapImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    statement: {
      en: 'Gentle sophistication with glow-first skincare appeal.',
      ur: 'نرم وقار اور گلو فرسٹ سکن کیئر کشش کے ساتھ۔',
      ar: 'رقي ناعم مع جاذبية عناية بالبشرة ترتكز على الإشراق.',
      fa: 'ظرافتی ملایم با جذابیت مراقبت پوستی مبتنی بر درخشندگی.',
    },
  },
  {
    slug: 'libnani',
    name: 'Libnani',
    palette: 'from-[#f1d2a8] via-[#fff8ef] to-[#e8d6ff]',
    heroImage: '/brands/libnani-brand.avif',
    productImage: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=80',
    soapImage: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
    statement: {
      en: 'Heritage-inspired luxury beauty with polished export-ready shelf presence.',
      ur: 'روایتی شان اور جدید پریمیم انداز کے ساتھ ایک لکژری بیوٹی برانڈ۔',
      ar: 'علامة جمالية فاخرة بروح تراثية وحضور مصقول وجاهز لأسواق التصدير.',
      fa: 'برند زیبایی لوکس با حال و هوای اصیل و جلوه ای آراسته و مناسب بازارهای صادراتی.',
    },
  },
];

export const brandSlides = brandProfiles.slice(0, 4).map((brand, index) => ({
  id: `${brand.slug}-slide`,
  name: brand.name,
  image: brand.heroImage,
  accent: ['Rose Pink', 'Gold Finish', 'Deep Purple', 'Soft Nude'][index],
  caption: brand.statement,
}));

export const homepageSlides = [
  {
    id: 'promo-video-slide',
    type: 'image',
    name: 'Promotion & Discounts',
    accent: 'Special Offers',
    image: '/slider/beautyloop-whitening-beauty-cream.avif',
    poster: '/slider/beautyloop-whitening-beauty-cream.avif',
    caption: {
      en: 'Promotions, seasonal offers, and fast-moving beauty deals for distributors and retail partners.',
      ur: 'ڈسٹری بیوٹرز اور ریٹیل پارٹنرز کے لئے پروموشن، خصوصی آفرز اور رعایتی ڈیلز نمایاں کی گئی ہیں۔',
      ar: 'عروض ترويجية وخصومات موسمية وصفقات سريعة الحركة للموزعين وشركاء البيع بالتجزئة.',
      fa: 'پروموشن ها، تخفیف های دوره ای و پیشنهادهای ویژه برای توزیع کنندگان و شرکای فروش.',
    },
  },
  {
    id: 'manufacturing-video-slide',
    type: 'image',
    name: 'Manufacturing Highlights',
    accent: 'Factory Story',
    image: '/slider/turk-gold-beauty-cream.avif',
    poster: '/slider/turk-gold-beauty-cream.avif',
    caption: {
      en: 'A quick look at filling, packaging, and export-ready cosmetic production by Sheikh Brothers.',
      ur: 'شیخ برادرز کی فلنگ، پیکجنگ اور ایکسپورٹ کے لئے تیار مینوفیکچرنگ کا مختصر نظارہ۔',
      ar: 'نظرة سريعة على التعبئة والتغليف والإنتاج التجميلي الجاهز للتصدير لدى Sheikh Brothers.',
      fa: 'نمایی سریع از پرکنی، بسته بندی و تولید آرایشی آماده صادرات در Sheikh Brothers.',
    },
  },
  ...brandProfiles.map((brand, index) => ({
    id: `${brand.slug}-showcase-slide`,
    type: 'image',
    name: brand.name,
    image: index === 0 ? '/slider/slider-0.avif' : index === 1 ? '/slider/arman-hand-foot-cream.avif' : index === 2 ? '/slider/shaheen-whitening-cream.avif' : index === 3 ? '/slider/taryak-whitening-beauty-cream.avif' : index === 4 ? '/slider/slider-5.avif' : index === 5 ? '/slider/husn-e-turk-whitening-beauty-soap.avif' : index === 6 ? '/slider/slider-9.avif' : index === 7 ? '/slider/beautyloop-whitening-beauty-cream-2.avif' : brand.heroImage,
    poster: index === 0 ? '/slider/slider-0.avif' : index === 1 ? '/slider/arman-hand-foot-cream.avif' : index === 2 ? '/slider/shaheen-whitening-cream.avif' : index === 3 ? '/slider/taryak-whitening-beauty-cream.avif' : index === 4 ? '/slider/slider-5.avif' : index === 5 ? '/slider/husn-e-turk-whitening-beauty-soap.avif' : index === 6 ? '/slider/slider-9.avif' : index === 7 ? '/slider/beautyloop-whitening-beauty-cream-2.avif' : brand.heroImage,
    accent: ['Rose Pink', 'Gold Finish', 'Deep Purple', 'Soft Nude', 'Glow Ritual', 'Premium Care', 'Beauty Export'][index] ?? 'Beauty Collection',
    caption: brand.statement,
  })),
  {
    id: 'sheikh-signature-slide',
    type: 'image',
    name: 'Sheikh Brothers Signature',
    image: '/slider/beautyloop-blackberry-whitening-beauty-cream.avif',
    poster: '/slider/beautyloop-blackberry-whitening-beauty-cream.avif',
    accent: 'Luxury Selection',
    caption: {
      en: 'A signature luxury showcase representing broader Sheikh Brothers beauty manufacturing beyond the selected labels on the website.',
      ur: 'یہ سلائیڈ شیخ برادرز کی وسیع بیوٹی مینوفیکچرنگ کی نمائندگی کرتی ہے جو ویب سائٹ پر دکھائے گئے منتخب برانڈز سے آگے جاتی ہے۔',
      ar: 'تعرض هذه الشريحة جانبا من التصنيع الجمالي الأوسع لدى Sheikh Brothers إلى ما هو أبعد من العلامات المختارة على الموقع.',
      fa: 'این اسلاید نمایانگر دامنه گسترده تر تولیدات زیبایی Sheikh Brothers فراتر از برندهای منتخب سایت است.',
    },
  },
  {
    id: 'portfolio-slide',
    type: 'image',
    name: 'Sheikh Cosmetics Portfolio',
    image: '/slider/nj-formuala-whitening-beauty-gold-cream.avif',
    poster: '/slider/nj-formuala-whitening-beauty-gold-cream.avif',
    accent: '100+ Brands',
    caption: {
      en: 'Selected brands are shown online, while Sheikh Cosmetics and Sheikh Brothers support a much wider product portfolio.',
      ur: 'ویب سائٹ پر صرف چند منتخب برانڈز دکھائے گئے ہیں جبکہ اصل پورٹ فولیو اس سے کہیں زیادہ وسیع ہے۔',
      ar: 'الموقع يعرض علامات مختارة فقط، بينما تدعم Sheikh Cosmetics و Sheikh Brothers محفظة أوسع بكثير.',
      fa: 'در سایت فقط بخشی منتخب نمایش داده شده و پرتفوی واقعی Sheikh Cosmetics و Sheikh Brothers بسیار گسترده تر است.',
    },
  },
];

export const videos = [
  {
    id: 'video-facebook-1',
    title: {
      en: 'Sheikh Cosmetics Facebook Video Highlight',
      ur: 'Sheikh Cosmetics Facebook Video Highlight',
      ar: 'Sheikh Cosmetics Facebook Video Highlight',
      fa: 'Sheikh Cosmetics Facebook Video Highlight',
    },
    category: 'Brand Promotion',
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D508667025918443&show_text=false&width=1280',
    linkUrl: 'https://www.facebook.com/watch/?v=508667025918443',
  },
  { id: 'video-1', title: { en: 'Luxury Whitening Cream Showcase', ur: 'لکژری وائٹننگ کریم شوکیس', ar: 'عرض كريم التفتيح الفاخر', fa: 'نمایش کرم روشن کننده لوکس' }, category: 'Product Showcase', embedUrl: 'https://www.youtube-nocookie.com/embed/1nD4BLx8JXo' },
  { id: 'video-2', title: { en: 'Cosmetic Filling and Packaging Process', ur: 'کاسمیٹک فلنگ اور پیکجنگ پراسیس', ar: 'عملية التعبئة والتغليف لمستحضرات التجميل', fa: 'فرآیند پر کردن و بسته بندی محصولات آرایشی' }, category: 'Manufacturing', embedUrl: 'https://www.youtube-nocookie.com/embed/tgbNymZ7vqY' },
  { id: 'video-3', title: { en: 'Brand Promotion Visual Story', ur: 'برانڈ پروموشن ویژول اسٹوری', ar: 'قصة بصرية لترويج العلامة', fa: 'داستان تصویری تبلیغ برند' }, category: 'Brand Promotion', embedUrl: 'https://www.youtube-nocookie.com/embed/ysz5S6PUM-U' },
  { id: 'video-4', title: { en: 'Beauty and Skincare Product Highlights', ur: 'بیوٹی اور سکن کیئر پروڈکٹ ہائی لائٹس', ar: 'أبرز منتجات الجمال والعناية بالبشرة', fa: 'نکات برجسته محصولات زیبایی و مراقبت پوست' }, category: 'Beauty & Skincare', embedUrl: 'https://www.youtube-nocookie.com/embed/XHOmBV4js_E' },
  { id: 'video-5', title: { en: 'Private Label Brand Launch Story', ur: 'پرائیویٹ لیبل برانڈ لانچ اسٹوری', ar: 'قصة إطلاق علامة خاصة', fa: 'داستان راه اندازی برند خصوصی' }, category: 'Brand Promotion', embedUrl: 'https://www.youtube-nocookie.com/embed/kXYiU_JCYtU' },
  { id: 'video-6', title: { en: 'Cream and Soap Ritual Experience', ur: 'کریم اور صابن روٹین ایکسپیرینس', ar: 'تجربة روتين الكريم والصابون', fa: 'تجربه روتین کرم و صابون' }, category: 'Product Showcase', embedUrl: 'https://www.youtube-nocookie.com/embed/e-ORhEE9VVg' },
];

export const siteCopy = {
  en: {
    direction: 'ltr',
    nav: { home: 'Home', about: 'About', brands: 'Brands', products: 'Products', videos: 'Videos', privateLabel: 'Private Label', distributors: 'Distributors', contact: 'Contact' },
    header: { topbar: 'Global whitening cream and soap manufacturing for distributors, wholesalers, and private label beauty partners.', cta: 'Create Your Brand' },
    common: {
      viewMore: 'View More',
      exploreProducts: 'Explore Products',
      becomeDistributor: 'Become a Distributor',
      contactUs: 'Contact Us',
      privateLabel: 'Private Label Manufacturing',
      startProject: 'Start Your Project',
      globalSupply: 'Global Supply',
      watchVideos: 'Watch Videos',
      brandsLabel: 'Signature Brand Portfolio',
      seoTitle: seoMeta.title,
      seoDescription: seoMeta.description,
      seoKeywords: seoMeta.keywords,
      metrics: [{ value: '100+', label: 'beauty brands' }, { value: '500+', label: 'products' }, { value: '40+', label: 'distribution markets' }],
    },
    home: {
      badge: 'Sheikh Brothers Premium Beauty Manufacturing',
      title: 'Luxury whitening creams and soaps crafted for modern global beauty brands.',
      subtitle: 'Sheikh Cosmetics builds vibrant, high-impact skincare collections for retail shelves, distributors, and private label founders who want a premium beauty identity.',
      sliderTitle: 'Brand and product spotlight',
      sliderText: 'A JSON-powered showcase rotating the mood, product world, and premium identity of our beauty portfolio.',
      featuredTitle: 'Featured whitening creams and whitening soaps',
      featuredText: 'Every brand includes a whitening cream and whitening soap pairing. The whitening soap helps achieve faster beauty results when used with the cream.',
      aboutTitle: 'About Sheikh Cosmetics',
      aboutText: 'Sheikh Cosmetics, powered by Sheikh Brothers, combines manufacturing discipline, modern beauty positioning, and export-ready presentation for premium skincare collections.',
      benefitsTitle: 'Why choose Sheikh Cosmetics',
      benefitsText: 'Premium ingredients, manufacturing precision, and a brand-first approach for distributors and private label partners.',
      privateLabelTitle: 'Create your own beauty brand',
      privateLabelText: 'From naming and logo design to cream formulation, filling, packaging, printing, and worldwide delivery, we build launch-ready cosmetic brands.',
      distributorTitle: 'Bulk supply and global distribution',
      distributorText: 'We support wholesale partnerships, export programs, and container-level supply planning for ambitious markets.',
      videoTitle: 'Video highlights',
      videoText: 'Explore product stories, manufacturing visuals, and high-end beauty presentation.',
      ctaTitle: 'Build your next beauty success story with Sheikh Brothers.',
      ctaText: 'Talk with our team about private label whitening creams, distributor partnerships, and international bulk orders.',
      sections: { brandShowcase: 'Brand showcase', expertise: 'Our manufacturing expertise', ingredients: 'Premium ingredients', skincare: 'Skincare benefits', partner: 'Partner with us' },
    },
    about: { title: 'A luxury beauty manufacturer with Sheikh Brothers at its core.', subtitle: 'We create colorful, modern, export-ready whitening cream and whitening soap brands that feel premium on shelf and reliable in supply.' },
    brands: { title: 'Selected signature brands from a much wider beauty portfolio.', subtitle: 'Each page highlights only a small sample from Sheikh Cosmetics and Sheikh Brothers product families.' },
    products: { title: 'Whitening cream and soap collection', subtitle: 'Filter the full premium portfolio of Sheikh Cosmetics products.', allBrands: 'All Brands', allTypes: 'All Types', search: 'Search products or benefits', empty: 'No matching products found.' },
    videosPage: { title: 'Sheikh Cosmetics video gallery', subtitle: 'Product showcase videos, manufacturing footage, brand promotions, and beauty highlights.' },
    privateLabelPage: { title: 'Private label cosmetic manufacturing by Sheikh Cosmetics', subtitle: 'Sheikh Brothers helps clients create a complete whitening cream and whitening soap brand from start to finish.', promise: 'Launch your own whitening cream brand with your own name, visual identity, packaging, and production scale.' },
    distributorsPage: { title: 'Global distribution and bulk supply', subtitle: 'Partner with Sheikh Cosmetics for wholesale programs, global shipping, and long-term beauty category growth.' },
    contactPage: { title: 'Let’s build a premium beauty partnership.', subtitle: 'Contact Sheikh Cosmetics for private label manufacturing, distributor inquiries, and global supply planning.' },
    lists: {
      benefits: ['Premium whitening cream and soap positioning', 'Modern luxury packaging direction', 'Scalable manufacturing expertise', 'Wholesale and export readiness'],
      expertise: ['Advanced cream formulation', 'Automated filling and finishing', 'Elegant packaging design support', 'Quality-focused bulk production'],
      ingredients: ['Skin-comfort textures', 'Glow-focused beauty actives', 'Refined fragrance direction', 'Retail-ready premium presentation'],
      privateLabelServices: ['Brand name creation', 'Logo design', 'Product design', 'Cream formulation', 'Packaging design', 'Printing', 'Filling', 'Bulk manufacturing', 'Worldwide delivery'],
      partnerReasons: ['High-end beauty positioning for distributors', 'Private label support from concept to shipment', 'Global wholesale and export partnerships'],
      contactDetails: { addressLabel: 'Address', address: 'Sheikh Brothers Industrial Estate, Lahore, Pakistan', phoneLabel: 'Phone', phone: '+923059608328', emailLabel: 'Email', email: 'info@sheikhcosmetics.com' },
    },
  },
  ur: { direction: 'rtl', nav: { home: 'ہوم', about: 'تعارف', brands: 'برانڈز', products: 'پروڈکٹس', videos: 'ویڈیوز', privateLabel: 'پرائیویٹ لیبل', distributors: 'ڈسٹری بیوٹرز', contact: 'رابطہ' }, header: { topbar: 'دنیا بھر کے ڈسٹری بیوٹرز، ہول سیل پارٹنرز اور پرائیویٹ لیبل بیوٹی برانڈز کے لئے وائٹننگ کریم اور صابن مینوفیکچرنگ۔', cta: 'اپنا برانڈ بنائیں' }, common: { viewMore: 'مزید دیکھیں', exploreProducts: 'پروڈکٹس دیکھیں', becomeDistributor: 'ڈسٹری بیوٹر بنیں', contactUs: 'رابطہ کریں', privateLabel: 'پرائیویٹ لیبل مینوفیکچرنگ', startProject: 'اپنا پراجیکٹ شروع کریں', globalSupply: 'عالمی سپلائی', watchVideos: 'ویڈیوز دیکھیں', brandsLabel: 'سگنیچر برانڈ پورٹ فولیو', seoTitle: seoMeta.title, seoDescription: seoMeta.description, seoKeywords: seoMeta.keywords, metrics: [{ value: '100+', label: 'بیوٹی برانڈز' }, { value: '500+', label: 'پروڈکٹس' }, { value: '40+', label: 'عالمی مارکیٹس' }] }, home: { badge: 'شیخ برادرز پریمیم بیوٹی مینوفیکچرنگ', title: 'جدید عالمی بیوٹی برانڈز کے لئے لکژری وائٹننگ کریمز اور صابن۔', subtitle: 'شیخ کاسمیٹکس ڈسٹری بیوٹرز، پرائیویٹ لیبل پارٹنرز اور جدید بیوٹی کاروباروں کے لئے خوبصورت اور طاقتور سکن کیئر کلیکشن تیار کرتا ہے۔', sliderTitle: 'برانڈ اور پروڈکٹ اسپاٹ لائٹ', sliderText: 'ایک JSON پاورڈ شوکیس جو ہمارے برانڈز کے موڈ، پروڈکٹ دنیا اور لکژری شناخت کو نمایاں کرتا ہے۔', featuredTitle: 'نمایاں وائٹننگ کریمز اور وائٹننگ صابن', featuredText: 'ہر برانڈ میں وائٹننگ کریم اور وائٹننگ صابن شامل ہے۔ کریم کے ساتھ استعمال ہونے پر وائٹننگ صابن تیز تر خوبصورتی کے نتائج دیتا ہے۔', aboutTitle: 'شیخ کاسمیٹکس کے بارے میں', aboutText: 'شیخ کاسمیٹکس، شیخ برادرز کی مینوفیکچرنگ طاقت، جدید بیوٹی پوزیشننگ اور ایکسپورٹ کے لئے تیار پریزنٹیشن کو یکجا کرتا ہے۔', benefitsTitle: 'شیخ کاسمیٹکس کیوں منتخب کریں', benefitsText: 'پریمیم اجزاء، مضبوط مینوفیکچرنگ اور ڈسٹری بیوٹرز کے لئے برانڈ فرسٹ نقطہ نظر۔', privateLabelTitle: 'اپنا بیوٹی برانڈ بنائیں', privateLabelText: 'برانڈ نام، لوگو، کریم فارمولیشن، فلنگ، پیکجنگ، پرنٹنگ اور دنیا بھر میں ڈیلیوری تک ہم مکمل سروس فراہم کرتے ہیں۔', distributorTitle: 'بلک سپلائی اور عالمی ڈسٹری بیوشن', distributorText: 'ہم ہول سیل پارٹنرشپ، ایکسپورٹ پروگرامز اور بڑے پیمانے کی سپلائی منصوبہ بندی میں مدد کرتے ہیں۔', videoTitle: 'ویڈیو ہائی لائٹس', videoText: 'پروڈکٹ کہانیاں، مینوفیکچرنگ ویژولز اور ہائی اینڈ بیوٹی پریزنٹیشن دیکھیں۔', ctaTitle: 'شیخ برادرز کے ساتھ اپنی اگلی بیوٹی کامیابی تیار کریں۔', ctaText: 'پرائیویٹ لیبل وائٹننگ کریمز، ڈسٹری بیوٹر پارٹنرشپ اور عالمی بلک آرڈرز کے لئے ہماری ٹیم سے بات کریں۔', sections: { brandShowcase: 'برانڈ شوکیس', expertise: 'ہماری مینوفیکچرنگ مہارت', ingredients: 'پریمیم اجزاء', skincare: 'سکن کیئر فوائد', partner: 'ہمارے ساتھ پارٹنر بنیں' } }, about: { title: 'ایک لکژری بیوٹی مینوفیکچرر جس کی بنیاد شیخ برادرز ہیں۔', subtitle: 'ہم رنگین، جدید اور ایکسپورٹ کے لئے تیار وائٹننگ کریم اور صابن برانڈز بناتے ہیں جو مارکیٹ میں ممتاز نظر آئیں۔' }, brands: { title: 'منتخب نمایاں برانڈز، جبکہ اصل پورٹ فولیو اس سے کہیں زیادہ وسیع ہے۔', subtitle: 'ہر برانڈ پیج پر صرف چند نمائشی پروڈکٹس دکھائی گئی ہیں، مکمل کیٹلاگ ویب سائٹ پر شامل نہیں۔' }, products: { title: 'وائٹننگ کریم اور صابن کلیکشن', subtitle: 'شیخ کاسمیٹکس کی مکمل پریمیم پورٹ فولیو دیکھیں۔', allBrands: 'تمام برانڈز', allTypes: 'تمام اقسام', search: 'پروڈکٹس یا فوائد تلاش کریں', empty: 'کوئی پروڈکٹ نہیں ملی۔' }, videosPage: { title: 'شیخ کاسمیٹکس ویڈیو گیلری', subtitle: 'پروڈکٹ شوکیس، مینوفیکچرنگ ویڈیوز، برانڈ پروموشنز اور بیوٹی ہائی لائٹس۔' }, privateLabelPage: { title: 'شیخ کاسمیٹکس کی پرائیویٹ لیبل کاسمیٹک مینوفیکچرنگ', subtitle: 'شیخ برادرز کلائنٹس کو ابتدا سے انتہا تک مکمل وائٹننگ کریم اور وائٹننگ صابن برانڈ بنانے میں مدد دیتے ہیں۔', promise: 'اپنے نام، اپنی پیکجنگ اور اپنی شناخت کے ساتھ اپنی وائٹننگ کریم برانڈ لانچ کریں۔' }, distributorsPage: { title: 'عالمی ڈسٹری بیوشن اور بلک سپلائی', subtitle: 'ہول سیل پروگرامز، گلوبل شپنگ اور طویل مدتی مارکیٹ گروتھ کے لئے شیخ کاسمیٹکس کے ساتھ پارٹنر بنیں۔' }, contactPage: { title: 'آئیں ایک پریمیم بیوٹی پارٹنرشپ شروع کریں۔', subtitle: 'پرائیویٹ لیبل مینوفیکچرنگ، ڈسٹری بیوٹر انکوائری اور عالمی سپلائی پلاننگ کے لئے ہم سے رابطہ کریں۔' }, lists: { benefits: ['پریمیم پوزیشننگ', 'لکژری پیکجنگ', 'اسکیل ایبل مینوفیکچرنگ', 'ایکسپورٹ تیاری'], expertise: ['کریم فارمولیشن', 'خودکار فلنگ', 'پیکجنگ ڈیزائن', 'بلک پروڈکشن'], ingredients: ['نرم ٹیکسچر', 'گلو ایکٹو اجزاء', 'نفیس خوشبو', 'پریمیم پریزنٹیشن'], privateLabelServices: ['برانڈ نام', 'لوگو ڈیزائن', 'پروڈکٹ ڈیزائن', 'کریم فارمولیشن', 'پیکجنگ ڈیزائن', 'پرنٹنگ', 'فلنگ', 'بلک مینوفیکچرنگ', 'دنیا بھر میں ڈیلیوری'], partnerReasons: ['ہائی اینڈ برانڈ پوزیشننگ', 'کانسپٹ سے شپمنٹ تک سپورٹ', 'عالمی ہول سیل پارٹنرشپ'], contactDetails: { addressLabel: 'پتہ', address: 'شیخ برادرز انڈسٹریل اسٹیٹ، لاہور، پاکستان', phoneLabel: 'فون', phone: '+۹۲ ۳۰۵ ۹۶۰ ۸۳۲۸', emailLabel: 'ای میل', email: 'info@sheikhcosmetics.com' } } },
  ar: { direction: 'rtl', nav: { home: 'الرئيسية', about: 'من نحن', brands: 'العلامات', products: 'المنتجات', videos: 'الفيديو', privateLabel: 'العلامة الخاصة', distributors: 'الموزعون', contact: 'اتصل بنا' }, header: { topbar: 'تصنيع كريمات وصوابين التفتيح للموزعين وتجار الجملة وشركاء العلامات الخاصة حول العالم.', cta: 'أنشئ علامتك' }, common: { viewMore: 'عرض المزيد', exploreProducts: 'استكشف المنتجات', becomeDistributor: 'كن موزعا', contactUs: 'اتصل بنا', privateLabel: 'تصنيع العلامة الخاصة', startProject: 'ابدأ مشروعك', globalSupply: 'توريد عالمي', watchVideos: 'شاهد الفيديو', brandsLabel: 'محفظة العلامات الفاخرة', seoTitle: seoMeta.title, seoDescription: seoMeta.description, seoKeywords: seoMeta.keywords, metrics: [{ value: '100+', label: 'علامات تجميل' }, { value: '500+', label: 'منتجات' }, { value: '40+', label: 'أسواق عالمية' }] }, home: { badge: 'تصنيع تجميلي فاخر من Sheikh Brothers', title: 'كريمات وصوابين تفتيح فاخرة لعلامات الجمال العالمية الحديثة.', subtitle: 'تقدم Sheikh Cosmetics مجموعات عناية بالبشرة نابضة بالحيوية للموزعين وشركاء العلامات الخاصة ورواد الجمال الباحثين عن هوية فاخرة.', sliderTitle: 'عرض العلامات والمنتجات', sliderText: 'واجهة JSON متحركة تبرز هوية العلامات والمنتجات الفاخرة داخل محفظتنا.', featuredTitle: 'كريمات وصوابين التفتيح المميزة', featuredText: 'كل علامة تتضمن كريم تفتيح وصابونة تفتيح. تساعد الصابونة على نتائج أسرع عند استخدامها مع الكريم.', aboutTitle: 'عن Sheikh Cosmetics', aboutText: 'تجمع Sheikh Cosmetics بين قوة التصنيع لدى Sheikh Brothers والتموضع التجميلي الحديث والعرض الجاهز للتصدير.', benefitsTitle: 'لماذا Sheikh Cosmetics', benefitsText: 'مكونات مميزة، خبرة تصنيع، ومنهجية تركز على قوة العلامة للموزعين والشركاء.', privateLabelTitle: 'أنشئ علامتك الجمالية الخاصة', privateLabelText: 'من اختيار الاسم والتصميم والشعار إلى التركيبة والتعبئة والطباعة والتوريد العالمي، نقدم خدمة متكاملة.', distributorTitle: 'التوريد بالجملة والتوزيع العالمي', distributorText: 'ندعم الشراكات بالجملة وبرامج التصدير والتخطيط للتوريد واسع النطاق.', videoTitle: 'أبرز الفيديوهات', videoText: 'اكتشف عروض المنتجات، مشاهد التصنيع، والهوية البصرية الفاخرة.', ctaTitle: 'ابن قصة نجاحك الجمالية القادمة مع Sheikh Brothers.', ctaText: 'تواصل معنا بخصوص كريمات التفتيح الخاصة والعقود التوزيعية والطلبات الدولية بالجملة.', sections: { brandShowcase: 'عرض العلامات', expertise: 'خبرتنا التصنيعية', ingredients: 'مكونات مميزة', skincare: 'فوائد العناية بالبشرة', partner: 'شاركنا النجاح' } }, about: { title: 'مصنع تجميل فاخر يرتكز على خبرة Sheikh Brothers.', subtitle: 'نطور علامات حديثة وملونة لكريمات وصوابين التفتيح بمظهر احترافي جاهز للتصدير.' }, brands: { title: 'علامات مختارة من محفظة أوسع بكثير من المعروض على الموقع.', subtitle: 'كل صفحة علامة تعرض نماذج مختارة فقط، أما بقية الكتالوج فمتاحة عند الطلب.' }, products: { title: 'مجموعة كريمات وصوابين التفتيح', subtitle: 'تصفح المحفظة الفاخرة الكاملة لمنتجات Sheikh Cosmetics.', allBrands: 'كل العلامات', allTypes: 'كل الأنواع', search: 'ابحث عن المنتجات أو الفوائد', empty: 'لا توجد منتجات مطابقة.' }, videosPage: { title: 'معرض فيديو Sheikh Cosmetics', subtitle: 'فيديوهات عرض المنتجات والتصنيع والترويج للعلامة ومزايا الجمال.' }, privateLabelPage: { title: 'تصنيع مستحضرات التجميل بالعلامة الخاصة', subtitle: 'تساعد Sheikh Brothers العملاء على إنشاء علامة كريم تفتيح وصابون تفتيح كاملة من البداية حتى الإطلاق.', promise: 'أطلق علامتك الخاصة لكريم التفتيح باسمك وهويتك وتغليفك.' }, distributorsPage: { title: 'التوزيع العالمي والتوريد بالجملة', subtitle: 'كن شريكا مع Sheikh Cosmetics للتوزيع العالمي والشحن الدولي والنمو طويل الأجل.' }, contactPage: { title: 'لنصنع شراكة تجميل فاخرة.', subtitle: 'تواصل معنا بخصوص التصنيع الخاص والتوزيع العالمي وخطط التوريد.' }, lists: { benefits: ['تموضع فاخر', 'تصميم تغليف راق', 'إنتاج قابل للتوسع', 'جاهزية للتصدير'], expertise: ['تركيب الكريم', 'التعبئة الآلية', 'تصميم التغليف', 'إنتاج بالجملة'], ingredients: ['ملمس مريح', 'عناصر جمالية فعالة', 'اتجاه عطري راق', 'عرض تجاري فاخر'], privateLabelServices: ['اسم العلامة', 'تصميم الشعار', 'تصميم المنتج', 'تركيبة الكريم', 'تصميم التغليف', 'الطباعة', 'التعبئة', 'الإنتاج بالجملة', 'التوصيل العالمي'], partnerReasons: ['تموضع فاخر للموزعين', 'دعم من الفكرة حتى الشحن', 'شراكات جملة عالمية'], contactDetails: { addressLabel: 'العنوان', address: 'المنطقة الصناعية Sheikh Brothers، لاهور، باكستان', phoneLabel: 'الهاتف', phone: '+٩٢ ٣٠٥ ٩٦٠ ٨٣٢٨', emailLabel: 'البريد الإلكتروني', email: 'info@sheikhcosmetics.com' } } },
  fa: { direction: 'rtl', nav: { home: 'خانه', about: 'درباره ما', brands: 'برندها', products: 'محصولات', videos: 'ویدیوها', privateLabel: 'برند خصوصی', distributors: 'توزیع کنندگان', contact: 'تماس' }, header: { topbar: 'تولید کرم و صابون روشن کننده برای عمده فروشان، توزیع کنندگان و شرکای برند خصوصی در سراسر جهان.', cta: 'برند خود را بسازید' }, common: { viewMore: 'مشاهده بیشتر', exploreProducts: 'مشاهده محصولات', becomeDistributor: 'همکار توزیع شوید', contactUs: 'تماس با ما', privateLabel: 'تولید برند خصوصی', startProject: 'شروع پروژه', globalSupply: 'تامین جهانی', watchVideos: 'مشاهده ویدیوها', brandsLabel: 'مجموعه برندهای ممتاز', seoTitle: seoMeta.title, seoDescription: seoMeta.description, seoKeywords: seoMeta.keywords, metrics: [{ value: '100+', label: 'برند زیبایی' }, { value: '500+', label: 'محصول' }, { value: '40+', label: 'بازار جهانی' }] }, home: { badge: 'تولید ممتاز زیبایی توسط Sheikh Brothers', title: 'کرم ها و صابون های روشن کننده لوکس برای برندهای مدرن زیبایی در جهان.', subtitle: 'Sheikh Cosmetics مجموعه های پوستی رنگارنگ و حرفه ای برای توزیع کنندگان، برندهای خصوصی و شرکای بین المللی ایجاد می کند.', sliderTitle: 'نمایش برند و محصول', sliderText: 'یک اسلایدر مبتنی بر JSON که هویت بصری لوکس و دنیای محصولات ما را نمایش می دهد.', featuredTitle: 'کرم ها و صابون های روشن کننده ویژه', featuredText: 'هر برند شامل کرم روشن کننده و صابون روشن کننده است. صابون در کنار کرم به نتیجه سریع تر کمک می کند.', aboutTitle: 'درباره Sheikh Cosmetics', aboutText: 'Sheikh Cosmetics با تکیه بر Sheikh Brothers، نظم تولید، جایگاه سازی مدرن و ارائه مناسب صادرات را در کنار هم قرار می دهد.', benefitsTitle: 'چرا Sheikh Cosmetics', benefitsText: 'مواد ممتاز، تخصص تولید و نگاه برندمحور برای توزیع کنندگان و شرکای خصوصی.', privateLabelTitle: 'برند زیبایی خود را بسازید', privateLabelText: 'از نام و لوگو تا فرمول کرم، طراحی بسته بندی، چاپ، پر کردن، تولید انبوه و ارسال جهانی را ارائه می دهیم.', distributorTitle: 'توزیع جهانی و تامین عمده', distributorText: 'ما از برنامه های عمده فروشی، صادرات و تامین بین المللی در مقیاس بالا پشتیبانی می کنیم.', videoTitle: 'ویدیوهای منتخب', videoText: 'ویدیوهای محصول، تولید، پروموشن برند و هایلایت های زیبایی را ببینید.', ctaTitle: 'داستان موفقیت بعدی زیبایی خود را با Sheikh Brothers بسازید.', ctaText: 'برای تولید خصوصی، همکاری توزیع و سفارش های عمده جهانی با ما صحبت کنید.', sections: { brandShowcase: 'نمایش برندها', expertise: 'تخصص تولید ما', ingredients: 'مواد ممتاز', skincare: 'مزایای مراقبت پوست', partner: 'همکاری با ما' } }, about: { title: 'یک تولید کننده لوکس زیبایی با پشتوانه Sheikh Brothers.', subtitle: 'ما برندهای مدرن، رنگارنگ و آماده صادرات برای کرم و صابون روشن کننده تولید می کنیم.' }, brands: { title: 'برندهای منتخب از میان مجموعه ای بسیار گسترده تر از آنچه در سایت دیده می شود.', subtitle: 'در هر صفحه برند فقط چند محصول نمایشی آمده و کاتالوگ کامل به صورت آنلاین نمایش داده نشده است.' }, products: { title: 'مجموعه کرم و صابون روشن کننده', subtitle: 'پرتفوی کامل محصولات ممتاز Sheikh Cosmetics را فیلتر و بررسی کنید.', allBrands: 'همه برندها', allTypes: 'همه انواع', search: 'جستجوی محصول یا مزیت', empty: 'محصولی پیدا نشد.' }, videosPage: { title: 'گالری ویدیویی Sheikh Cosmetics', subtitle: 'ویدیوهای نمایش محصول، تولید، تبلیغات برند و هایلایت های زیبایی.' }, privateLabelPage: { title: 'تولید برند خصوصی توسط Sheikh Cosmetics', subtitle: 'Sheikh Brothers به مشتریان کمک می کند یک برند کامل کرم روشن کننده و صابون روشن کننده از ابتدا تا پایان بسازند.', promise: 'برند کرم روشن کننده خود را با نام، هویت و بسته بندی اختصاصی راه اندازی کنید.' }, distributorsPage: { title: 'توزیع جهانی و تامین عمده', subtitle: 'برای همکاری عمده فروشی، ارسال جهانی و رشد بلندمدت با Sheikh Cosmetics همراه شوید.' }, contactPage: { title: 'بیایید یک همکاری لوکس در حوزه زیبایی بسازیم.', subtitle: 'برای تولید خصوصی، همکاری توزیع و برنامه ریزی تامین جهانی با ما تماس بگیرید.' }, lists: { benefits: ['جایگاه سازی ممتاز', 'بسته بندی لوکس', 'تولید مقیاس پذیر', 'آمادگی صادرات'], expertise: ['فرمولاسیون کرم', 'پر کردن خودکار', 'طراحی بسته بندی', 'تولید انبوه'], ingredients: ['بافت لطیف', 'اکتیوهای درخشان کننده', 'رایحه ظریف', 'ارائه ممتاز'], privateLabelServices: ['انتخاب نام برند', 'طراحی لوگو', 'طراحی محصول', 'فرمول کرم', 'طراحی بسته بندی', 'چاپ', 'پر کردن', 'تولید انبوه', 'ارسال جهانی'], partnerReasons: ['جایگاه لوکس برای توزیع کنندگان', 'پشتیبانی از ایده تا ارسال', 'شراکت عمده جهانی'], contactDetails: { addressLabel: 'آدرس', address: 'Sheikh Brothers Industrial Estate، لاهور، پاکستان', phoneLabel: 'تلفن', phone: '+۹۲ ۳۰۵ ۹۶۰ ۸۳۲۸', emailLabel: 'ایمیل', email: 'info@sheikhcosmetics.com' } } },
};

export function getLocalizedValue(value, language) {
  if (value == null) return value;
  if (typeof value === 'string') return value;
  return value[language] ?? value.en ?? '';
}

export function getProducts(language) {
  const localizedProduct = productCopy[language] ?? productCopy.en;

  return brandProfiles.flatMap((brand, index) => [
    {
      id: `${brand.slug}-cream`,
      brand: brand.name,
      type: localizedProduct.creamName,
      name: `${brand.name} ${localizedProduct.creamName}`,
      image: brand.productImage,
      accent: brand.palette,
      description: `${getLocalizedValue(brand.statement, language)} ${localizedProduct.creamDescription}`,
      benefits: localizedProduct.creamBenefits,
      priority: index + 1,
    },
    {
      id: `${brand.slug}-soap`,
      brand: brand.name,
      type: localizedProduct.soapName,
      name: `${brand.name} ${localizedProduct.soapName}`,
      image: brand.soapImage,
      accent: brand.palette,
      description: `${getLocalizedValue(brand.statement, language)} ${localizedProduct.soapDescription}`,
      benefits: localizedProduct.soapBenefits,
      priority: index + 1,
    },
  ]);
}
