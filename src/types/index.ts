export interface JewelleryCollection {
  id: string;
  name: string;
  category: 'gold' | 'silver' | 'bridal' | 'traditional' | 'all';
  description: string;
  image: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  orientation?: 'portrait' | 'landscape' | 'square';
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  category: string;
  message: string;
}
