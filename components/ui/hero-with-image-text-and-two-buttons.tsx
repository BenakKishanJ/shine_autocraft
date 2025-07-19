import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full py-24 md:py-24 lg:py-32 xl:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Text Overlay */}
        <div className="relative w-full h-[80vh] max-h-[600px] md:hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-muted rounded-md z-0">
            <Image
              src="/hero_image.jpeg"
              alt="car image"
              fill
              className="object-cover rounded-md"
            />
          </div>

          {/* Text Overlay - only badge and header */}
          <div className="absolute inset-0 flex items-end z-10">
            <div className="w-full pb-8">
              <div className="bg-gradient-to-t from-black/80 via-black/50 to-transparent absolute inset-0 rounded-md"></div>
              <div className="relative z-20 px-6 max-w-3xl">
                <div className="flex gap-4 flex-col text-white">
                  <div className="text-xs sm:text-sm">
                    <Badge
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white"
                    >
                      <span className="sm:hidden">
                        Paint Correction & Ceramic Coating
                      </span>
                      <span className="hidden sm:inline">
                        Paint Correction & Ceramic Coating by Surrey's Finest
                      </span>
                    </Badge>
                  </div>
                  <h1 className="text-3xl sm:text-4xl max-w-lg tracking-tighter text-left font-regular">
                    Bring Back the <br />
                    "Factory Fresh Look"
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Content Below Image */}
        <div className="md:hidden px-6 pt-8">
          <div className="flex gap-4 flex-col">
            <p className="text-sm sm:text-base leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              <i>
                At ShineAutoCraft, we're proud to be Surrey's go-to experts for
                high-end paint correction, ceramic coating, and full-service
                detailing. Whether you choose our mobile convenience or drop-off
                care, your vehicle gets the royal treatment — restoring its
                factory finish and defending it with cutting-edge protection.
              </i>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a href="tel:+12368807525">
                <Button
                  size="lg"
                  className="gap-2 sm:gap-4 w-full sm:w-auto text-sm sm:text-base"
                  variant="outline"
                >
                  Jump on a call <PhoneCall className="w-4 h-4" />
                </Button>
              </a>
              <a href="/booking">
                <Button
                  size="lg"
                  className="gap-2 sm:gap-4 w-full sm:w-auto text-sm sm:text-base"
                >
                  Get a free Quote
                  <MoveRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Layout - Side by Side */}
        <div className="hidden md:grid grid-cols-1 gap-8 md:gap-12 lg:gap-16 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div className="text-sm md:text-base lg:text-lg">
              <Badge variant="outline">
                Paint Correction & Ceramic Coating by Surrey's Finest.
              </Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl md:text-5xl lg:text-6xl max-w-lg tracking-tighter text-left font-regular">
                Bring Back the <br />
                "Factory Fresh Look"
              </h1>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md lg:max-w-lg text-left">
                <i>
                  At ShineAutoCraft, we're proud to be Surrey's go-to experts
                  for high-end paint correction, ceramic coating, and
                  full-service detailing. Whether you choose our mobile
                  convenience or drop-off care, your vehicle gets the royal
                  treatment — restoring its factory finish and defending it with
                  cutting-edge protection.
                </i>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a href="tel:+12368807525">
                <Button
                  size="lg"
                  className="gap-2 sm:gap-4 w-full sm:w-auto text-sm sm:text-base"
                  variant="outline"
                >
                  Jump on a call <PhoneCall className="w-4 h-4" />
                </Button>
              </a>
              <a href="/booking">
                <Button
                  size="lg"
                  className="gap-2 sm:gap-4 w-full sm:w-auto text-sm sm:text-base"
                >
                  Get a free Quote
                  <MoveRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square sm:aspect-[4/3] lg:aspect-square relative z-10 order-first lg:order-last">
            <Image
              src="/hero_image.jpeg"
              alt="car image"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
