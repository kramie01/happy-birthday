import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import entryBg from "@/assets/entry-bg.jpg";

interface EntryGateProps {
  onEnter: () => void;
}

const topSearches = [
  "Frieren: Beyond Journey's End",
  "Spy × Family",
  "Fruits Basket",
  "Detective Conan",
  "Avatar: The Last Airbender",
  "Demon Slayer: Kimetsu no Yaiba",
  "The Apothecary Diaries",
  "Dandadan"
];

const EntryGate = ({ onEnter }: EntryGateProps) => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={entryBg}
          alt="Birthday collage background"
          className="h-full w-full object-cover opacity-20"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex max-w-lg flex-col items-center text-center sm:items-start sm:text-left"
        >
          {/* Logo */}
          <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            h<span className="text-primary">!</span>birthday
          </h1>

          {/* Search bar */}
          <div className="mb-6 flex w-full max-w-md items-center gap-2">
            <div className="flex flex-1 items-center rounded-lg border border-border bg-secondary/40 px-4 py-3">
              <input
                type="text"
                placeholder="Search a memory..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                readOnly
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-lg bg-primary p-3 text-primary-foreground transition-shadow hover:glow-pink"
            >
              <Search className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Top searches */}
          <div className="mb-8 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground/70">Top search: </span>
            {topSearches.map((s, i) => (
              <span key={s}>
                {s}
                {i < topSearches.length - 1 ? ",  " : ""}
              </span>
            ))}
          </div>

          {/* Enter button */}
          <motion.button
            onClick={onEnter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-shadow hover:glow-pink-lg animate-pulse-glow"
          >
            Enter Celebration
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default EntryGate;
