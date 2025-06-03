"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Leaf,
  Shield,
  Settings,
  Calendar,
  CheckCircle,
  RotateCcw,
  Sparkles,
  Heart,
  Users,
} from "lucide-react";

// Highlight services data (from services page)
const highlightServices = [
  {
    id: 1,
    name: "Deep Tissue Massage",
    icon: "💪",
    price: "£39",
  },
  {
    id: 2,
    name: "Swedish Massage",
    icon: "🌿",
    price: "£39",
  },
  {
    id: 3,
    name: "Aromatherapy Massage",
    icon: "🌸",
    price: "£39",
  },
  {
    id: 4,
    name: "Sport Massage",
    icon: "🏃‍♂️",
    price: "£39",
  },
];

// Gallery images (placeholders - you can replace with actual images)
const galleryImages = [
  {
    id: 1,
    src: "/frontdoor.jpeg",
    alt: "Studio front door and entrance",
    title: "Studio Entrance",
  },
  {
    id: 2,
    src: "/frontlocation.jpeg",
    alt: "Studio location exterior view",
    title: "Exterior Location",
  },
  {
    id: 3,
    src: "/entrance.jpeg",
    alt: "entrance gate",
    title: "Entrance ",
  },
  {
    id: 4,
    src: "/sofa.jpeg",
    alt: "Comfortable sofa and lounge",
    title: "Lounge & Comfort",
  },
  {
    id: 5,
    src: "/bed.jpeg",
    alt: "Massage bed and treatment room",
    title: "Treatment Room",
  },
];

// Key features data
const keyFeatures = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "Certified Therapists",
    description: "Years of experience with professional certifications",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Organic Oils & Products",
    description: "Premium, natural products for the best experience",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Private, Serene Rooms",
    description: "Peaceful, comfortable spaces for complete relaxation",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Customizable Sessions",
    description: "Duration, pressure, and focus areas tailored to you",
    color: "from-orange-500 to-red-500",
  },
];

// Booking features
const bookingFeatures = [
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Real-time Availability",
    description: "See available slots instantly",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Instant Confirmations",
    description: "Get immediate booking confirmation",
  },
  {
    icon: <RotateCcw className="h-6 w-6" />,
    title: "Flexible Rescheduling",
    description: "Easy to change your appointment",
  },
];

// Gallery component
function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <div className="relative w-full aspect-[3/2] md:aspect-[6/4] rounded-2xl overflow-hidden shadow-2xl">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {galleryImages.map((image) => (
          <div key={image.id} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              className="object-cover w-full h-full"
              loading="lazy"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-gray-900 dark:text-gray-100">
                  Experience
                </span>
                <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <div className="flex justify-center">
                <div className="w-32 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium">
              Discover what makes Essence Massage Studio the premier destination
              for relaxation and wellness in Chiswick.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight Services */}
      {/* <section className="w-full py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                Popular Services
              </h2>
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our most loved massage treatments, crafted to provide the ultimate
              relaxation experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {highlightServices.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-6 bg-gradient-to-r from-pink-500 to-purple-500">
                  <div className="text-center">
                    <div className="text-4xl mb-3 bg-white/20 backdrop-blur-sm rounded-xl p-3 inline-block">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {service.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Starting from
                    </p>
                  </div>

                  <Link
                    href="/servicesbook"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Star className="h-4 w-4 mr-2" />
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/servicesbook"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Studio Gallery
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Take a virtual tour of our beautiful, serene massage studio
              designed for your comfort and relaxation.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Why Choose Essence?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We're committed to providing the highest quality massage
              experience with attention to every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Easy Booking System */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Easy Online Booking
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Book your perfect massage session in just a few clicks with our
                streamlined booking system.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {bookingFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* <div className="text-center">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Your Session
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene & Comfort */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Hygiene & Comfort
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              Your safety and comfort are our top priorities. We maintain the
              highest standards of cleanliness and hygiene.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Sanitized Environment
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  All equipment and surfaces are thoroughly sanitized between
                  sessions using hospital-grade disinfectants.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Premium Comfort
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Fresh linens, comfortable temperature control, and ambient
                  lighting create the perfect relaxation atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-100 dark:border-gray-600">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Ready to Experience Excellence?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              Join thousands of satisfied clients who have discovered the
              perfect blend of relaxation, professionalism, and care at Essence
              Massage Studio.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/servicesbook"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Users className="h-5 w-5 mr-2" />
                Book Your Session
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
