"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const router = useRouter();
  const [heroSearch, setHeroSearch] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  function onHeroSearch(e: FormEvent) {
    e.preventDefault();
    const q = heroSearch.trim();
    router.push(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
  }

  const featuredParts = [
    {
      name: "Garrett GTX3584RS Turbo",
      price: "$1,299.99",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80",
      description: "High-performance ball bearing turbocharger for maximum power gains",
    },
    {
      name: "HKS Hi-Power Exhaust",
      price: "$899.99",
      image:
        "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=900&q=80",
      description: "Full titanium exhaust system with aggressive sound",
    },
    {
      name: "KW Variant 3 Coilovers",
      price: "$2,199.99",
      image:
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=80",
      description: "Adjustable suspension system for track and street",
    },
    {
      name: "AEM Infinity ECU",
      price: "$1,599.99",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      description: "Standalone engine management system with advanced tuning",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredParts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredParts.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredParts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredParts.length) % featuredParts.length);
  };

  return (
    <div className="min-h-screen bg-[var(--background-color)]">
      {/* Hero Section — full viewport minus navbar so next band sits below the fold */}
      <section className="relative min-h-[calc(100dvh-4rem)] bg-[var(--primary-color)] border-b-2 border-black flex flex-col justify-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex flex-col lg:flex-row items-center gap-10 lg:min-h-[calc(100dvh-4rem)]">
          <div className="max-w-2xl w-full">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black [text-shadow:3px_3px_0px_#FFFFFF]">
              JUNKYARD CAR PARTS
            </h1>
            <p className="text-2xl mb-6 text-black [text-shadow:1px_1px_0px_#FFFFFF]">
              Your Ultimate Source for Custom &amp; Aftermarket Parts!
            </p>
            <p className="text-lg mb-3 text-black [text-shadow:1px_1px_0px_#FFFFFF]">
              Parts sourced from trusted suppliers across the U.S. and worldwide.
            </p>
            <p className="text-lg mb-3 text-black [text-shadow:1px_1px_0px_#FFFFFF]">
              We leverage Copart auctions where permitted to deliver the best deals.
            </p>
            <p className="text-lg mb-8 text-black [text-shadow:1px_1px_0px_#FFFFFF]">
              Pay with Bitcoin and book bonded, verified local mechanics when you need
              safe, professional installation.
            </p>
            <form
              onSubmit={onHeroSearch}
              className="flex flex-col sm:flex-row gap-3 max-w-xl"
              role="search"
              aria-label="Search parts catalog"
            >
              <label htmlFor="hero-search" className="sr-only">
                Search parts
              </label>
              <input
                id="hero-search"
                type="search"
                value={heroSearch}
                onChange={(e) => setHeroSearch(e.target.value)}
                placeholder="Search parts, brands, categories…"
                className="flex-1 rounded-md border-2 border-black px-4 py-3 text-lg text-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-2 focus:ring-black/30"
                autoComplete="off"
              />
              <button
                type="submit"
                className="bg-[var(--accent-color)] hover:bg-[var(--secondary-color)] text-black px-8 py-3 rounded-md text-lg font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors"
              >
                Search
              </button>
            </form>
            <p className="mt-4 text-sm text-black/80 [text-shadow:1px_1px_0px_#FFFFFF]">
              <Link
                href="/products"
                className="underline font-semibold hover:text-black"
              >
                View all parts
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-[500px] lg:ml-auto shrink-0">
            <div className="bg-white/90 p-6 rounded-lg shadow-lg group">
              <h3 className="text-2xl font-bold mb-2 text-center text-black">
                FEATURED PARTS
              </h3>
              <p className="text-sm text-center text-gray-800 mb-6 px-2">
                Spotlight listings from our global auto parts marketplace—verified
                suppliers and regulated Copart participation where available.
              </p>
              <div className="relative">
                <div className="overflow-hidden rounded-lg">
                  <div
                    className="relative flex transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {featuredParts.map((part, index) => (
                      <div key={index} className="w-full flex-shrink-0 group">
                        <div className="relative h-[min(400px,50vh)] w-full overflow-hidden">
                          <Image
                            src={part.image}
                            alt={part.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width:1024px)100vw,500px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              <h4 className="text-2xl font-bold text-white mb-3">
                                {part.name}
                              </h4>
                              <p className="text-white/90 text-base mb-4">
                                {part.description}
                              </p>
                              <div className="text-[var(--accent-color)] font-bold text-xl">
                                {part.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 z-10 opacity-0 group-hover:opacity-100"
                  aria-label="Previous featured part"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 z-10 opacity-0 group-hover:opacity-100"
                  aria-label="Next featured part"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {featuredParts.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        currentSlide === index ? "bg-white scale-125" : "bg-white/30"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Equity Group — vehicle shopping */}
      <section className="py-12 bg-gradient-to-r from-black/90 to-black/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-full md:w-[400px] h-[240px] rounded-lg overflow-hidden flex-shrink-0 border-2 border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=900&q=80"
                alt="New and pre-owned vehicles at an Auto Equity Group affiliated dealership lot"
                fill
                className="object-cover"
                sizes="(max-width:768px)100vw,400px"
                priority={false}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                Shop your next vehicle with Auto Equity Group
              </h3>
              <p className="text-white/80 text-base mb-4">
                Junkyard Car Parts sits alongside Auto Equity Group&apos;s retail and
                remarketing footprint—so you are not only sourcing parts here, you can
                shop cars, trucks, and SUVs through the same ecosystem of trusted
                inventory, transparent pricing, and finance-friendly workflows AEG is
                known for.
              </p>
              <p className="text-white/80 text-base mb-4">
                Whether you need a daily driver, a work truck, or something special to
                match the build in your garage, start with AEG-backed selection and let
                our teams help you land the right vehicle before you bolt on upgrades from
                this catalog.
              </p>
              <Link
                href="/products"
                className="inline-block text-[var(--accent-color)] text-base font-bold hover:text-white transition-colors"
              >
                Find parts for your vehicle →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-[var(--primary-color)] border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="retro-title">SHOP BY CATEGORY</h2>
          <p className="text-center text-black/80 max-w-3xl mx-auto mb-10 text-base">
            Browse a global auto parts marketplace built on regulated sourcing:
            Copart auction parts where permitted, clear condition notes, and suppliers
            screened for compliance. Crypto car parts payments and bonded mechanic
            installation options are available at checkout on eligible orders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ENGINE PARTS",
                description: "Power up your ride!",
                image:
                  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=640&h=384&q=80",
                xp: "1000 XP",
                isNew: true,
              },
              {
                title: "EXTERIOR PARTS",
                description: "Make it look mean!",
                image:
                  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=640&h=384&q=80",
                xp: "800 XP",
                isNew: true,
              },
              {
                title: "INTERIOR PARTS",
                description: "Level up your interior!",
                image:
                  "https://images.unsplash.com/photo-1616423645488-daf7c3a0b8dd?auto=format&fit=crop&w=640&h=384&q=80",
                xp: "600 XP",
                isNew: true,
              },
              {
                title: "SUSPENSION",
                description: "Ride like a pro!",
                image:
                  "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=640&h=384&q=80",
                xp: "900 XP",
                isNew: true,
              },
              {
                title: "BRAKES",
                description: "Stop on a dime!",
                image:
                  "https://images.unsplash.com/photo-1487754180451-c456f29a5e53?auto=format&fit=crop&w=640&h=384&q=80",
                xp: "750 XP",
                isNew: true,
              },
              {
                title: "LIGHTING",
                description: "Light up the night!",
                image:
                  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=640&h=384&q=80",
                xp: "500 XP",
                isNew: true,
              },
              {
                title: "EXHAUST",
                description: "Sound like a beast!",
                image:
                  "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=640&h=384&q=80",
                xp: "850 XP",
                isNew: true,
              },
              {
                title: "WHEELS & TIRES",
                description: "Roll in style!",
                image:
                  "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=640&h=384&q=80",
                xp: "700 XP",
                isNew: true,
              },
              {
                title: "ELECTRONICS",
                description: "Tech up your ride!",
                image:
                  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=640&h=384&q=80",
                xp: "650 XP",
                isNew: true,
              },
            ].map((category) => (
              <div
                key={category.title}
                className="retro-card group relative overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.description}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px)100vw,33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 [text-shadow:1px_1px_0px_#000000]">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="bg-[var(--accent-color)] text-white px-3 py-1 rounded-md">
                      {category.xp}
                    </div>
                    {category.isNew && (
                      <div className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                        NEW!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto Equity Group */}
      <section className="py-12 bg-gradient-to-r from-black/90 to-black/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-full md:w-[400px] h-[225px] rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Auto Equity Group — corporate stewardship of Junkyard Car Parts"
                fill
                className="object-cover"
                sizes="(max-width:768px)100vw,400px"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                Owned &amp; backed by Auto Equity Group (AEG)
              </h3>
              <p className="text-white/80 text-base mb-4">
                Junkyard Car Parts operates under the ownership of{" "}
                <span className="text-white font-semibold">Auto Equity Group</span>, a
                holding company focused on automotive retail, remarketing, and digital
                commerce infrastructure. AEG invests in compliance-forward marketplaces,
                verified supply chains, and the technology that connects buyers to real
                inventory—not just listings.
              </p>
              <p className="text-white/80 text-base mb-4">
                That relationship means clearer sourcing standards, disciplined
                operational support, and a long-term commitment to the mechanics,
                dealers, and enthusiasts who rely on this platform every day.
              </p>
              <Link
                href="/products"
                className="inline-block text-[var(--accent-color)] text-base font-bold hover:text-white transition-colors"
              >
                Explore inventory →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
