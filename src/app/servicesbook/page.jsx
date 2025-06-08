"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Star,
  Sparkles,
  Heart,
  Zap,
  Tag,
} from "lucide-react";

const today = new Date().toISOString().split("T")[0];

const classicMassages = [
  {
    id: 1,
    name: "Deep Tissue Massage",
    icon: "💪",
    pricing: [
      { duration: "30 minutes", price: "£39" },
      { duration: "1 Hour", price: "£65" },
      { duration: "1 Hour 30 minutes", price: "£90" },
    ],
    shortDescription:
      "Firmer pressure targeting muscle knots and trigger points for tension relief.",
    fullDescription:
      "During a deep tissue massage, a firmer pressure is used and more specific attention is paid to muscle knots or trigger points. If you have specific muscles or trigger points that need individual attention, a deep tissue massage can help ease tension, increase the range of motion, and relieve chronic pain.",
    bookingLink: `https://www.treatwell.co.uk/availability?venueId=459617&proposedServices=%5B%7B%22menuItemId%22%3A%22TR5375514%22%2C%22optionIds%22%3A%5B%2210235645%22%5D%7D%5D&date=${today}`,
  },
  {
    id: 2,
    name: "Swedish Massage",
    icon: "🌿",
    pricing: [
      { duration: "30 minutes", price: "£39" },
      { duration: "1 Hour", price: "£65" },
      { duration: "1 Hour 30 minutes", price: "£90" },
    ],
    shortDescription:
      "Perfect for stress relief and resetting postural problems from repetitive motions.",
    fullDescription:
      "Swedish massage is a perfect way to relieve stress and muscle tension and reset any postural problems that have developed from repetitive motions or overuse of specific muscles.",
    bookingLink: `https://www.treatwell.co.uk/availability?venueId=459617&proposedServices=%5B%7B%22menuItemId%22%3A%22TR5375520%22%2C%22optionIds%22%3A%5B%2210235663%22%5D%7D%5D&date=${today}`,
  },
  {
    id: 3,
    name: "Relaxing Massage",
    icon: "😌",
    pricing: [
      { duration: "30 minutes", price: "£39" },
      { duration: "1 Hour", price: "£65" },
      { duration: "1 Hour 30 minutes", price: "£90" },
    ],
    shortDescription:
      "Soft, soothing massage to eliminate muscle tension and relieve stress.",
    fullDescription:
      "A relaxing massage helps eliminate accumulated muscle tension and relieves stress. Sometimes a soft, soothing massage is all you need to manage a high-stress job or a moment of exceptional tension.",
    bookingLink: `https://www.treatwell.co.uk/availability?venueId=459617&proposedServices=%5B%7B%22menuItemId%22%3A%22TR5375521%22%2C%22optionIds%22%3A%5B%2210235665%22%5D%7D%5D&date=${today}`,
  },
  {
    id: 4,
    name: "Aromatherapy Massage",
    icon: "🌸",
    pricing: [
      { duration: "30 minutes", price: "£39" },
      { duration: "1 Hour", price: "£65" },
      { duration: "1 Hour 30 minutes", price: "£90" },
    ],
    shortDescription:
      "Swedish massage techniques combined with essential oil aromatherapy.",
    fullDescription:
      "The aromatherapy massage combines soothing Swedish massage techniques with essential oil aromatherapy. Aromatherapy makes an already relaxing and invigorating massage all the more therapeutic.",
    bookingLink: `https://www.treatwell.co.uk/availability?venueId=459617&proposedServices=%5B%7B%22menuItemId%22%3A%22TR5375522%22%2C%22optionIds%22%3A%5B%2210235669%22%5D%7D%5D&date=${today}`,
  },
  {
    id: 5,
    name: "Foot Massage",
    icon: "🦶",
    pricing: [{ duration: "30 minutes", price: "£39" }],
    shortDescription:
      "Combines soothing massage with therapeutic benefits of reflexology.",
    fullDescription:
      "Foot massage combines the soothing side of massage with the therapeutic benefits of reflexology. This is the perfect treatment for anyone who spends long hours on their feet or suffers from stress and anxiety.",
    bookingLink: `https://www.treatwell.co.uk/availability?venueId=459617&proposedServices=%5B%7B%22menuItemId%22%3A%22TR5380894%22%2C%22optionIds%22%3A%5B%2210246300%22%5D%7D%5D&date=${today}`,
  },
  {
    id: 6,
    name: "Back, Neck & Shoulders Massage",
    icon: "🫸",
    pricing: [{ duration: "30 minutes", price: "£39" }],
    shortDescription:
      "Ideal solution for upper body muscle tension and postural problems.",
    fullDescription:
      "Back, neck and shoulders massage is the ideal solution to muscle tension caused by knots or postural problems in the upper body. Release tension, increase your range of motion and relieve chronic pain with this essential massage.",
    bookingLink: `https://www.treatwell.co.uk/availability?venueId=459617&proposedServices=%5B%7B%22menuItemId%22%3A%22TR5380896%22%2C%22optionIds%22%3A%5B%2210246303%22%5D%7D%5D&date=${today}`,
  },
  {
    id: 7,
    name: "Pregnancy Massage",
    icon: "🤰",
    pricing: [
      { duration: "30 minutes", price: "£39" },
      { duration: "1 Hour", price: "£65" },
      { duration: "1 Hour 30 minutes", price: "£90" },
    ],
    shortDescription:
      "Gentle, nurturing massage designed for expectant mothers.",
    fullDescription:
      "Pregnancy massage is a gentle, nurturing treatment designed to support the unique needs of expectant mothers. It helps relieve tension, reduce swelling, and promote relaxation during pregnancy.",
    bookingLink: `https://www.treatwell.co.uk/place/essence-massage-studio-london/`, // No date param in original
  },
  {
    id: 8,
    name: "60 Min X3 Package Deal",
    icon: "📦",
    pricing: [
      {
        duration: "3 Hours Total",
        price: "£165",
        originalPrice: "£195",
        discount: "Save £30",
      },
    ],
    shortDescription:
      " 60-minute sessions with great savings. Valid for one year.",
    fullDescription:
      "Package is valid for one year and you can choose any type of massage from our offer. Enjoy benefits of massage on regular basis with great price tag!",
    bookingLink: `https://www.treatwell.co.uk/availability?venueId=459617&proposedServices=%5B%7B%22menuItemId%22%3A%22TP5642828%22%2C%22optionIds%22%3A%5B%2211295031%22%5D%7D%5D&date=${today}`,
  },
  {
    id: 9,
    name: "30 Min X3 Sessions Deal",
    icon: "⏰",
    pricing: [
      {
        duration: "1 Hr 30 mins Total",
        price: "£105",
        originalPrice: "£117",
        discount: "Save £12",
      },
    ],
    shortDescription:
      "Three 30-minute sessions at reduced price. Valid for one year.",
    fullDescription:
      "Reduced price of treatment with our new x 3 sessions package deal. Package is valid for one year and you can choose any type of massage from our offer. *Length of treatment depends on chosen package deal",
    bookingLink: `https://www.treatwell.co.uk/availability?venueId=459617&proposedServices=%5B%7B%22menuItemId%22%3A%22TP5642835%22%2C%22optionIds%22%3A%5B%2211295052%22%5D%7D%5D&date=${today}`,
  },
  {
    id: 10,
    name: "90 Mins X3 Sessions Deal",
    icon: "⭐",
    pricing: [
      {
        duration: "4 Hours 30 mins Total",
        price: "£235",
        originalPrice: "£270",
        discount: "Save £35",
      },
    ],
    shortDescription:
      "Three 90-minute sessions with maximum savings. Valid for one year.",
    fullDescription:
      "Reduced price of treatment with our new x 3 sessions package deal. Package is valid for one year and you can choose any type of massage from our offer. *Length of treatment depends on chosen package deal",
    bookingLink: `https://www.treatwell.co.uk/availability?venueId=459617&proposedServices=%5B%7B%22menuItemId%22%3A%22TP5642848%22%2C%22optionIds%22%3A%5B%2211295054%22%5D%7D%5D&date=${today}`,
  },
];

const therapeuticMassages = [
  {
    id: 10,
    name: "Sport Massage",
    icon: "🏃‍♂️",
    pricing: [
      { duration: "30 minutes", price: "£39" },
      { duration: "1 Hour", price: "£65" },
      { duration: "1 Hour 30 minutes", price: "£90" },
    ],
    shortDescription:
      "Essential for athletes to increase circulation and promote fast recovery.",
    fullDescription:
      "Every serious athlete understands the importance of a regular self-care. Sports massage helps increase blood circulation, promotes muscle growth and encourages a fast recovery ensuring you are fit and ready to perform again as soon as possible. If you want to compete at the top of your game, sports massage is an essential part of your self-care and routine maintenance.",
    bookingLink: `https://www.treatwell.co.uk/availability?venueId=459617&proposedServices=%5B%7B%22menuItemId%22%3A%22TR5375517%22%2C%22optionIds%22%3A%5B%2210235653%22%5D%7D%5D&date=${today}`,
  },
  {
    id: 11,
    name: "Therapeutic Massage",
    icon: "🩺",
    pricing: [
      { duration: "30 minutes", price: "£39" },
      { duration: "1 Hour", price: "£65" },
      { duration: "1 Hour 30 minutes", price: "£90" },
    ],
    shortDescription:
      "Firmer pressure targeting specific muscle knots and trigger points.",
    fullDescription:
      "During a therapeutic massage, a firmer pressure is used and more specific attention is paid to muscle knots or trigger points. If you have specific muscles or trigger points that need individual attention, a therapeutic massage can help ease tension, increase range of motion and relieve chronic pain.",
    bookingLink: `https://www.treatwell.co.uk/availability?venueId=459617&proposedServices=%5B%7B%22menuItemId%22%3A%22TR5380897%22%2C%22optionIds%22%3A%5B%2210246307%22%5D%7D%5D&date=${today}`,
  },
];

function ServiceCard({ service, categoryColor }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group h-full">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden h-full flex flex-col transform group-hover:scale-[1.02] transition-all duration-300 group-hover:shadow-2xl">
        {/* Card Header - Fixed Height */}
        <div
          className={`p-6 bg-gradient-to-br ${categoryColor} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-start space-x-4">
              <div className="text-4xl bg-white/20 backdrop-blur-sm rounded-xl p-3 flex-shrink-0">
                {service.icon}
              </div>
              <div className="flex-1 min-h-[80px] flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {service.name}
                </h3>
                <p className="text-white/95 text-sm leading-relaxed line-clamp-2">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section - Consistent Layout */}
        <div className="p-6 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-100 dark:border-gray-600">
          <div className="space-y-3">
            {service.pricing.map((price, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {price.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {price.originalPrice && price.discount ? (
                      <>
                        <span className="text-sm text-gray-500 line-through">
                          {price.originalPrice}
                        </span>
                        <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                          {price.price}
                        </span>
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                          {price.discount}
                        </div>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {price.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section - Flexible Height */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Expandable Details */}
          <div className="flex-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-between w-full text-left mb-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 group/button"
            >
              <span className="font-medium text-gray-700 dark:text-gray-300 group-hover/button:text-gray-900 dark:group-hover/button:text-gray-100">
                About this service
              </span>
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4 text-gray-500" />
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 group-hover/button:text-gray-700 dark:group-hover/button:text-gray-300" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 group-hover/button:text-gray-700 dark:group-hover/button:text-gray-300" />
                )}
              </div>
            </button>

            {isExpanded && (
              <div className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-gray-200 dark:border-gray-600 animate-in slide-in-from-top-2 duration-300">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  {service.fullDescription}
                </p>
              </div>
            )}
          </div>

          {/* Book Button - Fixed Position */}
          <div className="mt-auto pt-4">
            <a
              href={service.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r ${categoryColor} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] group/book`}
            >
              <Sparkles className="h-5 w-5 mr-2 group-hover/book:animate-pulse" />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-gray-900 dark:text-gray-100">
                  Our
                </span>
                <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <div className="flex justify-center">
                <div className="w-32 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium">
              Discover our comprehensive range of massage therapies designed to
              restore, rejuvenate, and revitalize your body and mind.
            </p>
          </div>
        </div>
      </section>

      {/* Classic Massages Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                Classic Massages
              </h2>
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Traditional massage techniques for relaxation, stress relief, and
              overall wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {classicMassages.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                categoryColor="from-pink-500 via-pink-600 to-purple-600"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Massages Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                Therapeutic Massages
              </h2>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Specialized therapeutic treatments for targeted healing and
              recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {therapeuticMassages.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                categoryColor="from-purple-500 via-purple-600 to-indigo-600"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-100 dark:border-gray-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Ready to Book Your Perfect Massage?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
                Choose from our wide range of massage services and experience
                the ultimate in relaxation and therapeutic care.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
                >
                  Contact Us
                </Link>
                <Link
                  href="/find-us"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:scale-105 active:scale-95"
                >
                  Find Our Location
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
