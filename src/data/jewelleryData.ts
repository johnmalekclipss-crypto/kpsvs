import type { JewelleryCollection, GalleryItem, ValueProposition } from '../types';
import { asset } from '../utils/asset';

export const BUSINESS_INFO = {
  shopName: 'Kedar Prasad Sushil Verma Sarraf',
  brandName: 'KP SVS',
  owner: 'Sushil Verma',
  category: 'Gold, Silver, Diamond and Traditional Indian Jewellery',
  phone: '+91 96702 28927',
  phoneRaw: '9670228927',
  secondaryPhone: '+91 87560 49877',
  addressHindi: 'कप्तानगंज रोड नौरंगिया, निकट शिव मंदिर पोखरा नौरंगिया बजार गेट के सामने, Padrauna, Uttar Pradesh 274305, India',
  addressEnglish: 'Kaptanganj Road, Naurangiya, Near Shiv Mandir Pokhra, Opposite Naurangiya Bazar Gate, Padrauna, Uttar Pradesh 274305, India',
  locationShort: 'Naurangiya, Padrauna, Uttar Pradesh',
  tagline: 'Timeless Beauty. Precious Moments.',
  announcementText: 'Welcome to KP SVS — Discover the Beauty of Timeless Jewellery',
  
  social: {
    instagram: 'https://www.instagram.com/jewellersns.kpsvs/',
    facebook: 'https://www.facebook.com/profile.php?id=61560756487311',
    googleMaps: 'https://maps.app.goo.gl/jeCpVBpRzVGrXP999',
    whatsapp: 'https://wa.me/919670228927',
  },
  
  whatsappEnquiryUrl: (customMessage?: string) => {
    const text = customMessage || 'Namaste KP SVS, I would like to enquire about your jewellery collections.';
    return `https://wa.me/919670228927?text=${encodeURIComponent(text)}`;
  }
};

export const COLLECTIONS: JewelleryCollection[] = [
  {
    id: 'gold-jewellery',
    name: 'Gold Jewellery',
    category: 'gold',
    description: 'Timeless yellow gold craftsmanship designed for celebrations, traditional rituals, and auspicious milestones.',
    image: asset('images/collections/gold-jewellery.jpg'),
    highlights: ['22K Traditional Finish', 'Intricate Filigree', 'Festive Essentials'],
  },
  {
    id: 'silver-jewellery',
    name: 'Silver Jewellery',
    category: 'silver',
    description: 'Fine silver ornaments including anklets (payal), bichhiya, bangles, and sacred puja items crafted with care.',
    image: asset('images/collections/silver-jewellery.jpg'),
    highlights: ['Traditional Payal & Anklets', 'Pure Silver Utensils', 'Puja Artifacts'],
  },
  {
    id: 'bridal-jewellery',
    name: 'Bridal Jewellery',
    category: 'bridal',
    description: 'Grand bridal sets featuring ornate chokers, matching jhumkas, and royal ornaments tailored for memorable wedding ceremonies.',
    image: asset('images/collections/bridal-jewellery.jpg'),
    highlights: ['Royal Bridal Sets', 'Heavy Chokers & Haars', 'Matha Patti & Naths'],
  },
  {
    id: 'traditional-jewellery',
    name: 'Traditional Jewellery',
    category: 'traditional',
    description: 'Heritage Indian designs celebrating local cultural artistry, antique motifs, and timeless festive aesthetics.',
    image: asset('images/collections/traditional-jewellery.jpg'),
    highlights: ['Antique Polish', 'Temple Art Motifs', 'Heritage Craft'],
  },
  {
    id: 'earrings',
    name: 'Earrings & Jhumkas',
    category: 'gold',
    description: 'A rich variety of gold jhumkis, chandbalis, daily-wear tops, and gemstone-accented studs.',
    image: asset('images/collections/earrings.jpg'),
    highlights: ['Chandbalis & Jhumkis', 'Lightweight Tops', 'Festive Drops'],
  },
  {
    id: 'necklaces-chains',
    name: 'Necklaces & Chains',
    category: 'gold',
    description: 'Graceful gold chains, festive collar necklaces, rani haars, and lightweight daily-wear neckpieces.',
    image: asset('images/collections/necklaces-chains.jpg'),
    highlights: ['Rani Haar & Collars', 'Solid Gold Chains', 'Modern Sleek Necklaces'],
  },
  {
    id: 'rings',
    name: 'Rings',
    category: 'gold',
    description: 'Elegant engagement bands, traditional cocktail rings, stone rings, and daily-wear gold signets.',
    image: asset('images/collections/rings.jpg'),
    highlights: ['Engagement Bands', 'Auspicious Gemstone Rings', 'Daily Wear Bands'],
  },
  {
    id: 'bangles-bracelets',
    name: 'Bangles & Bracelets',
    category: 'gold',
    description: 'Classic gold kadas, daily-wear choori sets, traditional patli bangles, and modern wrist bracelets.',
    image: asset('images/collections/bangles-bracelets.jpg'),
    highlights: ['Solid Gold Kadas', 'Lightweight Bangles', 'Intricate Filigree Choori'],
  },
  {
    id: 'mangalsutra',
    name: 'Mangalsutra',
    category: 'traditional',
    description: 'Sacred black bead chains with traditional 22K gold pendants and graceful contemporary variations.',
    image: asset('images/collections/mangalsutra.jpg'),
    highlights: ['Auspicious Black Beads', 'Traditional Vati Pendants', 'Modern Short Chains'],
  },
  {
    id: 'gifts-occasions',
    name: 'Gifts & Special Occasion Jewellery',
    category: 'silver',
    description: 'Silver coins, auspicious Lakshmi-Ganesh idols, birthday gifts, and celebratory tokens for your loved ones.',
    image: asset('images/collections/gifts-occasions.jpg'),
    highlights: ['Pure Silver Coins', 'Divine Idols', 'Baby Kadas & Nazariya'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Royal Bridal Haar & Choker Set',
    category: 'Bridal Collection',
    description: 'Exquisite bridal necklace set featuring layered craftsmanship and regal pendant detailing.',
    image: asset('images/gallery/gallery-1.jpg'),
    orientation: 'portrait',
  },
  {
    id: 'gal-2',
    title: 'Heritage Gold Jhumkas with Pearls',
    category: 'Earrings',
    description: 'Ornate handcrafted jhumkas with delicate seed pearls and cascading bell droplets.',
    image: asset('images/gallery/gallery-2.jpg'),
    orientation: 'square',
  },
  {
    id: 'gal-3',
    title: 'Precious Diamond & Gold Rings',
    category: 'Rings',
    description: 'Sparkling cocktail and ceremonial rings crafted with precision symmetry.',
    image: asset('images/gallery/gallery-3.jpg'),
    orientation: 'landscape',
  },
  {
    id: 'gal-4',
    title: 'Traditional Gold Kada & Bangles',
    category: 'Bangles',
    description: 'Richly engraved traditional kadas celebrating auspicious ceremonial wear.',
    image: asset('images/gallery/gallery-4.jpg'),
    orientation: 'portrait',
  },
  {
    id: 'gal-5',
    title: 'Festive Polki & Gemstone Necklace',
    category: 'Necklaces',
    description: 'Statement necklace piece accented with vibrant tones for family celebrations.',
    image: asset('images/gallery/gallery-5.jpg'),
    orientation: 'landscape',
  },
  {
    id: 'gal-6',
    title: 'Antique Temple Art Choker',
    category: 'Traditional',
    description: 'Intricately etched gold collar embodying timeless Indian heritage traditions.',
    image: asset('images/gallery/gallery-6.jpg'),
    orientation: 'square',
  },
  {
    id: 'gal-7',
    title: 'Intricate Silver Payal & Ornaments',
    category: 'Silver',
    description: 'Graceful silver anklets featuring rhythmic ghungroo accents and fine engraving.',
    image: asset('images/gallery/gallery-7.jpg'),
    orientation: 'portrait',
  },
  {
    id: 'gal-8',
    title: 'Auspicious Festive Gold Set',
    category: 'Gold',
    description: 'Complete festive necklace and earrings ensemble for special household occasions.',
    image: asset('images/gallery/gallery-8.jpg'),
    orientation: 'landscape',
  },
];

export const WHY_CHOOSE_US: ValueProposition[] = [
  {
    id: 'local-destination',
    title: 'A Convenient Local Destination',
    description: 'A trusted jewellery landmark serving families across Naurangiya and surrounding regions of Uttar Pradesh.',
    iconName: 'MapPin',
  },
  {
    id: 'styles',
    title: 'Traditional & Contemporary Styles',
    description: 'Explore both heritage Indian jewellery designs and sleek modern styles suitable for all generations.',
    iconName: 'Sparkles',
  },
  {
    id: 'assistance',
    title: 'Personal Assistance',
    description: 'Receive thoughtful, one-on-one attention from Sushil Verma and our team while selecting your special pieces.',
    iconName: 'Users',
  },
  {
    id: 'occasions',
    title: 'Celebrations & Gifting',
    description: 'Curated jewellery options prepared for weddings, festivals, newborn blessings, and family milestones.',
    iconName: 'Gift',
  },
  {
    id: 'direct-communication',
    title: 'Direct Communication',
    description: 'Connect directly with the shop owner and team via phone or WhatsApp for quick enquiries and personalized updates.',
    iconName: 'MessageSquareText',
  },
  {
    id: 'location',
    title: 'Convenient Naurangiya Location',
    description: 'Easily accessible on Kaptanganj Road, directly opposite the Naurangiya Bazar Gate and near Shiv Mandir Pokhra.',
    iconName: 'Compass',
  },
];
