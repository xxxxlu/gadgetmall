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
    price: 42900,
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
    price: 43890,
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
    price: 14798.99,
    image: "https://ext.same-assets.com/729254218/4225088003.jpeg",
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
  {
    id: 102,
    name: "Sony 55″ X80K 4K Ultra HD Smart TV",
    price: 50000,
    image: "https://m.media-amazon.com/images/I/81bk1NW7lKL._AC_SL1500_.jpg",
    slug: "sony-55-x80k-4k-uhd-smart-tv",
    category: "UHD TV",
    description: "Experience true-to-life color and clarity with the Sony X80K 4K Ultra HD Smart TV. Powered by the X1 processor and featuring Triluminos Pro display technology for vivid, accurate colors.",
    features: [
      "55-inch 4K Ultra HD display",
      "X1 4K HDR Processor",
      "Triluminos Pro display",
      "Google TV smart platform",
      "4K X-Reality PRO upscaling",
      "Acoustic Multi-Audio"
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Type": "LED",
      "HDR Support": ["HDR10", "HLG"],
      "Smart TV OS": "Google TV",
      "Audio": "20W output",
      "Connectivity": [
        "HDMI Ports: 4",
        "USB Ports: 2",
        "Wi-Fi: Yes",
        "Bluetooth: Yes"
      ]
    },
    relatedProducts: [166, 131, 104]
  },
  {
    id: 104,
    name: "LG 65″ OLED B4 4K Smart TV",
    price: 23990,
    image: "https://m.media-amazon.com/images/I/91ZYUosdvvL._AC_SL1500_.jpg",
    slug: "lg-65-oled-c2-4k-smart-tv",
    category: "OLED",
    description: "The LG OLED B4 delivers perfect blacks and infinite contrast with self-lit pixels. Experience stunning picture quality and smooth motion with the advanced α9 Gen5 AI Processor.",
    features: [
      "65-inch OLED display",
      "α9 Gen5 AI Processor 4K",
      "Perfect Black Levels",
      "G-SYNC Compatible",
      "Dolby Vision IQ",
      "Dolby Atmos"
    ],
    specifications: {
      "Screen Size": "65 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Type": "OLED",
      "HDR Support": ["Dolby Vision", "HDR10", "HLG"],
      "Smart TV OS": "webOS",
      "Audio": "40W output",
      "Connectivity": [
        "HDMI 2.1 Ports: 4",
        "USB Ports: 3",
        "Wi-Fi: Yes",
        "Bluetooth: Yes"
      ]
    },
    relatedProducts: [166, 102, 105]
  },
  {
    id: 105,
    name: "Hisense 50″ A6 Series 4K UHD Smart TV",
    price: 28900,
    image: "https://m.media-amazon.com/images/I/81UA2kXsW7L._AC_SL1500_.jpg",
    slug: "hisense-50-a6-4k-uhd-smart-tv",
    category: "UHD TV",
    description: "The Hisense A6 Series combines 4K resolution with Dolby Vision HDR and HDR10 to create a clearer, more vibrant picture. This smart TV features built-in Chromecast and voice control capabilities.",
    features: [
      "50-inch 4K UHD display",
      "Dolby Vision HDR",
      "Motion Rate 120",
      "Game Mode Plus",
      "DTS Virtual:X",
      "Voice Remote"
    ],
    specifications: {
      "Screen Size": "50 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Type": "LED",
      "HDR Support": ["Dolby Vision", "HDR10"],
      "Smart TV OS": "Google TV",
      "Audio": "16W output",
      "Connectivity": [
        "HDMI Ports: 4",
        "USB Ports: 2",
        "Wi-Fi: Yes",
        "Bluetooth: Yes"
      ]
    },
    relatedProducts: [104, 106, 107]
  },
  {
    id: 106,
    name: "TCL 43″ P635 4K HDR Google TV",
    price: 27990,
    image: "https://ext.same-assets.com/729254218/2306040691.jpeg",
    slug: "tcl-43-p635-4k-hdr-google-tv",
    category: "UHD TV",
    description: "The TCL P635 series offers 4K HDR viewing with enhanced color and contrast. Featuring Google TV for seamless streaming and entertainment access. Perfect for small to medium-sized rooms.",
    features: [
      "43-inch 4K HDR display",
      "AiPQ Engine",
      "Google Assistant built-in",
      "HDR 10",
      "Dynamic Color Enhancement",
      "Auto Game Mode"
    ],
    specifications: {
      "Screen Size": "43 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Type": "LED",
      "HDR Support": "HDR10",
      "Smart TV OS": "Google TV",
      "Audio": "16W output",
      "Connectivity": [
        "HDMI Ports: 3",
        "USB Ports: 2",
        "Wi-Fi: Yes",
        "Bluetooth: Yes"
      ]
    },
    relatedProducts: [105, 107, 100]
  },
  {
    id: 107,
    name: "Samsung 55″ AU7000 Crystal UHD Smart TV",
    price: 30500,
    image: "https://m.media-amazon.com/images/I/81goTP2PBOL._AC_SL1500_.jpg",
    slug: "samsung-55-au7000-crystal-uhd-smart-tv",
    category: "UHD TV",
    description: "The Samsung AU7000 Crystal UHD TV delivers stunning 4K resolution with pure colors, sharp contrast, and seamless entertainment through Samsung's Smart Hub.",
    features: [
      "55-inch Crystal UHD display",
      "Crystal Processor 4K",
      "PurColor",
      "Motion Xcelerator",
      "Smart Hub",
      "Adaptive Sound"
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Type": "LED",
      "HDR Support": "HDR",
      "Smart TV OS": "Tizen",
      "Audio": "20W output",
      "Connectivity": [
        "HDMI Ports: 3",
        "USB Ports: 2",
        "Wi-Fi: Yes",
        "Bluetooth: Yes"
      ]
    },
    relatedProducts: [106, 100, 102]
  },
  {
    id: 108,
    name: "Samsung 43″ DU7000 Crystal UHD 4K Smart TV (2024)",
    price: 23700,
    image: "https://ext.same-assets.com/729254218/460564587.jpeg",
    slug: "samsung-43-du7000-crystal-uhd-4k-smart-tv-2024",
    category: "UHD TV",
    description: "Experience stunning clarity with the 2024 Samsung 43-inch DU7000 Crystal UHD Smart TV. Powered by the Crystal 4K processor, this TV delivers exceptional picture quality with enhanced contrast and vivid colors. The slim design and smart features make it perfect for modern living spaces.",
    features: [
      "Crystal 4K Processor",
      "HDR10+ Support",
      "AirSlim Design",
      "Q-Symphony Sound",
      "Smart Voice Assistant",
      "Game Mode Pro"
    ],
    specifications: {
      "Screen Size": "43 inches",
      "Resolution": "3840 x 2160 (4K)",
      "Display Technology": "Crystal UHD",
      "HDR": ["HDR10+", "HLG"],
      "Smart Platform": "Tizen 2024",
      "Audio Output": "20W",
      "Connectivity": [
        "HDMI x 3",
        "USB 2.0 x 2",
        "Optical Audio Output",
        "Wireless: Wi-Fi 5, Bluetooth 4.2"
      ]
    },
    relatedProducts: [120, 104, 121]
  },
  {
    id: 120,
    name: "Samsung 50″ 50CU7000 Class Crystal UHD Smart TV 1Y",
    price: 25128,
    image: "https://ext.same-assets.com/729254218/55303650.jpeg",
    slug: "samsung-50-50cu7000-class-crystal-uhd-smart-tv-1y",
    category: "UHD TV",
    description: "The Samsung 50-inch CU7000 Crystal UHD Smart TV delivers breathtaking 4K resolution and vibrant colors through PurColor technology. With its powerful Crystal Processor and smart features, enjoy an immersive viewing experience with enhanced clarity and detail.",
    features: [
      "Crystal 4K Processor",
      "PurColor Technology",
      "Dynamic Crystal Display",
      "Adaptive Sound+",
      "Smart Hub Integration",
      "Multiple Viewing Modes"
    ],
    specifications: {
      "Screen Size": "50 inches",
      "Resolution": "3840 x 2160 (4K)",
      "Display Technology": "Crystal UHD",
      "Processor": "Crystal 4K",
      "Smart Platform": "Tizen",
      "Audio": "20W 2.0CH",
      "Connectivity": [
        "HDMI x 3",
        "USB x 2",
        "Built-in Wi-Fi",
        "Bluetooth 5.0"
      ]
    },
    relatedProducts: [104, 121, 108]
  },
  {
    id: 104,
    name: "Samsung 50DU7000 50″ Crystal UHD 4K Smart TV (2024)",
    price: 27128,
    image: "https://ext.same-assets.com/729254218/55303650.jpeg",
    slug: "samsung-50du7000-50-crystal-uhd-4k-smart-tv-2024",
    category: "UHD TV",
    description: "The 2024 Samsung 50-inch DU7000 brings next-generation Crystal UHD technology to your home. Experience superior 4K resolution, enhanced by Dynamic Crystal Color and powered by the advanced Crystal Processor 4K for stunning picture quality.",
    features: [
      "Dynamic Crystal Color",
      "Crystal Processor 4K",
      "Motion Xcelerator",
      "Object Tracking Sound Lite",
      "Gaming Hub",
      "SmartThings Compatible"
    ],
    specifications: {
      "Screen Size": "50 inches",
      "Resolution": "3840 x 2160 (4K)",
      "Display Technology": "Crystal UHD",
      "HDR": ["HDR10+", "HLG"],
      "Smart Platform": "Tizen 2024",
      "Audio": "20W 2.0CH",
      "Connectivity": [
        "HDMI 2.1 x 3",
        "USB x 2",
        "Wi-Fi 5",
        "Bluetooth 5.0"
      ]
    },
    relatedProducts: [108, 120, 121]
  },
  {
    id: 121,
    name: "Samsung 55″ 55CU7000 Class Crystal UHD Smart TV 1Y",
    price: 30197,
    image: "https://ext.same-assets.com/729254218/894076257.jpeg",
    slug: "samsung-55-55cu7000-class-crystal-uhd-smart-tv-1y",
    category: "UHD TV",
    description: "Elevate your viewing experience with the Samsung 55-inch CU7000 Crystal UHD Smart TV. This premium television combines Crystal UHD technology with smart features for an immersive entertainment experience. The Crystal Processor 4K ensures optimal picture quality across all content.",
    features: [
      "Crystal UHD Display",
      "Crystal Processor 4K",
      "Motion Xcelerator",
      "Adaptive Sound",
      "Smart TV Hub",
      "Multi View Support"
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Resolution": "3840 x 2160 (4K)",
      "Display Technology": "Crystal UHD",
      "HDR": ["HDR10+", "HLG"],
      "Smart Platform": "Tizen",
      "Audio": "20W 2.0CH",
      "Connectivity": [
        "HDMI x 3",
        "USB x 2",
        "Wi-Fi Built-in",
        "Bluetooth 5.0"
      ]
    },
    relatedProducts: [120, 128, 118]
  },
  {
    id: 128,
    name: "Samsung 55″ LS03B The Frame QLED 4K TV With Official Warranty (QA55LS03BA)",
    price: 49999,
    image: "https://ext.same-assets.com/729254218/3692665812.jpeg",
    slug: "samsung-55-ls03b-the-frame-qled-4k-tv-with-official-warranty-qa55ls03ba",
    category: "QLED",
    description: "Transform your living space with Samsung's The Frame LS03B, a revolutionary QLED 4K TV that doubles as a stunning piece of art. With Art Mode and customizable bezels, this TV seamlessly blends into your home decor while delivering exceptional picture quality.",
    features: [
      "Art Mode with Customizable Frame",
      "Quantum Dot Technology",
      "Matte Display",
      "Motion Sensor",
      "Quantum Processor 4K",
      "Customizable Bezels"
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Resolution": "3840 x 2160 (4K)",
      "Display Technology": "QLED",
      "Art Mode": "Yes, with 20W power consumption",
      "Smart Platform": "Tizen",
      "Audio": "40W 2.2CH",
      "Connectivity": [
        "HDMI x 4",
        "USB x 2",
        "One Connect Box",
        "Wi-Fi 6",
        "Bluetooth 5.2"
      ]
    },
    relatedProducts: [118, 121, 104]
  },
  {
    id: 118,
    name: "Samsung 55CU8000 Crystal UHD 4K Smart TV (2023) With Official Warranty",
    price: 31999,
    image: "https://ext.same-assets.com/729254218/3314384397.jpeg",
    slug: "samsung-55cu8000-crystal-uhd-4k-smart-tv-2023-with-official-warranty",
    category: "UHD TV",
    description: "The Samsung 55CU8000 delivers premium 4K entertainment with advanced Crystal UHD technology. Featuring an enhanced Crystal Processor 4K and Object Tracking Sound Lite, this TV provides stunning visuals and immersive audio for an exceptional viewing experience.",
    features: [
      "Crystal Processor 4K",
      "Object Tracking Sound Lite",
      "Motion Xcelerator Turbo",
      "Gaming Hub",
      "Q-Symphony",
      "SmartThings Integration"
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Resolution": "3840 x 2160 (4K)",
      "Display Technology": "Crystal UHD",
      "HDR": ["HDR10+", "HLG"],
      "Smart Platform": "Tizen",
      "Audio": "20W 2.0CH",
      "Connectivity": [
        "HDMI 2.1 x 3",
        "USB x 2",
        "Wi-Fi 5",
        "Bluetooth 5.0"
      ]
    },
    relatedProducts: [128, 121, 120]
  },
  {
    id: 180,
    name: "Sony BRAVIA XR A80L 65″ OLED 4K TV",
    price: 49900,
    image: "https://m.media-amazon.com/images/I/71kmM6BpHhL._AC_SL1500_.jpg",
    slug: "sony-bravia-xr-a80l-65-oled-4k-tv",
    category: "OLED",
    description: "Experience the brilliance of Sony's BRAVIA XR A80L OLED TV. Powered by the Cognitive Processor XR, this TV delivers unprecedented contrast with pure blacks and vibrant colors. The revolutionary OLED technology combined with XR OLED Contrast Pro creates an immersive viewing experience that brings content to life.",
    features: [
      "Cognitive Processor XR",
      "XR OLED Contrast Pro",
      "Acoustic Surface Audio+",
      "BRAVIA Core Calibrated Mode",
      "Google TV with Hands-free Voice Search",
      "Perfect for PlayStation 5"
    ],
    specifications: {
      "Screen Size": "65 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Technology": "OLED",
      "HDR": ["Dolby Vision", "HDR10", "HLG"],
      "Smart Platform": "Google TV",
      "Audio": "50W Acoustic Surface Audio+",
      "Connectivity": [
        "HDMI 2.1 x 4",
        "USB x 3",
        "Wi-Fi 6",
        "Bluetooth 5.2"
      ]
    },
    relatedProducts: [181, 182, 183]
  },
  {
    id: 181,
    name: "LG C3 55″ OLED evo 4K Smart TV",
    price: 30800,
    image: "https://m.media-amazon.com/images/I/71O7wgely5L._AC_SL1500_.jpg",
    slug: "lg-c3-55-oled-evo-4k-smart-tv",
    category: "OLED",
    description: "The LG C3 OLED evo represents the next evolution in OLED technology. With the α9 Gen6 AI Processor 4K and self-lit OLED pixels, this TV delivers perfect blacks and incredible color accuracy. Enhanced by AI Picture Pro and AI Sound Pro, every scene is optimized for stunning clarity.",
    features: [
      "OLED evo Technology",
      "α9 Gen6 AI Processor 4K",
      "Dolby Vision IQ & Dolby Atmos",
      "NVIDIA G-SYNC & FreeSync Premium",
      "webOS 23 with Magic Remote",
      "AI Picture & Sound Pro"
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Technology": "OLED evo",
      "HDR": ["Dolby Vision IQ", "HDR10 Pro", "HLG"],
      "Smart Platform": "webOS 23",
      "Audio": "40W 2.2CH",
      "Connectivity": [
        "HDMI 2.1 x 4",
        "USB x 3",
        "Wi-Fi 6",
        "Bluetooth 5.0"
      ]
    },
    relatedProducts: [180, 184, 185]
  },
  {
    id: 182,
    name: "TCL 65″ QM8 QLED 4K Mini-LED TV",
    price: 41999,
    image: "https://m.media-amazon.com/images/I/91Qeqx9kVDL._AC_SL1500_.jpg",
    slug: "tcl-65-qm8-qled-4k-mini-led-tv",
    category: "QLED",
    description: "TCL's QM8 series combines QLED and Mini-LED technology for exceptional brightness and contrast. With over 2,000 local dimming zones and quantum dot technology, this TV delivers stunning HDR performance and vibrant colors across the entire screen.",
    features: [
      "Mini-LED Backlight Technology",
      "QLED Quantum Dot Display",
      "AiPQ Engine Pro",
      "Game Accelerator 240",
      "HDR ULTRA",
      "Dynamic Contrast"
    ],
    specifications: {
      "Screen Size": "65 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Technology": "QLED + Mini-LED",
      "HDR": ["Dolby Vision IQ", "HDR10+", "HLG"],
      "Smart Platform": "Google TV",
      "Audio": "30W 2.1CH",
      "Connectivity": [
        "HDMI 2.1 x 4",
        "USB x 2",
        "Wi-Fi 6",
        "Bluetooth 5.0"
      ]
    },
    relatedProducts: [181, 183, 184]
  },
  {
    id: 183,
    name: "Hisense U8K 55″ Mini-LED ULED TV",
    price: 42500,
    image: "https://m.media-amazon.com/images/I/812Hcf90ByL._AC_SL1500_.jpg",
    slug: "hisense-u8k-55-mini-led-uled-tv",
    category: "ULED",
    description: "The Hisense U8K combines Mini-LED and ULED technologies for exceptional picture quality. With over 1,000 local dimming zones and peak brightness of 1,500 nits, this TV delivers stunning HDR performance and deep blacks for an immersive viewing experience.",
    features: [
      "Mini-LED + ULED Technology",
      "Quantum Dot Color",
      "Hi-View Engine Pro",
      "144Hz Game Mode PRO",
      "Dolby Vision IQ",
      "FilmMaker Mode"
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Technology": "Mini-LED ULED",
      "HDR": ["Dolby Vision IQ", "HDR10+", "HLG"],
      "Smart Platform": "Google TV",
      "Audio": "40W 2.1.2CH",
      "Connectivity": [
        "HDMI 2.1 x 4",
        "USB x 2",
        "Wi-Fi 6E",
        "Bluetooth 5.2"
      ]
    },
    relatedProducts: [182, 184, 185]
  },
  {
    id: 184,
    name: "Samsung QN90C 50″ Neo QLED 4K TV",
    price: 40600,
    image: "https://m.media-amazon.com/images/I/71+ODv9V5nL._AC_SL1500_.jpg",
    slug: "samsung-qn90c-50-neo-qled-4k-tv",
    category: "Neo QLED",
    description: "Samsung's QN90C Neo QLED TV uses Quantum Matrix Technology Pro with Mini LEDs for precise backlight control. The Neural Quantum Processor 4K optimizes every scene for stunning clarity and contrast, while the Anti-Glare screen ensures clear viewing from any angle.",
    features: [
      "Neo Quantum Processor 4K",
      "Quantum Matrix Technology Pro",
      "Neural Quantum Processor 4K",
      "Object Tracking Sound+",
      "Real Depth Enhancer Pro",
      "Anti-Glare Screen"
    ],
    specifications: {
      "Screen Size": "50 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Technology": "Neo QLED",
      "HDR": ["HDR10+", "HLG"],
      "Smart Platform": "Tizen",
      "Audio": "40W 2.2.2CH",
      "Connectivity": [
        "HDMI 2.1 x 4",
        "USB x 2",
        "Wi-Fi 6",
        "Bluetooth 5.2"
      ]
    },
    relatedProducts: [183, 185, 186]
  },
  {
    id: 185,
    name: "Philips 65″ OLED+908 Ambilight TV",
    price: 12900,
    image: "https://m.media-amazon.com/images/I/71MTX5c6aaL._AC_SL1500_.jpg",
    slug: "philips-65-oled-908-ambilight-tv",
    category: "OLED",
    description: "The Philips OLED+908 combines next-gen OLED EX technology with 4-sided Ambilight for an immersive viewing experience. The P5 AI Perfect Picture Engine delivers exceptional processing power, while the Bowers & Wilkins sound system provides premium audio quality.",
    features: [
      "OLED EX Panel",
      "4-sided Ambilight",
      "P5 AI Perfect Picture Engine",
      "Bowers & Wilkins Sound",
      "Android TV",
      "Premium Design"
    ],
    specifications: {
      "Screen Size": "65 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Technology": "OLED EX",
      "HDR": ["Dolby Vision", "HDR10+", "HLG"],
      "Smart Platform": "Android TV",
      "Audio": "70W 3.1CH",
      "Connectivity": [
        "HDMI 2.1 x 4",
        "USB x 3",
        "Wi-Fi 6",
        "Bluetooth 5.2"
      ]
    },
    relatedProducts: [184, 186, 187]
  },
  {
    id: 186,
    name: "LG 65 class QNE90T LED 4K",
    price: 26500,
    image: "https://m.media-amazon.com/images/I/81V8Lh8fdAL._AC_SL1500_.jpg",
    slug: "sony-x95l-75-mini-led-4k-tv",
    category: "Mini LED",
    description: "The LG 65 class QNE90T LED 4K delivers exceptional brightness and contrast with XR Backlight Master Drive technology. The Cognitive Processor XR ensures lifelike picture quality, while Acoustic Multi-Audio creates precisely matched sound with the action on screen.",
    features: [
      "XR Backlight Master Drive",
      "Cognitive Processor XR",
      "XR Triluminos Pro",
      "Acoustic Multi-Audio",
      "Netflix Adaptive Calibrated Mode",
      "BRAVIA CORE"
    ],
    specifications: {
      "Screen Size": "65 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Technology": "Mini LED",
      "HDR": ["Dolby Vision", "HDR10", "HLG"],
      "Smart Platform": "Google TV",
      "Audio": "60W 2.2CH",
      "Connectivity": [
        "HDMI 2.1 x 4",
        "USB x 3",
        "Wi-Fi 6",
        "Bluetooth 5.2"
      ]
    },
    relatedProducts: [185, 187, 188]
  },
  {
    id: 187,
    name: "LG QNED85 65″ Mini LED TV",
    price: 21700,
    image: "https://m.media-amazon.com/images/I/81UrZcJUvHL._AC_SL1500_.jpg",
    slug: "lg-qned85-65-mini-led-tv",
    category: "QNED",
    description: "LG's QNED85 combines Quantum Dot and NanoCell technologies with Mini LED backlighting for superior color accuracy and contrast. The α7 Gen5 AI Processor 4K delivers enhanced picture and sound quality through advanced AI algorithms.",
    features: [
      "Quantum Dot + NanoCell",
      "α7 Gen5 AI Processor 4K",
      "Precision Dimming Pro+",
      "Game Optimizer",
      "FilmMaker Mode",
      "AI Sound Pro"
    ],
    specifications: {
      "Screen Size": "65 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Technology": "QNED Mini LED",
      "HDR": ["Dolby Vision", "HDR10 Pro", "HLG"],
      "Smart Platform": "webOS 22",
      "Audio": "40W 2.2CH",
      "Connectivity": [
        "HDMI 2.1 x 4",
        "USB x 3",
        "Wi-Fi 6",
        "Bluetooth 5.0"
      ]
    },
    relatedProducts: [186, 188, 189]
  },
  {
    id: 188,
    name: "TCL S955 55″ QLED 4K Google TV",
    price: 41800,
    image: "https://m.media-amazon.com/images/I/81aq4mP3asL._AC_SL1500_.jpg",
    slug: "tcl-s955-85-qled-4k-google-tv",
    category: "QLED",
    description: "The TCL S955 55-inch QLED TV delivers immersive big-screen entertainment with quantum dot technology. Featuring HDR Premium Pro and AiPQ Engine Gen 3, this TV optimizes picture quality for all content while providing a seamless smart TV experience.",
    features: [
      "QLED Technology",
      "AiPQ Engine Gen 3",
      "Motion Rate 480",
      "HDR Premium Pro",
      "Game Master Pro",
      "Hands-free Voice Control"
    ],
    specifications: {
      "Screen Size": "85 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Technology": "QLED",
      "HDR": ["Dolby Vision", "HDR10+", "HLG"],
      "Smart Platform": "Google TV",
      "Audio": "30W 2.1CH",
      "Connectivity": [
        "HDMI 2.1 x 4",
        "USB x 2",
        "Wi-Fi 6",
        "Bluetooth 5.0"
      ]
    },
    relatedProducts: [187, 189, 180]
  },
  {
    id: 189,
    name: "Samsung QN900C 65″ Neo QLED 8K TV",
    price: 42500,
    image: "https://m.media-amazon.com/images/I/81wCL-pYp+L._AC_SL1500_.jpg",
    slug: "samsung-qn900c-65-neo-qled-8k-tv",
    category: "Neo QLED",
    description: "Experience the future of television with Samsung's QN900C Neo QLED 8K TV. The Neural Quantum Processor 4K with AI upscaling delivers stunning clarity, while the Infinity Screen design provides an immersive viewing experience with virtually no borders.",
    features: [
      "Neural Quantum Processor 8K",
      "Quantum Matrix Technology Pro",
      "Infinity Screen Design",
      "Real Depth Enhancer Pro",
      "Object Tracking Sound Pro",
      "8K AI Upscaling"
    ],
    specifications: {
      "Screen Size": "65 inches",
      "Resolution": "4K (3840 x 2160)",
      "Display Technology": "Neo QLED",
      "HDR": ["HDR10+", "HLG"],
      "Smart Platform": "Tizen",
      "Audio": "90W 6.2.4CH",
      "Connectivity": [
        "HDMI 2.1 x 4",
        "USB x 3",
        "Wi-Fi 6E",
        "Bluetooth 5.2"
      ]
    },
    relatedProducts: [188, 180, 181]
  },
  {
    id: 190,
    name: "LG 27GS93QE 27 Ultragear OLED",
    price: 50000,
    image: "https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg",
    slug: "lg-g3-77-oled-evo-gallery-edition",
    category: "OLED",
    description: "QHD 1440p 240Hz 0.03ms DisplayHDR True Black 400 AMD FreeSync Premium Pro NVIDIA G-Sync HDMI 2.1 DisplayPort.",
    features: [
      "100K+ customers rate items from this brand highly",
      "2560x1440",
      "27GS93QE-B.AUS",
      "Infinite Contrast",
      "Up to 240Hz & 0.03ms for Outrageously Fast OLED Gaming",
    ],
    specifications: {
      "Screen Size": "27 inches",
      "Resolution": "2K UHD (2560 x 1440)",
      "Dynamic Action Sync": "Respond to action as it happens with reduced input lag.",
      "HDR": ["Dolby Vision IQ", "HDR10 Pro", "HLG"],
      "Connectivity": [
        "HDMI 2.1 x 4",
        "USB x 3",
        "Wi-Fi 6",
        "Bluetooth 5.2"
      ]
    },
    relatedProducts: [191, 192, 193]
  },
  {
    id: 191,
    name: "VIZIO 40 Full HD 1080p Smart TV",
    price: 10400,
    image: "https://m.media-amazon.com/images/I/81R3dLptKcL._AC_SL1500_.jpg",
    slug: "vizio-40-full-hd-1080p-smart-tv",
    category: "Smart TV",
    description: "The VIZIO 40-inch Full HD Smart TV delivers crystal-clear 1080p resolution with VIZIO's V-Gaming Engine for smooth gaming performance. Perfect for bedrooms or small spaces, this TV offers smart features and built-in streaming apps for easy entertainment access.",
    features: [
      "40-inch Full HD 1080p display",
      "V-Gaming Engine for low input lag",
      "SmartCast with built-in streaming apps",
      "HDMI 2.0 ports for gaming",
      "VIZIO IQ Picture Processor",
      "VIZIO IQ Audio"
    ],
    specifications: {
      "Screen Size": "40 inches",
      "Resolution": "Full HD (1920 x 1080)",
      "Display Technology": "LED",
      "Smart Platform": "SmartCast",
      "Audio": "16W 2.0CH",
      "Connectivity": [
        "HDMI 2.0 x 2",
        "USB x 1",
        "Wi-Fi: Yes",
        "Bluetooth: Yes"
      ]
    },
    relatedProducts: [190, 192, 193]
  },
  {
    id: 192,
    name: "Samsung DU7200 50″ Neo QLED 4K TV",
    price: 23455,
    image: "https://m.media-amazon.com/images/I/91d-P7e6lLL._AC_SL1500_.jpg",
    slug: "samsung-qn95c-65-neo-qled-4k-tv",
    category: "Neo QLED",
    description: "The Samsung DU7200 represents the evolution of Neo QLED technology, featuring an advanced Mini LED backlight system and Neural Quantum Processor 4K. With its slim One Connect Box design and Anti-Reflection screen, this TV delivers exceptional picture quality in any lighting condition.",
    features: [
      "Neural Quantum Processor 4K",
      "Quantum Matrix Technology",
      "One Connect Box",
      "Anti-Reflection Screen",
      "Object Tracking Sound+",
      "Real Depth Enhancer Pro"
    ],
    specifications: {
      "Screen Size": "65 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Technology": "Neo QLED",
      "HDR": ["HDR10+", "HLG"],
      "Smart Platform": "Tizen",
      "Audio": "70W 4.2.2CH",
      "Connectivity": [
        "HDMI 2.1 x 4",
        "USB x 3",
        "Wi-Fi 6",
        "Bluetooth 5.2"
      ]
    },
    relatedProducts: [191, 193, 194]
  },
  {
    id: 193,
    name: "TCL Q7 75″ QLED 4K Smart TV",
    price: 41900,
    image: "https://m.media-amazon.com/images/I/81BcpIFsmPL._AC_SL1500_.jpg",
    slug: "tcl-q7-75-qled-4k-smart-tv",
    category: "QLED",
    description: "The TCL Q7 series brings premium QLED technology to a larger screen size, offering exceptional color volume and brightness. With Full Array Local Dimming Pro and Game Accelerator 120, this TV delivers stunning picture quality for both movies and gaming.",
    features: [
      "QLED Color Technology",
      "Full Array Local Dimming Pro",
      "Game Accelerator 120",
      "HDR 10+ Gaming",
      "AI Picture Quality",
      "Dynamic HDR"
    ],
    specifications: {
      "Screen Size": "75 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Technology": "QLED",
      "HDR": ["Dolby Vision", "HDR10+", "HLG"],
      "Smart Platform": "Google TV",
      "Audio": "30W 2.1CH",
      "Connectivity": [
        "HDMI 2.1 x 4",
        "USB x 2",
        "Wi-Fi 6",
        "Bluetooth 5.0"
      ]
    },
    relatedProducts: [192, 194, 195]
  },
  {
    id: 194,
    name: "Hisense 55 Class QD7 Mini-LED 4K UHD Smart TV",
    price: 42723,
    image: "https://m.media-amazon.com/images/I/81tZlj67kkL._SL1500_.jpg",
    slug: "hisense-55-class-qd7-mini-led-4k-uhd-smart-tv",
    category: "Mini-LED 4K UHD",
    description: "The Hisense 55 Class QD7 combines Mini-LED technology with Quantum Dot color for exceptional picture quality. This 4K UHD Smart TV delivers stunning brightness and contrast with precise local dimming, while the Game Mode Plus ensures smooth gaming performance. Perfect for both entertainment and gaming enthusiasts.",
    features: [
      "Mini-LED Backlight Technology",
      "Quantum Dot Color Technology",
      "Full Array Local Dimming",
      "Game Mode Plus with 120Hz",
      "Dolby Vision & Dolby Atmos",
      "AI Picture Optimization"
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Technology": "Mini-LED with Quantum Dot",
      "HDR": ["Dolby Vision", "HDR10+", "HLG"],
      "Smart Platform": "Google TV",
      "Audio": "24W 2.0CH",
      "Connectivity": [
        "HDMI 2.1 x 4",
        "USB x 2",
        "Wi-Fi 6",
        "Bluetooth 5.0"
      ]
    },
    relatedProducts: [193, 195, 196]
  },
  {
    id: 195,
    name: "VIZIO 24 D Series Full HD Smart TV",
    price: 10600,
    image: "https://m.media-amazon.com/images/I/71GUiamltWL._AC_SL1500_.jpg",
    slug: "vizio-24-d-series-full-hd-smart-tv",
    category: "Smart TV",
    description: "The VIZIO 24 D Series Full HD Smart TV is perfect for small spaces like bedrooms, kitchens, or dorm rooms. This compact TV delivers crystal-clear 1080p resolution with VIZIO's IQ Picture Processor for enhanced color and contrast. With built-in streaming apps and smart features, it offers easy access to your favorite content.",
    features: [
      "24-inch Full HD 1080p display",
      "VIZIO IQ Picture Processor",
      "VIZIO IQ Audio",
      "SmartCast with built-in streaming apps",
      "VIZIO WatchFree+",
      "Slim design fits anywhere"
    ],
    specifications: {
      "Screen Size": "24 inches",
      "Resolution": "Full HD (1920 x 1080)",
      "Display Technology": "LED",
      "Smart Platform": "SmartCast",
      "Audio": "10W 2.0CH",
      "Connectivity": [
        "HDMI x 2",
        "USB x 1",
        "Wi-Fi: Yes",
        "Bluetooth: Yes"
      ]
    },
    relatedProducts: [194, 196, 190]
  },
  {
    id: 196,
    name: "Samsung Electronics UN32N5300AFXZA 32'' 1080p Smart LED TV",
    price: 14799,
    image: "https://m.media-amazon.com/images/I/71nJIpQzPDL._AC_SL1500_.jpg",
    slug: "samsung-un32n5300afxza-32-1080p-smart-led-tv",
    category: "Smart TV",
    description: "The Samsung UN32N5300AFXZA is a compact 32-inch Smart LED TV perfect for small spaces. With Full HD 1080p resolution and Samsung's Crystal Display technology, it delivers clear, vibrant images. The built-in Smart Hub provides easy access to streaming apps and content, while the slim design fits seamlessly into any room.",
    features: [
      "32-inch Full HD 1080p display",
      "Crystal Display technology",
      "Smart Hub with streaming apps",
      "PurColor technology",
      "Slim design",
      "Built-in Wi-Fi"
    ],
    specifications: {
      "Screen Size": "32 inches",
      "Resolution": "Full HD (1920 x 1080)",
      "Display Technology": "LED",
      "Smart Platform": "Samsung Smart Hub",
      "Audio": "20W 2.0CH",
      "Connectivity": [
        "HDMI x 2",
        "USB x 1",
        "Wi-Fi: Yes",
        "Bluetooth: Yes"
      ]
    },
    relatedProducts: [195, 190, 191]
  }
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
