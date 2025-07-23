"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
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
  const mainContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const { scrollYProgress: mainScrollProgress } = useScroll({
    target: mainContainer,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const range: [number, number] = [i * 0.25, 1];
  const scale = useTransform(mainScrollProgress, range, [1, targetScale]);

  // Dynamic offset based on card index and screen size
  const cardOffset = i * 15; // Reduced from 20px to 15px for tighter stacking

  return (
    <div
      ref={mainContainer}
      className="h-screen flex items-center justify-center sticky top-0 text-white pt-12 md:pt-20"
    >
      <div
        ref={container}
        className="w-full h-full flex items-center justify-center"
      >
        <motion.div
          style={{
            scale,
            top: `calc(-5vh + ${i * 20}px)`,
            boxShadow: `0 0 20px ${color}, 0 0 40px ${color}, 0 0 60px ${color}`,
            borderColor: color,
          }}
          className={`flex flex-col relative -top-[25%] h-auto md:h-auto w-[95vw] sm:w-[85vw] md:w-[70vw] max-w-[95%] sm:max-w-[85%] md:max-w-[70%] rounded-md p-3 sm:p-4 md:p-6 origin-top bg-card border-2`}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl text-center font-extrabold mb-2 sm:mb-3 md:mb-4">
            {title}
          </h2>
          {/* Mobile/Tablet Layout - Image after title, then text */}
          <div className="flex flex-col md:hidden gap-3 sm:gap-4 min-h-[380px] sm:min-h-[420px]">
            <div
              className={`relative w-full h-[180px] sm:h-[200px] rounded-lg overflow-hidden flex-shrink-0`}
            >
              <motion.div
                className={`w-full h-full`}
                style={{ scale: imageScale }}
              >
                <img
                  src={url}
                  alt="image"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div className={`w-full flex flex-col flex-1 justify-between`}>
              <div>
                <p className="text-xs sm:text-sm mb-2 line-clamp-3 text-muted-foreground">
                  {description}
                </p>
                <ul className="mb-3 space-y-1">
                  {features.slice(0, 4).map((feature, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-sm line-clamp-1 text-muted-foreground flex items-start"
                    >
                      <span className="text-white mr-2 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Side by side */}
          <div className={`hidden md:flex gap-6 lg:gap-8`}>
            <div className={`w-[45%] flex flex-col justify-center`}>
              <p className="text-sm lg:text-base mb-3 lg:mb-4 text-muted-foreground">
                {description}
              </p>
              <ul className="mb-4 lg:mb-6 space-y-1">
                {features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm lg:text-base list-disc list-inside text-muted-foreground"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`relative w-[55%] h-[300px] lg:h-[350px] rounded-lg overflow-hidden`}
            >
              <motion.div
                className={`w-full h-full`}
                style={{ scale: imageScale }}
              >
                <img
                  src={url}
                  alt="image"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
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
        <main className="bg-black" ref={ref}>
          <section className="text-white w-full bg-black">
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
              return (
                <Card
                  key={`p_${i}`}
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
