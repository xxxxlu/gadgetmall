"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Eye } from "lucide-react";
import { useCart } from "@/context/cart-context";

// Sample product data
const products = [
  {
    id: 166,
    name: "65″ C655 QLED Pro TV – Local Dimming",
    price: 47900,
    image: "https://ext.same-assets.com/729254218/2306040691.jpeg",
    slug: "65-c655-qled-pro-tv-local-dimming",
  },
  {
    id: 131,
    name: "75″ V6C UHD Google TV",
    price: 46890,
    image: "https://ext.same-assets.com/729254218/4225088003.jpeg",
    slug: "75-v6c-uhd-google-tv",
  },
  {
    id: 100,
    name: "Samsung 32″ T5300 HD Smart TV (2020)",
    price: 50000,
    image: "https://ext.same-assets.com/729254218/3610930784.jpeg",
    slug: "samsung-32-t5300-hd-smart-tv-2020",
  },
  {
    id: 102,
    name: "Sony 55″ X80K 4K Ultra HD Smart TV",
    price: 45670,
    image: "https://m.media-amazon.com/images/I/81bk1NW7lKL._AC_SL1500_.jpg",
    slug: "sony-55-x80k-4k-uhd-smart-tv",
  },
  {
    id: 104,
    name: "LG 65″ OLED C2 4K Smart TV",
    price: 43990,
    image: "https://m.media-amazon.com/images/I/91ZYUosdvvL._AC_SL1500_.jpg",
    slug: "lg-65-oled-c2-4k-smart-tv",
  },
  {
    id: 105,
    name: "Hisense 50″ A6 Series 4K UHD Smart TV",
    price: 38900,
    image: "https://m.media-amazon.com/images/I/81UA2kXsW7L._AC_SL1500_.jpg",
    slug: "hisense-50-a6-4k-uhd-smart-tv",
  },
  {
    id: 106,
    name: "TCL 43″ P635 4K HDR Google TV",
    price: 39990,
    image: "https://m.media-amazon.com/images/I/91opBMsGPfL._AC_SL1500_.jpg",
    slug: "tcl-43-p635-4k-hdr-google-tv",
  },
  {
    id: 107,
    name: "Samsung 55″ AU7000 Crystal UHD Smart TV",
    price: 47500,
    image: "https://m.media-amazon.com/images/I/81goTP2PBOL._AC_SL1500_.jpg",
    slug: "samsung-55-au7000-crystal-uhd-smart-tv",
  },
  {
    id: 108,
    name: "Samsung 43″ DU7000 Crystal UHD 4K Smart TV (2024)",
    price: 45700,
    image: "https://ext.same-assets.com/729254218/460564587.jpeg",
    slug: "samsung-43-du7000-crystal-uhd-4k-smart-tv-2024",
  },
  {
    id: 120,
    name: "Samsung 50″ 50CU7000 Class Crystal UHD Smart TV 1Y",
    price: 168999,
    image: "https://ext.same-assets.com/729254218/55303650.jpeg",
    slug: "samsung-50-50cu7000-class-crystal-uhd-smart-tv-1y",
  },
  {
    id: 104,
    name: "Samsung 50DU7000 50″ Crystal UHD 4K Smart TV (2024)",
    price: 130000,
    image: "https://ext.same-assets.com/729254218/55303650.jpeg",
    slug: "samsung-50du7000-50-crystal-uhd-4k-smart-tv-2024",
  },
  {
    id: 121,
    name: "Samsung 55″ 55CU7000 Class Crystal UHD Smart TV 1Y",
    price: 194999,
    image: "https://ext.same-assets.com/729254218/894076257.jpeg",
    slug: "samsung-55-55cu7000-class-crystal-uhd-smart-tv-1y",
  },
  {
    id: 128,
    name: "Samsung 55″ LS03B The Frame QLED 4K TV With Official Warranty (QA55LS03BA)",
    price: 344999,
    image: "https://ext.same-assets.com/729254218/3692665812.jpeg",
    slug: "samsung-55-ls03b-the-frame-qled-4k-tv-with-official-warranty-qa55ls03ba",
  },
  {
    id: 118,
    name: "Samsung 55CU8000 Crystal UHD 4K Smart TV (2023) With Official Warranty",
    price: 219999,
    image: "https://ext.same-assets.com/729254218/3314384397.jpeg",
    slug: "samsung-55cu8000-crystal-uhd-4k-smart-tv-2023-with-official-warranty",
  },
  {
    id: 180,
    name: "Sony BRAVIA XR A80L 65″ OLED 4K TV",
    price: 49900,
    image: "https://m.media-amazon.com/images/I/71kmM6BpHhL._AC_SL1500_.jpg",
    slug: "sony-bravia-xr-a80l-65-oled-4k-tv",
  },
  {
    id: 181,
    name: "LG C3 55″ OLED evo 4K Smart TV",
    price: 45800,
    image: "https://m.media-amazon.com/images/I/71O7wgely5L._AC_SL1500_.jpg",
    slug: "lg-c3-55-oled-evo-4k-smart-tv",
  },
  {
    id: 182,
    name: "TCL 65″ QM8 QLED 4K Mini-LED TV",
    price: 42999,
    image: "https://m.media-amazon.com/images/I/91Qeqx9kVDL._AC_SL1500_.jpg",
    slug: "tcl-65-qm8-qled-4k-mini-led-tv",
  },
  {
    id: 183,
    name: "Hisense U8K 55″ Mini-LED ULED TV",
    price: 41500,
    image: "https://m.media-amazon.com/images/I/812Hcf90ByL._AC_SL1500_.jpg",
    slug: "hisense-u8k-55-mini-led-uled-tv",
  },
  {
    id: 184,
    name: "Samsung QN90C 50″ Neo QLED 4K TV",
    price: 47600,
    image: "https://m.media-amazon.com/images/I/71+ODv9V5nL._AC_SL1500_.jpg",
    slug: "samsung-qn90c-50-neo-qled-4k-tv",
  },
  {
    id: 185,
    name: "Philips 65″ OLED+908 Ambilight TV",
    price: 48900,
    image: "https://m.media-amazon.com/images/I/71MTX5c6aaL._AC_SL1500_.jpg",
    slug: "philips-65-oled-908-ambilight-tv",
  },
  {
    id: 186,
    name: "Sony X95L 75″ Mini LED 4K TV",
    price: 49500,
    image: "https://m.media-amazon.com/images/I/71I8PuXGSCL._AC_SL1500_.jpg",
    slug: "sony-x95l-75-mini-led-4k-tv",
  },
  {
    id: 187,
    name: "LG QNED85 65″ Mini LED TV",
    price: 44700,
    image: "https://m.media-amazon.com/images/I/81UrZcJUvHL._AC_SL1500_.jpg",
    slug: "lg-qned85-65-mini-led-tv",
  },
  {
    id: 188,
    name: "TCL S955 85″ QLED 4K Google TV",
    price: 46800,
    image: "https://m.media-amazon.com/images/I/81aq4mP3asL._AC_SL1500_.jpg",
    slug: "tcl-s955-85-qled-4k-google-tv",
  },
  {
    id: 189,
    name: "Samsung QN900C 65″ Neo QLED 8K TV",
    price: 49900,
    image: "https://m.media-amazon.com/images/I/81wCL-pYp+L._AC_SL1500_.jpg",
    slug: "samsung-qn900c-65-neo-qled-8k-tv",
  },
  {
    id: 190,
    name: "LG G3 77″ OLED evo Gallery Edition",
    price: 48900,
    image: "https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg",
    slug: "lg-g3-77-oled-evo-gallery-edition",
  },
  {
    id: 191,
    name: "Sony A95L 65″ QD-OLED 4K TV",
    price: 47800,
    image: "https://m.media-amazon.com/images/I/81G+fnlLWcL._AC_SL1500_.jpg",
    slug: "sony-a95l-65-qd-oled-4k-tv",
  },
  {
    id: 192,
    name: "Samsung QN95C 65″ Neo QLED 4K TV",
    price: 46500,
    image: "https://m.media-amazon.com/images/I/91d-P7e6lLL._AC_SL1500_.jpg",
    slug: "samsung-qn95c-65-neo-qled-4k-tv",
  },
  {
    id: 193,
    name: "TCL Q7 75″ QLED 4K Smart TV",
    price: 43900,
    image: "https://m.media-amazon.com/images/I/81BcpIFsmPL._AC_SL1500_.jpg",
    slug: "tcl-q7-75-qled-4k-smart-tv",
  },
  {
    id: 194,
    name: "Hisense C2 4K UHD",
    price: 49500,
    image: "https://m.media-amazon.com/images/I/71EFjfNdesL._AC_SL1500_.jpg",
    slug: "hisense-l9h-100-laser-tv",
  },
  {
    id: 195,
    name: "Philips 77″ OLED+937 Ambilight TV",
    price: 48700,
    image: "https://m.media-amazon.com/images/I/71w0poJUwEL._AC_SL1500_.jpg",
    slug: "philips-77-oled-937-ambilight-tv",
  },
  {
    id: 196,
    name: "Sony X90L 85″ Full Array LED TV",
    price: 47200,
    image: "https://m.media-amazon.com/images/I/71nJIpQzPDL._AC_SL1500_.jpg",
    slug: "sony-x90l-85-full-array-led-tv",
  }
];

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
}

const ProductGrid = () => {
  const { addItem } = useCart();

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <CardContent className="p-0">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex space-x-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                  <Button
                    asChild
                    size="icon"
                    variant="secondary"
                    className="rounded-full"
                  >
                    <Link href={`/product/${product.slug}`}>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4 text-center">
              <Link href={`/product/${product.slug}`} className="hover:text-gray-700">
                <h3 className="font-medium mb-2 text-lg line-clamp-2">{product.name}</h3>
              </Link>
              <p className="text-lg font-bold">
                Rs.{(product.price).toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
