// demo.tsx
import React from "react";
import Component from "@/components/ui/stacking-card";

const projects = [
  {
    title: "Car Detailing & Ceramic Protection",
    description:
      "Comprehensive detailing for daily drivers, exotics, and classics.",
    features: [
      "Multi-stage paint correction",
      "Clay bar decontamination",
      "Iron & tar removal",
      "Engine bay detailing",
      "Headlight & trim restoration",
      "Interior ceramic coatings (leather, fabric, plastics)",
      "Glass, wheel, and full-body ceramic coatings",
    ],
    link: "car.jpeg",
    color: "#F8F9FA",
  },
  {
    title: "Motorcycle Detailing & Coating",
    description:
      "Precision detailing for all bikes with a focus on surface clarity and long-term protection.",
    features: [
      "Full-body polishing",
      "Ceramic coating application",
      "Decontamination & trim renewal",
      "Protection against road grime, UV, and moisture",
    ],
    link: "bike.jpeg",
    color: "#DC3545",
  },
  {
    title: "RV & Camper Van Detailing",
    description:
      "Professional care for large-format vehicles exposed to the elements. Ideal for long-term travel protection and maintaining resale value.",
    features: [
      "Exterior paint decontamination & correction",
      "Engine bay cleaning",
      "Headlight & trim restoration",
      "Full ceramic coating for paint, wheels, and interior surfaces",
    ],
    link: "van.jpeg",
    color: "#00ECFA",
  },
  {
    title: "Boat & Marine Surface Protection",
    description:
      "Specialized marine detailing for both freshwater and saltwater vessels. Designed for UV resistance, saltwater protection, and a lasting high-gloss finish.",
    features: [
      "Gel coat polishing",
      "Oxidation removal",
      "Marine-grade ceramic coatings",
      "Glass polishing & protective coating",
      "Trim restoration",
    ],
    link: "boat.jpeg",
    color: "#6F42C1",
  },
];

function CardScrollComponent() {
  return <Component projects={projects} />;
}

export { CardScrollComponent };
