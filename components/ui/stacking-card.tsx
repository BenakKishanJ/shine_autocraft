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
      className="h-screen flex items-center justify-center sticky top-0 text-black pt-12 md:pt-20"
    >
      <div
        ref={container}
        className="w-full h-full flex items-center justify-center"
      >
        <motion.div
          style={{
            backgroundColor: color,
            scale,
            top: `calc(-5vh + ${i * 20}px)`,
          }}
          className={`flex flex-col relative -top-[25%] h-auto md:h-auto w-[95vw] sm:w-[85vw] md:w-[70vw] max-w-[95%] sm:max-w-[85%] md:max-w-[70%] rounded-md p-3 sm:p-4 md:p-6 origin-top`}
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
                <p className="text-xs sm:text-sm mb-2 line-clamp-3">
                  {description}
                </p>
                <ul className="mb-3 space-y-1">
                  {features.slice(0, 4).map((feature, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-sm list-disc list-inside line-clamp-1"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="flex items-center gap-2 mt-auto">
                <a
                  href={"#"}
                  target="_blank"
                  className="underline cursor-pointer text-xs sm:text-sm"
                >
                  See more
                </a>
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Desktop Layout - Side by side */}
          <div className={`hidden md:flex gap-6 lg:gap-8`}>
            <div className={`w-[45%] flex flex-col justify-center`}>
              <p className="text-sm lg:text-base mb-3 lg:mb-4">{description}</p>
              <ul className="mb-4 lg:mb-6 space-y-1">
                {features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm lg:text-base list-disc list-inside"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="flex items-center gap-2">
                <a
                  href={"#"}
                  target="_blank"
                  className="underline cursor-pointer text-sm lg:text-base"
                >
                  See more
                </a>
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="black"
                  />
                </svg>
              </span>
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
