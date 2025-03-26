"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ViewingExperience = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">The Ultimate Viewing Experience</h2>
            <p className="mb-4 text-gray-700">
              Upgrade your entertainment with cutting-edge display technology. From vibrant colors to
              immersive sound, enjoy a cinematic experience in the comfort of your home.
            </p>
            <p className="mb-6">
              Discover the latest in <strong>Smart TVs, 4K Ultra HD, and OLED innovation</strong>
              —built for those who demand the best.
            </p>
            <Button asChild className="bg-black hover:bg-gray-800 text-white">
              <Link href="/shop">Shop now</Link>
            </Button>
          </div>

          <div>
            <div className="relative h-80 md:h-96 w-full">
              <Image
                src="https://thetvhome.com/wp-content/uploads/2025/03/freepik__a-television-on-a-white-cabinet-with-an-abstract-i__14093.jpeg"
                alt="Ultimate Viewing Experience"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewingExperience;
