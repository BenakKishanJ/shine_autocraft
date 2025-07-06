import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full  py-40 lg:py-30 ">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div className="text-sm md:text-2xl">
              <Badge variant="outline">
                Paint Correction & Ceramic Coating by Surrey’s Finest.
              </Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl md:text-5xl max-w-lg tracking-tighter text-left font-regular">
                Bring Back the <br />
                "Factory Fresh Look"
              </h1>
              <p className=" text-sm md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                <i>
                  At ShineAutoCraft, we’re proud to be Surrey’s go-to experts
                  for high-end paint correction, ceramic coating, and
                  full-service detailing. Whether you choose our mobile
                  convenience or drop-off care, your vehicle gets the royal
                  treatment — restoring its factory finish and defending it with
                  cutting-edge protection.
                </i>
              </p>
            </div>
            <div className="flex flex-row gap-4 ">
              <Button size="lg" className="gap-4" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Get a free Quote
                <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square relative z-10">
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
