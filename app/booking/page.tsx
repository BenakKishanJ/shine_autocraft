"use client";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-5 sm:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-stone-200 to-stone-400 bg-clip-text text-transparent">
              Book Your Premium Detailing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your vehicle with our expert detailing services. Fill
              out the form below and we'll contact you within 24 hours to
              schedule your appointment.
            </p>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-stone-600 to-stone-800 mx-auto mb-8 animate-pulse"></div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="pb-20 px-2 sm:px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Form Container */}
          <div className="bg-gradient-to-b from-stone-900/50 to-stone-800/30 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-2 sm:p-6 md:p-8 shadow-2xl animate-fade-in-up animation-delay-200">
            {/* <div className="mb-6 px-2 pt-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Book Your Car Care Appointment
              </h2>
              <p className="text-stone-300 text-sm md:text-base">
                Please provide your details and service preferences. Our team
                will review your request and contact you to confirm your
                appointment.
              </p>
            </div> */}

            {/* Responsive iframe container */}
            <div className="relative w-full overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm">
              <div className="aspect-[4/5] md:aspect-[16/20] lg:aspect-[4/3] w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScr9uXZcmCQHrc7dsmvTxp7Dfi5dnQjkmZHEVpiVf59MROLzQ/viewform?embedded=true"
                  className="absolute inset-0 w-full h-full border-0 rounded-lg"
                  title="Car Detailing Booking Form"
                  loading="lazy"
                >
                  <div className="flex items-center justify-center h-full bg-stone-800 rounded-lg">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                      <p className="text-white">Loading booking form...</p>
                    </div>
                  </div>
                </iframe>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 animate-fade-in-up animation-delay-400">
            <div className="bg-gradient-to-br from-stone-900/40 to-stone-800/20 backdrop-blur-sm border border-stone-700/30 rounded-xl p-6 hover:border-stone-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-stone-800 border border-stone-600 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Quick Response
                </h3>
              </div>
              <p className="text-stone-300">
                We'll contact you within 24 hours to confirm your appointment
                and discuss any specific requirements.
              </p>
            </div>

            <div className="bg-gradient-to-br from-stone-900/40 to-stone-800/20 backdrop-blur-sm border border-stone-700/30 rounded-xl p-6 hover:border-stone-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-stone-800 border border-stone-600 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Expert Service
                </h3>
              </div>
              <p className="text-stone-300">
                Our certified professionals use premium products and techniques
                to deliver exceptional results.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center animate-fade-in-up animation-delay-600">
            <div className="inline-block bg-gradient-to-r from-stone-900/60 to-stone-800/40 backdrop-blur-sm border border-stone-700/40 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                Need immediate assistance?
              </h4>
              <p className="text-stone-300 mb-4">
                Call us directly or send us an email
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                >
                  <a
                    href="tel:+1234567890"
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-white text-black hover:bg-stone-200"
                >
                  <a
                    href="mailto:info@shineautocraft.com"
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </main>
  );
}
