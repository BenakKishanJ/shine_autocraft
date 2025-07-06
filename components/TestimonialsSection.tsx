import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "James Wilson",
      handle: "@jamesdetailing",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "The best car detailing service I’ve ever used! My SUV looks brand new again. The interior shampoo was worth every penny.",
    href: "https://twitter.com/jamesdetailing",
  },
  {
    author: {
      name: "Sarah Johnson",
      handle: "@sarahrides",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "I take my Mercedes here every month—flawless paint correction and ceramic coating. These guys are true professionals.",
    href: "https://twitter.com/sarahrides",
  },
  {
    author: {
      name: "Michael Brown",
      handle: "@mikesgarage",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "Had a full exterior detail before selling my car, and it increased the resale value by $1,500. Unbelievable results!",
  },
];

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Trusted by car enthusiasts nationwide"
      description="Join thousands of satisfied customers who keep their vehicles looking showroom-ready"
      testimonials={testimonials}
    />
  );
}
