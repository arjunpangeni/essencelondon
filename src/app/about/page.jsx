import Link from "next/link";

// SEO metadata for About page
export const metadata = {
  title: "About Us | Essence Massage Studio London",
  description:
    "Meet the team and discover the story behind Essence Massage Studio in Chiswick, London. Professional, certified therapists dedicated to your wellness.",
  keywords: [
    "about Essence Massage Studio",
    "massage therapists London",
    "Chiswick massage team",
    "wellness studio",
    "professional massage",
    "London spa team",
  ],
  openGraph: {
    title: "About Us | Essence Massage Studio London",
    description:
      "Meet the team and discover the story behind Essence Massage Studio in Chiswick, London. Professional, certified therapists dedicated to your wellness.",
    url: "https://essencemassagestudio.co.uk/about",
    siteName: "Essence Massage Studio London",
    images: [
      {
        url: "/frontlocation.jpeg",
        width: 1200,
        height: 800,
        alt: "Essence Massage Studio Team Photo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Essence Massage Studio London",
    description:
      "Meet the team and discover the story behind Essence Massage Studio in Chiswick, London. Professional, certified therapists dedicated to your wellness.",
    images: ["/frontlocation.jpeg"],
  },
};

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block">About</span>
              <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Essence
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Your sanctuary of relaxation in the heart of Chiswick
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Welcome to Essence Massage Studio
            </h2>
            <div className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed space-y-6">
              <p>
                Welcome to{" "}
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  Essence Massage Studio London
                </span>
                , within{" "}
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  Saachii Wellness Rooms Chiswick
                </span>
                . Step into this sanctuary of relaxation with soothing
                sensations that seamlessly intertwine.
              </p>
              <p>
                Embrace the luxury of diverse massage techniques, each artfully
                designed to cater to your unique needs; you'll feel yourself
                descend into a blissful state with the gentle rhythm of each
                stroke, as you're transported to a realm of utter serenity,
                where worries are left behind and calmness becomes your
                companion.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Conveniently Located
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 md:p-10">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚇</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Nearest Public Transport
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Turnham Green station
                  </span>{" "}
                  is just an 8-minute walk away, so you'll have no problem
                  keeping connected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              With their years of experience, this maestro of massage is
              committed to providing an exceptional experience, ensuring that
              each visit to the retreat is a journey into relaxation, vitality
              and empowerment.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center p-1">
                  <h2 className="text-2xl">KL</h2>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Katarzyna Labudek
                </h3>
                <p className="text-pink-500 dark:text-pink-400 font-medium mb-2">
                  Founder & Lead Massage Therapist
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  15 Years Experience
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Specializes in a variety of massage techniques
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center p-1">
                  <h2 className="text-2xl">AB</h2>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Anns Basnet
                </h3>
                <p className="text-purple-500 dark:text-purple-400 font-medium mb-2">
                  Co-Founder & Social media Manager
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  5 Years Experience
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Expert in Social media management & Customer relations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Like About the Venue */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              What We Love About Our Venue
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Atmosphere */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Atmosphere
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Restorative, professional and welcoming environment designed to
                help you unwind and relax completely.
              </p>
            </div>

            {/* Specialises in */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💆‍♀️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Specialises in
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Massages that will leave you feeling rejuvenated, revitalised
                and deeply refreshed after every session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-pink-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-10 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Ready to Experience Tranquility?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              Book your appointment today and discover the perfect blend of
              relaxation, vitality, and empowerment at Essence Massage Studio.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/servicesbook"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Book Your Session
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-all duration-200 hover:shadow-lg"
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
