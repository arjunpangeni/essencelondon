import Link from "next/link";
import {
  Check,
  ArrowRight,
  Star,
  Quote,
  Sparkles,
  Heart,
  Zap,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

// Featured services data (only 4)
// const featuredServices = [
//   {
//     id: 1,
//     name: "Deep Tissue Massage",
//     icon: "💪",
//     pricing: [
//       {
//         duration: "30 minutes",
//         price: "£35.10",
//         originalPrice: "£39",
//         discount: "10%",
//       },
//       {
//         duration: "1 Hour",
//         price: "£58.50",
//         originalPrice: "£65",
//         discount: "10%",
//       },
//     ],
//     shortDescription:
//       "Firmer pressure targeting muscle knots and trigger points for tension relief.",
//     color: "from-pink-500 via-pink-600 to-purple-600",
//   },
//   {
//     id: 2,
//     name: "Swedish Massage",
//     icon: "🌿",
//     pricing: [
//       {
//         duration: "30 minutes",
//         price: "£35.10",
//         originalPrice: "£39",
//         discount: "10%",
//       },
//       {
//         duration: "1 Hour",
//         price: "£58.50",
//         originalPrice: "£65",
//         discount: "10%",
//       },
//     ],
//     shortDescription:
//       "Perfect for stress relief and resetting postural problems from repetitive motions.",
//     color: "from-purple-500 via-purple-600 to-indigo-600",
//   },
//   {
//     id: 3,
//     name: "Aromatherapy Massage",
//     icon: "🌸",
//     pricing: [
//       {
//         duration: "30 minutes",
//         price: "£35.10",
//         originalPrice: "£39",
//         discount: "10%",
//       },
//       {
//         duration: "1 Hour",
//         price: "£58.50",
//         originalPrice: "£65",
//         discount: "10%",
//       },
//     ],
//     shortDescription:
//       "Swedish massage techniques combined with essential oil aromatherapy.",
//     color: "from-indigo-500 via-indigo-600 to-pink-600",
//   },
// ];
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

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Absolutely incredible experience! The deep tissue massage was exactly what I needed. My therapist was professional and attentive to my problem areas. I left feeling completely renewed.",
    location: "Chiswick Local",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    text: "I've been to many massage studios, but Essence truly stands out. The aromatherapy massage was divine and the atmosphere is so peaceful. I've already booked my next appointment!",
    location: "Regular Client",
  },
  {
    id: 3,
    name: "Emma Wilson",
    rating: 5,
    text: "The hot stone therapy was incredible! The therapist was skilled and attentive, and the studio is immaculately clean. This is now my go-to place for relaxation.",
    location: "West London",
  },
  {
    id: 4,
    name: "James Thompson",
    rating: 5,
    text: "Outstanding service and such a tranquil environment. The Swedish massage helped me unwind after a stressful week. The booking process was seamless too!",
    location: "Turnham Green",
  },
  {
    id: 5,
    name: "Lisa Martinez",
    rating: 5,
    text: "The foot massage was exactly what I needed after long days on my feet. The reflexology benefits were amazing and I felt so much better afterwards.",
    location: "Hammersmith",
  },
];

// (metadata moved to metadata.js)

export default function Home() {
  return (
    <div className="w-full">
      {/* Compact Hero Section with Background Image */}
      <section className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Background Image using next/image */}
        <div className="absolute inset-0 -z-10 rounded-2xl shadow-2xl overflow-hidden">
          <Image
            src="/essencemain1.jpg"
            alt="Essence Massage Studio background"
            fill
            sizes="100vw"
            priority
            quality={50}
            className="object-cover object-center w-full h-full"
          />
        </div>
        {/* Overlay for better text readability, very light for more image visibility */}
        <div className="absolute inset-0 bg-white/20 dark:bg-gray-900/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                  <span className="block text-gray-900 dark:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                    Serenity
                  </span>
                  <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                    Massage
                  </span>
                  <span className="block text-gray-900 dark:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                    Retreat!
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-900 dark:text-white max-w-2xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.20)]">
                  Escape the everyday stress with our calming massages.
                  Experience the ultimate in relaxation and wellness.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-base text-gray-700 dark:text-gray-300 font-medium">
                    Aromatherapy Massage
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-base text-gray-700 dark:text-gray-300 font-medium">
                    Deep Tissue Massage
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-base text-gray-700 dark:text-gray-300 font-medium">
                    Swedish Massage
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-base text-gray-700 dark:text-gray-300 font-medium">
                    Pregnancy Massage
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/servicesbook"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Reserve Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right Side - Compact Promo Circle */}
            {/* <div className="md:col-span-1 flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-white dark:bg-gray-800 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-gradient-to-r from-pink-500 to-purple-500 transform rotate-6 hover:rotate-3 transition-transform duration-300">
                  <p className="text-[10px] md:text-xs font-bold text-center text-gray-900 dark:text-gray-100 mb-1">
                    BOOK NOW FOR
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-1">
                    10% OFF
                  </p>
                  <p className="text-[10px] md:text-xs font-bold text-center text-gray-900 dark:text-gray-100">
                    FIRST SESSION!
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/*services section heightights*/}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-800">
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
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Happy Clients" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Licensed Therapists" },
              { number: "24/7", label: "Online Booking" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - List Format */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Hear from our satisfied clients about their transformative
              experience at Essence Massage Studio
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl relative"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>

                  <div className="absolute top-4 right-4 text-pink-500/20 dark:text-pink-400/20">
                    <Quote className="h-8 w-8" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-100 dark:border-gray-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Ready to Experience Deep Relaxation?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                Book your massage session today and enjoy 15% off your first
                visit. Your journey to wellness starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/servicesbook"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Sparkles className="h-5 w-5 mr-2" />
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
        </div>
      </section>
    </div>
  );
}
