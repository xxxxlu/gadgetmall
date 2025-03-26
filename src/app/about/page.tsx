import Image from "next/image";
import { CheckCircle } from "lucide-react";
// import StatsSection from "@/components/StatsSection";

export default function AboutPage() {
  return (
    <main>

      {/* Hero Banner */}
      <section className="py-20 relative">
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="text-black text-sm uppercase">A few words about us</span>
            <h1 className="text-4xl md:text-5xl font-comfortaa font-bold text-black mt-4 mb-6">
              Endless Entertainment
            </h1>
            <p className="text-black/90 mb-8">
              Television is more than just a screen—it’s a gateway to stories, emotions, and experiences. We bring you the latest updates, reviews, and insights on everything TV, from classic favorites to the hottest new releases.

              Stay informed with expert recommendations, in-depth analysis, and exclusive features on shows, networks, and streaming platforms. Whether you’re a casual viewer or a dedicated binge-watcher, we’ve got something for everyone.

            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <p className="text-white">Premium Apple products, seamless experience</p>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <p className="text-white">Bringing you the best of Apple, effortlessly</p>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <p className="text-white">Quality Apple products, trusted service</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-20 top-20 max-w-md lg:max-w-xl hidden md:block">
          <Image
            src="https://thetvhome.com/wp-content/uploads/2025/03/freepik__expand__30497.png"
            alt="Entertainment"
            width={500}
            height={400}
            className="rounded-md mx-auto"
          />
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://thetvhome.com/wp-content/uploads/2025/03/freepik__expand__23475.png"
                alt="Discover the Best in TV"
                width={500}
                height={400}
                className="rounded-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-comfortaa font-bold text-primary mb-6">
                Discover the Best in TV
              </h2>
              <p className="text-gray-600 mb-6">
                Bringing you the latest in television entertainment. From cutting-edge technology to timeless classics, we help you find the perfect TV for your viewing experience.
              </p>
              <p className="text-gray-600 mb-6">
                Explore top brands, expert reviews, and exclusive deals—all in one place.
              </p>
              <p className="text-gray-600 mb-6">
                since 1990
              </p>
            </div>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-comfortaa font-bold text-primary mb-4">
                Experience Next-Level Viewing
                </h3>
                <p className="text-gray-600 mb-4">
                Upgrade your entertainment with the latest in TV technology. From stunning 4K resolution to immersive sound, find the perfect screen to elevate your home viewing experience.
                </p>
                <p className="text-gray-600">
                Discover top-rated models, expert reviews, and exclusive offers—all in one place.
                </p>
              </div>
              <div>
              <Image
                src="https://ext.same-assets.com/729254218/2306040691.jpeg"
                alt="Discover the Best in TV"
                width={500}
                height={400}
                className="rounded-md mx-auto"
              />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
