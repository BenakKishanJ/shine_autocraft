"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "motion/react";
import { useRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ProjectData {
  title: string;
  description: string;
  features: string[];
  link: string;
  color: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  features: string[];
  url: string;
  color: string;
  totalCards: number;
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  features,
  url,
  color,
  totalCards,
  targetScale,
}: CardProps) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Simplified scaling - only one transform per element
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const cardScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 0.95, targetScale],
  );

  // Fixed positioning instead of dynamic calculations
  const cardOffset = i * 20;

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 text-white"
      style={{ top: `${cardOffset}px` }}
    >
      <motion.div
        style={{
          scale: cardScale,
          boxShadow: `0 0 20px ${color}, 0 0 40px ${color}, 0 0 60px ${color}`,
          borderColor: color,
        }}
        className="relative w-full max-w-4xl mx-4 md:mx-8 rounded-md p-4 md:p-6 bg-card border-2 overflow-hidden"
      >
        {/* Unified Layout for all devices */}
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl font-extrabold mb-4 text-center text-white">
            {title}
          </h2>

          {/* Image Section - Always on top after title */}
          <div className="mb-6">
            <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden bg-gray-900">
              <motion.img
                src={url}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ scale: imageScale }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Content Section - Below image */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <p className="text-sm md:text-base mb-4 text-muted-foreground leading-relaxed">
                {description}
              </p>
              <ul className="space-y-2">
                {features.slice(0, 5).map((feature, index) => (
                  <li
                    key={index}
                    className="text-sm md:text-base text-muted-foreground flex items-start"
                  >
                    <span className="text-white mr-2 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
}

const Component = forwardRef<HTMLElement, ComponentRootProps>(
  ({ projects }, ref) => {
    return (
      <ReactLenis root>
        <main className="bg-black min-h-screen" ref={ref}>
          <section className="text-white w-full">
            {projects.map((project, i) => {
              const targetScale = Math.max(
                0.85,
                1 - (projects.length - i) * 0.03,
              );
              return (
                <Card
                  key={i}
                  i={i}
                  url={project.link}
                  title={project.title}
                  color={project.color}
                  description={project.description}
                  features={project.features}
                  totalCards={projects.length}
                  targetScale={targetScale}
                />
              );
            })}
          </section>
        </main>
      </ReactLenis>
    );
  },
);

Component.displayName = "Component";

export default Component;
