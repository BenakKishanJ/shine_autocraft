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
    <div className="w-full py-20 lg:py-40 bg-black">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="secondary">Service Tiers</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Choose Your Level of Correction
            </h2>
            <p className="text-[16px] leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Whether you're looking for a quick refresh or full paint
              restoration, our packages deliver.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            {/* One-Step Correction */}
            <Card className="w-full rounded-lg flex flex-col">
              <CardHeader>
                <CardTitle className="font-normal text-2xl">
                  One-Step Correction
                </CardTitle>
                <CardDescription>
                  Gloss enhancement for newer or well-maintained vehicles
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>Light swirl & haze removal</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>Single-stage machine polish</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>~60–70% defect removal</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>Restores gloss & clarity</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>Ideal for newer or well-maintained paint</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>Time: 4–6 hours</p>
                  </div>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button variant="outline" className="gap-2 w-full">
                  Get Custom Quote <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            {/* Two-Step Correction */}
            <Card className="w-full rounded-lg shadow-lg flex flex-col">
              <CardHeader>
                <CardTitle className="font-normal text-2xl">
                  Two-Step Correction
                </CardTitle>
                <CardDescription>
                  Comprehensive correction for daily drivers
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>Removes moderate swirls, oxidation & water spots</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <div>
                      <p>Dual-stage machine process</p>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1">
                        <li>Step 1: Compounding</li>
                        <li>Step 2: Fine polish</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>~80–90% defect removal</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>Restores high-gloss finish</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>Great for daily drivers & older paint</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>Time: 6–10 hours</p>
                  </div>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="gap-2 w-full">
                  Get Custom Quote <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            {/* Three-Step Correction */}
            <Card className="w-full rounded-lg flex flex-col">
              <CardHeader>
                <CardTitle className="font-normal text-2xl">
                  Three-Step Correction
                </CardTitle>
                <CardDescription>
                  Complete restoration for show cars and collectors
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>Removes deep scratches & heavy defects</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <div>
                      <p>Triple-stage correction process</p>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1">
                        <li>Step 1: Heavy compounding</li>
                        <li>Step 2: Intermediate polish</li>
                        <li>Step 3: Finishing polish</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>~95–98% defect removal</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>Showroom-level gloss & reflection</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>Designed for restorations & show cars</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-1 text-primary" />
                    <p>Time: 12+ hours or multi-day</p>
                  </div>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button variant="outline" className="gap-2 w-full">
                  Get Custom Quote <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };
