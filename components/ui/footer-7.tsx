import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Services",
    links: [
      { name: "Paint Correction", href: "/#services" },
      { name: "Ceramic Coating", href: "/#services" },
      { name: "Detailing Packages", href: "/#services" },
      { name: "Mobile & Drop-off", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Gallery", href: "/gallery" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "FAQs", href: "#" },
      { name: "Support", href: "#" },
      { name: "Booking Guide", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  {
    icon: <FaInstagram className="size-5" />,
    href: "https://www.instagram.com/shineautocraft/",
    label: "Instagram",
  },
  {
    icon: <FaFacebook className="size-5" />,
    href: "https://www.instagram.com/shineautocraft/",
    label: "Facebook",
  },
  {
    icon: <FaTwitter className="size-5" />,
    href: "https://www.instagram.com/shineautocraft/",
    label: "Twitter",
  },
  {
    icon: <FaLinkedin className="size-5" />,
    href: "https://www.instagram.com/shineautocraft/",
    label: "LinkedIn",
  },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    src: "/logo.png",
    alt: "Shine Autocraft logo",
    title: "Shine Auto Craft",
  },
  sections = defaultSections,
  description = "Premium auto detailing, ceramic coating, and paint restoration services in Surrey, BC. We bring back that showroom shine.",
  socialLinks = defaultSocialLinks,
  copyright = " 2025 Shine Autocraft. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col justify-between gap-8 md:gap-10 lg:gap-12 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-4 sm:gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-12 sm:h-15"
                />
              </a>
              <h2 className="text-xl sm:text-2xl font-extrabold">
                {logo.title}
              </h2>
            </div>
            <p className="max-w-full sm:max-w-[80%] lg:max-w-[70%] text-sm sm:text-base text-muted-foreground">
              {description}
            </p>
            <ul className="flex items-center space-x-4 sm:space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li
                  key={idx}
                  className="font-medium hover:text-primary transition-colors"
                >
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 xl:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-3 sm:mb-4 font-bold text-sm sm:text-base">
                  {section.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 sm:mt-8 flex flex-col justify-between gap-4 border-t py-6 sm:py-8 text-xs sm:text-sm font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 md:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 sm:flex-row sm:gap-4 md:order-2 md:gap-6">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary transition-colors">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
