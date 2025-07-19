import { Check, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <div className="w-full py-16 md:py-20 lg:py-40 bg-black" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="secondary">Service Tiers</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Choose Your Level of Correction
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Whether you're looking for a quick refresh or full paint
              restoration, our packages deliver.
            </p>
          </div>
          <div className="grid pt-12 md:pt-16 lg:pt-20 text-left grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 lg:gap-8">
            {/* One-Step Correction */}
            <Card className="w-full rounded-lg flex flex-col border border-gray-800">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-normal text-xl sm:text-2xl">
                  One-Step Correction
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground">
                  Gloss enhancement for newer or well-maintained vehicles
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-4 sm:p-6 pt-0">
                <div className="flex flex-col gap-3 sm:gap-4 justify-start">
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">
                      Light swirl & haze removal
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">
                      Single-stage machine polish
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">
                      ~60–70% defect removal
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">
                      Restores gloss & clarity
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">
                      Ideal for newer or well-maintained paint
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">Time: 4–6 hours</p>
                  </div>
                </div>
              </CardContent>
              <div className="p-4 sm:p-6 pt-0">
                <a href="/booking">
                  <Button
                    variant="outline"
                    className="gap-2 w-full text-sm sm:text-base"
                  >
                    Get Custom Quote <MoveRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </Card>

            {/* Two-Step Correction */}
            <Card className="w-full rounded-lg flex flex-col border border-gray-800">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-normal text-xl sm:text-2xl">
                  Two-Step Correction
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground">
                  Comprehensive correction for daily drivers
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-4 sm:p-6 pt-0">
                <div className="flex flex-col gap-3 sm:gap-4 justify-start">
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">
                      Removes moderate swirls, oxidation & water spots
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm sm:text-base">
                        Dual-stage machine process
                      </p>
                      <ul className="list-disc pl-5 text-xs sm:text-sm text-muted-foreground mt-1">
                        <li>Step 1: Compounding</li>
                        <li>Step 2: Fine polish</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">
                      ~80–90% defect removal
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">
                      Restores high-gloss finish
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">
                      Great for daily drivers & older paint
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">Time: 6–10 hours</p>
                  </div>
                </div>
              </CardContent>
              <div className="p-4 sm:p-6 pt-0">
                <a href="/booking">
                  <Button
                    variant="outline"
                    className="gap-2 w-full text-sm sm:text-base"
                  >
                    Get Custom Quote <MoveRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </Card>

            {/* Three-Step Correction */}
            <Card className="w-full rounded-lg flex flex-col border border-gray-800">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-normal text-xl sm:text-2xl">
                  Three-Step Correction
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground">
                  Complete restoration for show cars and collectors
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-4 sm:p-6 pt-0">
                <div className="flex flex-col gap-3 sm:gap-4 justify-start">
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">
                      Removes deep scratches & heavy defects
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm sm:text-base">
                        Triple-stage correction process
                      </p>
                      <ul className="list-disc pl-5 text-xs sm:text-sm text-muted-foreground mt-1">
                        <li>Step 1: Heavy compounding</li>
                        <li>Step 2: Intermediate polish</li>
                        <li>Step 3: Finishing polish</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">
                      ~95–98% defect removal
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">
                      Showroom-level gloss & reflection
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">
                      Designed for restorations & show cars
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base">
                      Time: 12+ hours or multi-day
                    </p>
                  </div>
                </div>
              </CardContent>
              <div className="p-4 sm:p-6 pt-0">
                <a href="/booking">
                  <Button
                    variant="outline"
                    className="gap-2 w-full text-sm sm:text-base"
                  >
                    Get Custom Quote <MoveRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </Card>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export { Pricing };
