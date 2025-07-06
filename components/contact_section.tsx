"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  // Contact information - update these with your actual details
  const contactInfo = {
    phone: "+1 (555) 123-4567",
    email: "info@premiumdetailing.com",
    address: "123 Main Street, Your City, ST 12345",
    coordinates: { lat: 40.7128, lng: -74.006 }, // Update with your actual coordinates
    social: {
      facebook: "https://facebook.com/yourdetailing",
      instagram: "https://instagram.com/yourdetailing",
      twitter: "https://twitter.com/yourdetailing",
    },
  };

  const handlePhoneClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `tel:${contactInfo.phone}`;
    } else {
      navigator.clipboard.writeText(contactInfo.phone).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const handleMapClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to give your car the premium treatment it deserves? Contact us
            today to schedule your appointment.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <button
                  onClick={handlePhoneClick}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg group relative"
                >
                  {contactInfo.phone}
                  <span className="block text-sm text-gray-500 mt-1">
                    {copied ? "Copied!" : "Click to call or copy"}
                  </span>
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 p-3 rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                >
                  {contactInfo.email}
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 p-3 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <button
                  onClick={handleMapClick}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg text-left"
                >
                  {contactInfo.address}
                </button>
                <p className="text-sm text-gray-500 mt-1">
                  Click to get directions
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href={contactInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-200"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href={contactInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-pink-600 p-3 rounded-lg transition-colors duration-200"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href={contactInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-400 p-3 rounded-lg transition-colors duration-200"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative">
            <div className="bg-gray-800 rounded-lg overflow-hidden h-96 lg:h-full min-h-[400px]">
              <button
                onClick={handleMapClick}
                className="w-full h-full relative group cursor-pointer"
              >
                {/* Placeholder map - replace with actual map service */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-400 group-hover:text-white transition-colors duration-200" />
                    <h3 className="text-xl font-semibold mb-2">
                      Click to View Map
                    </h3>
                    <p className="text-gray-400">
                      Get directions to our location
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Monday - Friday</h4>
              <p className="text-gray-400">8:00 AM - 6:00 PM</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Saturday</h4>
              <p className="text-gray-400">9:00 AM - 4:00 PM</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Sunday</h4>
              <p className="text-gray-400">Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
