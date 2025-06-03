"use client";
import Link from "next/link";
import { memo } from "react";
import { Mail, Instagram, Facebook, MapPin, Phone, Heart } from "lucide-react";
import Image from "next/image";

const SiteFooter = memo(function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Brand Section */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3">
              <div>
                <div className="h-full w-full rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <Image
                    src="/essencelogo.png"
                    alt="essence massage studio london logo"
                    width={50}
                    height={50}
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent leading-tight">
                  Essence
                </span>
                <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                  Massage Studio London
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Your sanctuary of relaxation in the heart of Chiswick. Experience
              the ultimate in professional massage therapy and wellness
              treatments.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/essencemassagelondon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61575293143383"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4 flex flex-col items-center md:items-end lg:items-start md:text-right lg:text-left">
            <h3 className="font-bold text-lg text-foreground mb-4 flex items-center md:justify-end lg:justify-start">
              <Heart className="h-5 w-5 mr-2 text-pink-500" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Deep Tissue Massage",
                "Swedish Massage",
                "Relaxing Therapy",
                "Foot Massage",
                "Pregnancy Massage",
                "Aromatherapy Massage",
                "Sport Massage",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/servicesbook"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Features", href: "/features" },
                { name: "Services", href: "/servicesbook" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Find Us", href: "/find-us" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4 flex flex-col items-center md:items-end lg:items-start w-full md:w-auto md:text-right lg:text-left">
            <h3 className="font-bold text-lg text-foreground mb-4 w-full flex items-center justify-center md:justify-end lg:justify-start">
              Get In Touch
            </h3>
            <div className="space-y-4 w-full flex flex-col items-center md:items-end lg:items-start">
              <div className="flex items-start space-x-3 justify-center md:justify-end lg:justify-start w-full">
                <MapPin className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Visit Us</p>
                  <p>300-302 Chiswick High Road</p>
                  <p>Chiswick, London W4 1NP</p>
                  <p>United Kingdom</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 justify-center md:justify-end lg:justify-start w-full">
                <Phone className="h-5 w-5 text-purple-500 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Call Us</p>
                  <a
                    href="tel:07471243224"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    07471243224
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 justify-center md:justify-end lg:justify-start w-full">
                <Mail className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Email Us</p>
                  <h3
                    href="mailto:essencestudiolondon@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    title="If nothing happens, please set up your default email app."
                  >
                    essencestudiolondon@gmail.com
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Essence Massage Studio. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Licensed Massage Therapists | Professional Wellness Services
            </p>
          </div>

          {/* Design & Development Credit */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end">
              Designed & Developed by
              <span className="ml-1 font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                <a href="https://linktr.ee/arjunpangeni" target="blank">
                  Arjun Pangeni
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default SiteFooter;
