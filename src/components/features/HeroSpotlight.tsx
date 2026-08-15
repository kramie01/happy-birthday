import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronRight, ChevronLeft } from "lucide-react";
import heroBirthday from "@/assets/hero-birthday.jpg";
import {
  birthdayName,
  birthdayDate,
  featuredMessage,
  memories,
  type Memory,
} from "@/data/mockData";
import { cn } from "@/lib/utils";

const LONG_TITLE_LENGTH = 35;

const isLongHeroTitle = (title: string, highlight: string) => {
  const fullTitle = `${title}${highlight}`.trim();
  const wordCount = fullTitle.split(/\s+/).filter(Boolean).length;

  return fullTitle.length > LONG_TITLE_LENGTH || wordCount >= 6;
};

const spotlightMemories = memories.slice(0, 10);

const slides = [
  {
    image: heroBirthday,
    badge: "I love you",
    title: `Happy Birthday, `,
    highlight: birthdayName + `!`,
    date: birthdayDate,
    description: featuredMessage,
    tag: "🎂 Special",
    memory: null as Memory | null,
  },
  ...spotlightMemories.map((m, i) => ({
    image: m.imageUrl,
    badge: `#${i + 1} Spotlight`,
    title: "",
    highlight: m.title,
    date: m.date,
    description: m.message,
    tag: m.caption,
    memory: m,
  })),
];

interface HeroSpotlightProps {
  onSelectMemory: (memory: Memory) => void;
}

const HeroSpotlight = ({ onSelectMemory }: HeroSpotlightProps) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + slides.length) % slides.length);
  }, []);

  // Auto-advance every 8s
  useEffect(() => {
    const timer = setInterval(() => go(1), 8000);
    return () => clearInterval(timer);
  }, [go]);

  const slide = slides[index];
  const isLongTitle = isLongHeroTitle(slide.title, slide.highlight);

  const handleViewMemory = () => {
    if (slide.memory) {
      onSelectMemory(slide.memory);
      return;
    }

    document
      .getElementById("memory-grid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDetail = () => {
    document.getElementById("messages")?.scrollIntoView({ behavior: "smooth" });
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <section
      id="moments"
      className="relative h-[70vh] min-h-[480px] overflow-hidden"
    >
      {/* Background image with crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt="Featured memory"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

      {/* Text content */}
      <div
        className={cn(
          "relative z-10 flex h-full",
          isLongTitle ? "items-end pb-24 pt-8 sm:pb-28" : "items-center",
        )}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className={cn(
              "max-w-2xl px-6 sm:px-10 lg:px-16",
              isLongTitle && "w-full overflow-hidden",
            )}
          >
            <span
              className={cn(
                "inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary",
                isLongTitle ? "mb-2" : "mb-3",
              )}
            >
              {slide.badge}
            </span>

            <h2
              className={cn(
                "font-extrabold leading-tight text-foreground",
                isLongTitle
                  ? "mb-3 text-2xl sm:text-3xl lg:text-4xl"
                  : "mb-4 text-4xl sm:text-5xl lg:text-6xl",
              )}
            >
              {slide.title}
              <span
                className={cn(
                  "text-gradient-pink",
                  isLongTitle && "block break-words line-clamp-3",
                )}
              >
                {slide.highlight}
              </span>
            </h2>

            <div
              className={cn(
                "flex flex-wrap items-center text-xs text-muted-foreground",
                isLongTitle ? "mb-3 gap-2" : "mb-4 gap-3",
              )}
            >
              <span className="rounded bg-primary/20 px-2 py-0.5 font-semibold text-primary">
                {slide.tag}
              </span>
              {slide.date ? <span>📅 {slide.date}</span> : null}
              <span className="rounded bg-secondary px-2 py-0.5 font-semibold text-secondary-foreground">
                HD
              </span>
            </div>

            <p
              className={cn(
                "max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base",
                isLongTitle ? "mb-4 line-clamp-3" : "mb-6 line-clamp-4",
              )}
            >
              {slide.description}
            </p>

            <div
              className={cn(
                "flex items-center gap-3",
                isLongTitle && "flex-wrap gap-2 sm:gap-3",
              )}
            >
              <motion.button
                type="button"
                onClick={handleViewMemory}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "flex items-center gap-2 rounded-full bg-primary font-bold text-primary-foreground transition-shadow hover:glow-pink",
                  isLongTitle
                    ? "px-4 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm"
                    : "px-6 py-3 text-sm",
                )}
              >
                <Play className="h-4 w-4 fill-current" />
                View Memory
              </motion.button>
              <motion.button
                type="button"
                onClick={handleDetail}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "flex items-center gap-2 rounded-full border border-border bg-secondary/50 font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary",
                  isLongTitle
                    ? "px-4 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm"
                    : "px-6 py-3 text-sm",
                )}
              >
                Detail
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div className="absolute right-4 bottom-4 z-20 flex max-w-[calc(100%-2rem)] items-center gap-2 sm:right-10 sm:bottom-8 sm:gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => go(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.button>

        {/* Dot indicators */}
        <div className="flex max-w-[9rem] gap-1.5 overflow-x-auto scrollbar-hide sm:max-w-none">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => go(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronRight className="h-5 w-5" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSpotlight;
