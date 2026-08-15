import { useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react";
import { memories, genres, formatGenres, type Memory } from "@/data/mockData";

interface MemoryGridProps {
  onSelectMemory: (memory: Memory) => void;
}

const MemoryGrid = ({ onSelectMemory }: MemoryGridProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeGenre, setActiveGenre] = useState("All");
  const trending = memories.slice(0, 10);
  const filtered =
    activeGenre === "All" ? memories : memories.filter((m) => m.genres.includes(activeGenre));

  const [shuffleKey, setShuffleKey] = useState(0);
  const explored = useMemo(() => {
    return [...filtered].sort(() => Math.random() - 0.5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGenre, shuffleKey]);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const CardItem = ({ memory, index }: { memory: Memory; index: number }) => (
    <motion.div
      key={memory.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.05, y: -4 }}
      onClick={() => onSelectMemory(memory)}
      className="group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-lg"
      style={{ width: "160px", aspectRatio: "3/4" }}
    >
      <img
        src={memory.imageUrl}
        alt={memory.title}
        loading="lazy"
        width={320}
        height={448}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70" />
      <div className="absolute inset-x-0 bottom-0 p-3">
        <span className="text-2xl font-black leading-none text-primary/60">
          {memory.id}
        </span>
        <p className="mt-1 truncate text-xs font-semibold text-foreground">
          {memory.caption}
        </p>
      </div>
      <div className="absolute inset-x-0 top-0 translate-y-[-100%] bg-primary/90 p-3 text-center transition-transform duration-300 group-hover:translate-y-0">
        <p className="text-xs font-bold text-primary-foreground">
          {memory.title}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6">

      {/* Trending */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center justify-between"
      >
        <h3 className="text-lg font-extrabold text-primary sm:text-xl">
          Trending
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="rounded-full border border-border bg-secondary/50 p-2 text-foreground transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="rounded-full border border-border bg-secondary/50 p-2 text-foreground transition-colors hover:bg-secondary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {trending.map((memory, index) => (
          <CardItem key={memory.id} memory={memory} index={index} />
        ))}
      </div>

      {/* Explore */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 mt-10 flex items-center justify-between"
      >
        <h3 className="text-lg font-extrabold text-primary sm:text-xl">
          Explore
        </h3>
        <button
          onClick={() => setShuffleKey((k) => k + 1)}
          className="flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Shuffle className="h-3.5 w-3.5" />
          Shuffle
        </button>
      </motion.div>

      {/* Genre tabs */}
      <div className="mb-5 flex gap-2 overflow-x-auto pb-1 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setActiveGenre(genre)}
            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              activeGenre === genre
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {explored.map((memory, index) => (
          <motion.div
            key={`${shuffleKey}-${memory.id}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -4 }}
            onClick={() => onSelectMemory(memory)}
            className="group relative cursor-pointer overflow-hidden rounded-lg"
            style={{ aspectRatio: "3/4" }}
          >
            <img
              src={memory.imageUrl}
              alt={memory.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70" />
            <div className="absolute inset-x-0 bottom-0 p-3">
              <p className="truncate text-xs font-semibold text-foreground">{memory.caption}</p>
              <span className="text-[10px] text-muted-foreground">{formatGenres(memory.genres)}</span>
            </div>
            <div className="absolute inset-x-0 top-0 translate-y-[-100%] bg-primary/90 p-3 text-center transition-transform duration-300 group-hover:translate-y-0">
              <p className="text-xs font-bold text-primary-foreground">{memory.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoryGrid;
