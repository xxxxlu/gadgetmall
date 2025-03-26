export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  category: string;
  description?: string;
  features?: string[];
  specifications?: Record<string, string | string[]>;
  relatedProducts?: number[];
}

export const products: Product[] = [
  {
    id: 166,
    name: "65″ C655 QLED Pro TV – Local Dimming",
    price: 329900,
    image: "https://ext.same-assets.com/729254218/2306040691.jpeg",
    slug: "65-c655-qled-pro-tv-local-dimming",
    category: "QLED",
    description: "The TCL 65″ C655 QLED Pro TV offers a premium entertainment experience with Quantum Dot Technology, delivering brighter, more accurate colors and deeper contrast levels. With 4K UHD resolution and Local Dimming technology, this TV enhances brightness and contrast, ensuring darker blacks and brighter highlights for an immersive viewing experience. This model supports Dolby Vision & HDR10+, optimizing picture quality for cinematic realism. The 120Hz refresh rate and MEMC motion smoothing reduce blur, making it ideal for fast-moving scenes in sports, movies, and gaming. Dolby Atmos sound enhances audio depth, creating a surround sound experience that complements the stunning visuals.",
    features: [
      "65-inch QLED display with Quantum Dot Technology for lifelike colors",
      "4K UHD resolution (3840 x 2160) for crystal-clear visuals",
      "Local Dimming for improved contrast and deeper blacks",
      "Dolby Vision & HDR10+ for enhanced brightness and cinematic detail",
      "120Hz refresh rate with MEMC for fluid motion and reduced blur",
      "Dolby Atmos & DTS Virtual:X for immersive surround sound",
      "Google TV OS with access to Netflix, YouTube, Prime Video & more",
      "Hands-free Google Assistant & Alexa support",
      "Gaming features: HDMI 2.1, VRR, and ALLM for responsive gameplay",
    ],
    specifications: {
      "Screen Size": "65 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Type": "QLED",
      "HDR Support": ["Dolby Vision", "HDR10+"],
      "Local Dimming": "Yes",
      "Refresh Rate": "120Hz",
      "Audio System": ["Dolby Atmos", "DTS Virtual:X"],
      "Smart TV OS": "Google TV",
      "Connectivity": [
        "HDMI Ports: 4 (including HDMI 2.1 for gaming)",
        "USB Ports: Yes",
        "Wi-Fi: Dual-band Wi-Fi 6",
        "Bluetooth: 5.2",
      ],
    },
    relatedProducts: [155, 127, 159],
  },
  {
    id: 131,
    name: "75″ V6C UHD Google TV",
    price: 259990,
    image: "https://ext.same-assets.com/729254218/4225088003.jpeg",
    slug: "75-v6c-uhd-google-tv",
    category: "UHD TV",
    description: "Experience stunning 4K clarity with the TCL 75″ V6C UHD Google TV. This large-screen television brings your content to life with vibrant colors and sharp details. Powered by Google TV, it offers seamless access to all your favorite streaming services and apps in one place.",
    features: [
      "75-inch UHD display with 4K resolution",
      "Google TV smart platform",
      "HDR technology for enhanced contrast",
      "Multiple HDMI and USB ports for connectivity",
      "Voice control with Google Assistant",
      "Dolby Audio for immersive sound",
    ],
    specifications: {
      "Screen Size": "75 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Type": "LED",
      "HDR Support": "HDR10",
      "Smart TV OS": "Google TV",
      "Audio": "Dolby Audio",
      "Connectivity": [
        "HDMI Ports: 3",
        "USB Ports: 2",
        "Wi-Fi: Yes",
        "Bluetooth: Yes",
      ],
    },
    relatedProducts: [166, 100, 159],
  },
  {
    id: 100,
    name: "Samsung 32″ T5300 HD Smart TV (2020)",
    price: 70000,
    image: "https://ext.same-assets.com/729254218/3610930784.jpeg",
    slug: "samsung-32-t5300-hd-smart-tv-2020",
    category: "UHD TV",
    description: "The Samsung 32″ T5300 HD Smart TV is perfect for smaller spaces without compromising on smart features. With its HD resolution and access to streaming apps, it delivers a compact entertainment solution for bedrooms, kitchens, or small living spaces.",
    features: [
      "32-inch HD display",
      "Smart TV functionality with built-in apps",
      "Samsung's Tizen operating system",
      "HDR support for improved contrast",
      "Slim design fits in any space",
      "Voice assistant compatibility",
    ],
    specifications: {
      "Screen Size": "32 inches",
      "Resolution": "HD (1366 x 768)",
      "Display Type": "LED",
      "Smart TV OS": "Tizen",
      "Audio": "20W output",
      "Connectivity": [
        "HDMI Ports: 2",
        "USB Ports: 1",
        "Wi-Fi: Yes",
        "Bluetooth: Yes",
      ],
    },
    relatedProducts: [131, 102, 104],
  },
  // Add more products as needed
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getRelatedProducts(productId: number): Product[] {
  const product = getProductById(productId);
  if (!product || !product.relatedProducts) return [];

  return product.relatedProducts
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}
