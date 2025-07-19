"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Contact7Props {
  title?: string;
  description?: string;
  email?: string;
  address?: string;
  phone?: string;
}

export const Contact7 = ({
  title = "Contact Us",
  description = "Get in touch with our detailing team",
  email = "contact@elitedetail.com",
  address = "123 Auto Spa Lane, Detroit, MI 48201",
  phone = "+1 (236) 880-7525",
}: Contact7Props) => {
  const handlePhoneClick = () => {
    if (typeof window !== "undefined") {
      if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = `tel:${phone}`;
      } else {
        navigator.clipboard.writeText(phone);
        toast.success("Phone number copied to clipboard!");
      }
    }
  };

  const openGoogleMaps = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`,
      "_blank",
    );
  };

  return (
    <section
      className="bg-black text-white py-16 md:py-20 lg:py-24 xl:py-32"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {title}
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div className="space-y-8 md:space-y-10">
            {/* Email */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="bg-neutral-800 p-2 sm:p-3 rounded-full flex-shrink-0">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Email</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  We respond to all emails within 24 hours
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-sm sm:text-base font-medium hover:underline break-all"
                >
                  {email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="bg-neutral-800 p-2 sm:p-3 rounded-full flex-shrink-0">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Our Detail Shop
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  Visit our state-of-the-art facility
                </p>
                <Button
                  variant="link"
                  onClick={openGoogleMaps}
                  className="p-0 text-sm sm:text-base font-medium hover:underline h-auto text-left"
                >
                  {address}
                </Button>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="bg-neutral-800 p-2 sm:p-3 rounded-full flex-shrink-0">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Call Us
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  Mon-Sat: 8am - 6pm | Sun: Closed
                </p>
                <Button
                  variant="link"
                  onClick={handlePhoneClick}
                  className="p-0 text-sm sm:text-base font-medium hover:underline h-auto"
                >
                  {phone}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Google Maps */}
          <div className="h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] rounded-lg overflow-hidden border border-neutral-800 order-first lg:order-last">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573209877!2d-73.9855429245256!3d40.75889547138951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1696000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
