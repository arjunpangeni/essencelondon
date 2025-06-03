"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Train,
  Bus,
  Navigation,
} from "lucide-react";
import { CallButton } from "@/components/call-button";
import { useMobilecheck } from "@/hooks/usecheck-mobile";

export default function FindUs() {
  const [todayHours, setTodayHours] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobilecheck();
  const phoneNumbertwo = "07471243224";

  const businessHours = {
    Monday: "9:00 AM - 10:00 PM",
    Tuesday: "9:00 AM - 10:00 PM",
    Wednesday: "9:00 AM - 10:00 PM",
    Thursday: "9:00 AM - 10:00 PM",
    Friday: "9:00 AM - 10:00 PM",
    Saturday: "9:00 AM - 10:00 PM",
    Sunday: "9:00 AM - 10:00 PM",
  };

  const businessHours24 = {
    Monday: { open: 9, close: 22 },
    Tuesday: { open: 9, close: 22 },
    Wednesday: { open: 9, close: 22 },
    Thursday: { open: 9, close: 22 },
    Friday: { open: 9, close: 22 },
    Saturday: { open: 9, close: 22 },
    Sunday: { open: 9, close: 22 },
  };

  useEffect(() => {
    const today = new Date();
    const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
    const currentHour = today.getHours();

    setTodayHours(businessHours[dayName]);

    const todaySchedule = businessHours24[dayName];
    if (todaySchedule) {
      setIsOpen(
        currentHour >= todaySchedule.open && currentHour < todaySchedule.close
      );
    }
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Visit Our</span>
              <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Massage Studio
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Located in the heart of Chiswick, our tranquil studio offers the
              perfect escape from busy London life.
            </p>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="w-full py-8 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Clock className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  isOpen
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                }`}
              >
                {isOpen ? "🟢 Open Now" : "🔴 Currently Closed"}
              </span>
            </div>
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Today: {todayHours}
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Information */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 font-serif">
              Get In Touch
            </h2>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Address */}
              <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 font-serif">
                  Visit Us
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
                  300-302 Chiswick High Road
                  <br />
                  Chiswick, London
                  <br />
                  W4 1NP, United Kingdom
                </p>
              </div>

              {/* Phone */}
              <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 font-serif">
                  Call Us
                </h3>

                <CallButton
                  phoneNumber={phoneNumbertwo}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-lg font-medium block cursor-pointer"
                >
                  {phoneNumbertwo}
                </CallButton>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {isMobile ? "Tap to call" : "Click for options"}
                </p>
              </div>

              {/* Email */}
              <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 font-serif">
                  Email Us
                </h3>
                <a
                  href="mailto:essencemassage@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors block font-medium"
                >
                  essencemassage@gmail.com
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Send us a message
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=51.492632,-0.260718`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
              >
                <Navigation className="h-5 w-5" />
                <span>Get Directions</span>
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 font-serif">
              Find Us on the Map
            </h2>

            <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1234567890123!2d-0.260718!3d51.492632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI5JzMzLjUiTiAwwrAxNSczOC42Ilc!5e0!3m2!1sen!2suk!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-6 text-center bg-gray-50/50 dark:bg-gray-900/50">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">
                  300-302 Chiswick High Road, Chiswick, London, W4 1NP
                </p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=51.492632,-0.260718`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport & Hours */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Transport Information */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-6 font-serif">
                  Easy to Reach
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4 p-4 bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Train className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">Turnham Green Tube</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        5 minute walk
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-4 p-4 bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <Bus className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">Bus Stop</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Multiple routes nearby
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-4 p-4 bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <Train className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">Chiswick Station</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        8 minute walk
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-6 font-serif">
                  Opening Hours
                </h3>
                <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-lg p-6">
                  <div className="space-y-3">
                    {Object.entries(businessHours).map(([day, hours]) => (
                      <div
                        key={day}
                        className="flex justify-between items-center"
                      >
                        <span className="font-medium text-sm">{day}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Book your appointment in advance for the best availability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif">
              Ready to Relax?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-8 leading-relaxed font-medium">
              Book your appointment today and experience our relaxing massage
              treatments in the heart of Chiswick.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                <Link href="/servicesbook">Book Appointment</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
