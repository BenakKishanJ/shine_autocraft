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
  phone = "+1 (555) 123-4567",
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
    <section className="bg-black text-white py-16 px-5 sm:py-24 sm:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            {title}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div className="space-y-10">
            {/* Email */}
            <div className="flex items-start gap-6">
              <div className="bg-neutral-800 p-3 rounded-full flex-shrink-0">
                <Mail className="h-6 w-6 text-neutral-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-3">
                  We respond to all emails within 24 hours
                </p>
                <a
                  href={`mailto:${email}`}
                  className="font-medium hover:underline"
                >
                  {email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-6">
              <div className="bg-neutral-800 p-3 rounded-full flex-shrink-0">
                <MapPin className="h-6 w-6 text-neutral-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Detail Shop</h3>
                <p className="text-muted-foreground mb-3">
                  Visit our state-of-the-art facility
                </p>
                <Button
                  variant="link"
                  onClick={openGoogleMaps}
                  className="p-0 font-medium hover:underline h-auto"
                >
                  {address}
                </Button>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-6">
              <div className="bg-neutral-800 p-3 rounded-full flex-shrink-0">
                <Phone className="h-6 w-6 text-neutral-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-3">
                  Mon-Sat: 8am - 6pm | Sun: Closed
                </p>
                <Button
                  variant="link"
                  onClick={handlePhoneClick}
                  className="p-0 font-medium hover:underline h-auto"
                >
                  {phone}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Google Maps */}
          <div className="h-full min-h-[300px] sm:min-h-[400px] rounded-lg overflow-hidden border border-neutral-800">
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
