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
import Head from "next/head";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
    text: "The Back, Neck & Shoulders Massage was incredible! The therapist was skilled and attentive, and the studio is immaculately clean. This is now my go-to place for relaxation.",
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

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Essence Massage Studio London | Professional Massage in Chiswick
        </title>
        <meta
          name="description"
          content="Experience deep relaxation and wellness at Essence Massage Studio in Chiswick, London. Book aromatherapy, deep tissue, Swedish, and sports massages with certified therapists."
        />
        <meta
          name="keywords"
          content="massage London, Chiswick massage, aromatherapy, deep tissue massage, Swedish massage, sports massage, wellness studio, relaxation, professional massage therapists, Essence Massage Studio"
        />
        <meta
          property="og:title"
          content="Essence Massage Studio London | Professional Massage in Chiswick"
        />
        <meta
          property="og:description"
          content="Experience deep relaxation and wellness at Essence Massage Studio in Chiswick, London. Book aromatherapy, deep tissue, Swedish, and sports massages with certified therapists."
        />
        <meta property="og:image" content="/essencemain1.jpg" />
        <meta property="og:url" content="https://essencemassagestudio.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Essence Massage Studio London" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:facebook:page"
          content="https://www.facebook.com/profile.php?id=61575293143383"
        />
        <meta
          property="og:instagram:profile"
          content="https://www.instagram.com/essencemassagelondon"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Essence Massage Studio London | Professional Massage in Chiswick"
        />
        <meta
          name="twitter:description"
          content="Experience deep relaxation and wellness at Essence Massage Studio in Chiswick, London. Book aromatherapy, deep tissue, Swedish, and sports massages with certified therapists."
        />
        <meta name="twitter:image" content="/essencemain1.jpg" />
      </Head>
      <div className="w-full">
        {/* Compact Hero Section with Background Image */}
        <section className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden">
          {/* Background Image using next/image */}
          <div className="absolute inset-0 -z-10 rounded-2xl shadow-2xl overflow-hidden">
            <Image
              src="/test.png"
              alt="Essence Massage Studio background"
              fill
              sizes="100vw"
              priority
              quality={90}
              className="object-cover object-center w-full h-full"
            />
          </div>
          {/* Overlay for better text readability, very light for more image visibility */}
          <div className="absolute inset-0 bg-white/20 dark:bg-gray-900/30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] text-balance">
                    <span className="block text-gray-900  mt-2">
                      <span className="text-black ">
                        Professional Massage Therapy
                      </span>{" "}
                      in
                      <span className="text-pink-600"> Chiswick, London</span>
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl text-black dark:text-white max-w-2xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.20)]">
                    Escape the everyday stress with our calming massages.
                    Experience the ultimate in relaxation and wellness.
                  </p>
                </div>

                <div className="space-y-3 max-w-md ml-0 md:ml-0 md:mr-auto  rounded-xl p-4 ">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-base text-gray-900 dark:text-white font-medium">
                      Aromatherapy Massage
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-base text-gray-900 dark:text-gray-100 font-medium">
                      Deep Tissue Massage
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-base text-gray-900 dark:text-gray-100 font-medium">
                      Swedish Massage
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-base text-gray-900 dark:text-gray-100 font-medium">
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
            </div>
          </div>
        </section>
        {/*services section heightights*/}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-4 mb-6">
                {/* <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div> */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                  Popular Services
                </h2>
                {/* <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div> */}
              </div>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Our most loved massage treatments, crafted to provide the
                ultimate relaxation experience.
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

        <section className="w-full py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl border border-gray-100 dark:border-gray-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 text-center">
                  Everything you need to know before booking your massage
                  session at Essence Massage Studio London.
                </p>
                <div className="w-full max-w-2xl mx-auto">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex flex-col gap-3"
                  >
                    <AccordionItem
                      value="item-1"
                      className="group border-l-4 border-pink-400 bg-white/90 dark:bg-gray-900/80 shadow-sm hover:shadow-lg transition-all rounded-xl mb-1"
                    >
                      <AccordionTrigger className="flex items-center gap-3 py-4 px-4 sm:px-6 text-base sm:text-lg font-semibold text-left text-gray-900 dark:text-gray-100 focus:outline-none">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 text-white mr-2 text-lg">
                          ?
                        </span>
                        What should I expect during my first visit?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-4 sm:px-6 pb-4 pt-0">
                        Your therapist will discuss your needs and preferences,
                        explain the process, and ensure you are comfortable
                        before beginning your massage. We recommend arriving 10
                        minutes early to relax and fill out a brief consultation
                        form.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-2"
                      className="group border-l-4 border-pink-400 bg-white/90 dark:bg-gray-900/80 shadow-sm hover:shadow-lg transition-all rounded-xl mb-1"
                    >
                      <AccordionTrigger className="flex items-center gap-3 py-4 px-4 sm:px-6 text-base sm:text-lg font-semibold text-left text-gray-900 dark:text-gray-100 focus:outline-none">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 text-white mr-2 text-lg">
                          ?
                        </span>
                        How do I book a session?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-4 sm:px-6 pb-4 pt-0">
                        You can easily book online through our{" "}
                        <Link
                          href="/servicesbook"
                          className="text-pink-600 dark:text-pink-400 underline"
                        >
                          Services
                        </Link>{" "}
                        or contact us directly for assistance. We offer flexible
                        scheduling, including evenings and weekends.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-3"
                      className="group border-l-4 border-pink-400 bg-white/90 dark:bg-gray-900/80 shadow-sm hover:shadow-lg transition-all rounded-xl mb-1"
                    >
                      <AccordionTrigger className="flex items-center gap-3 py-4 px-4 sm:px-6 text-base sm:text-lg font-semibold text-left text-gray-900 dark:text-gray-100 focus:outline-none">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 text-white mr-2 text-lg">
                          ?
                        </span>
                        Are your therapists qualified?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-4 sm:px-6 pb-4 pt-0">
                        Yes, all our therapists are fully certified,
                        experienced, and passionate about your well-being. We
                        maintain the highest standards of professionalism and
                        care.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-4"
                      className="group border-l-4 border-pink-400 bg-white/90 dark:bg-gray-900/80 shadow-sm hover:shadow-lg transition-all rounded-xl mb-1"
                    >
                      <AccordionTrigger className="flex items-center gap-3 py-4 px-4 sm:px-6 text-base sm:text-lg font-semibold text-left text-gray-900 dark:text-gray-100 focus:outline-none">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 text-white mr-2 text-lg">
                          ?
                        </span>
                        What types of massage do you offer?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-4 sm:px-6 pb-4 pt-0">
                        We offer Deep Tissue, Swedish, Aromatherapy, Sports,
                        Pregnancy, Relaxing, Therapeutic, Back, Neck, Shoulders
                        and Foot massages, as well as package deals. Each
                        session is tailored to your needs for maximum benefit.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-5"
                      className="group border-l-4 border-pink-400 bg-white/90 dark:bg-gray-900/80 shadow-sm hover:shadow-lg transition-all rounded-xl mb-1"
                    >
                      <AccordionTrigger className="flex items-center gap-3 py-4 px-4 sm:px-6 text-base sm:text-lg font-semibold text-left text-gray-900 dark:text-gray-100 focus:outline-none">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 text-white mr-2 text-lg">
                          ?
                        </span>
                        What should I wear to my appointment?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-4 sm:px-6 pb-4 pt-0">
                        Wear comfortable clothing. You will be given privacy to
                        undress to your comfort level, and you will be draped
                        appropriately throughout your session.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-6"
                      className="group border-l-4 border-pink-400 bg-white/90 dark:bg-gray-900/80 shadow-sm hover:shadow-lg transition-all rounded-xl mb-1"
                    >
                      <AccordionTrigger className="flex items-center gap-3 py-4 px-4 sm:px-6 text-base sm:text-lg font-semibold text-left text-gray-900 dark:text-gray-100 focus:outline-none">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 text-white mr-2 text-lg">
                          ?
                        </span>
                        Can I request a specific therapist?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-4 sm:px-6 pb-4 pt-0">
                        Yes, you may request a specific therapist when booking.
                        We will do our best to accommodate your preference based
                        on availability.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-7"
                      className="group border-l-4 border-pink-400 bg-white/90 dark:bg-gray-900/80 shadow-sm hover:shadow-lg transition-all rounded-xl mb-1"
                    >
                      <AccordionTrigger className="flex items-center gap-3 py-4 px-4 sm:px-6 text-base sm:text-lg font-semibold text-left text-gray-900 dark:text-gray-100 focus:outline-none">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 text-white mr-2 text-lg">
                          ?
                        </span>
                        What is your cancellation policy?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-4 sm:px-6 pb-4 pt-0">
                        We kindly ask for at least 24 hours’ notice for
                        cancellations or rescheduling. Late cancellations may
                        incur a fee.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-8"
                      className="group border-l-4 border-pink-400 bg-white/90 dark:bg-gray-900/80 shadow-sm hover:shadow-lg transition-all rounded-xl mb-1"
                    >
                      <AccordionTrigger className="flex items-center gap-3 py-4 px-4 sm:px-6 text-base sm:text-lg font-semibold text-left text-gray-900 dark:text-gray-100 focus:outline-none">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 text-white mr-2 text-lg">
                          ?
                        </span>
                        Is Essence Massage Studio accessible?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-4 sm:px-6 pb-4 pt-0">
                        Yes, our studio is accessible and we strive to
                        accommodate all clients. Please let us know if you have
                        any specific needs or concerns.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
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
                  Reclaim your calm—book your massage session today and take the
                  first step toward total wellness.
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
    </>
  );
}
