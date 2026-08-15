import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Menu, X, Filter } from "lucide-react";
import { memories, formatGenres, type Memory } from "@/data/mockData";

const navLinks = ["Moments", "Messages", "Gallery"];

interface NavBarProps {
  onSelectMemory: (memory: Memory) => void;
}

const NavBar = ({ onSelectMemory }: NavBarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const searchResults = useMemo(() => {
    if (!normalizedQuery) return [];

    return memories
      .filter((memory) =>
        [
          memory.title,
          memory.caption,
          memory.message,
          memory.date,
          ...memory.genres,
        ].some((field) => field.toLowerCase().includes(normalizedQuery)),
      )
      .slice(0, 5);
  }, [normalizedQuery]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-extrabold tracking-tight text-foreground"
        >
          h<span className="text-primary">!</span>birthday
        </a>

        {/* Search bar — desktop */}
        <div className="hidden flex-1 items-center justify-center px-8 md:flex">
          <div className="relative w-full max-w-md">
            <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 150)}
                placeholder="Search a greeting..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              <button
                type="button"
                className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <Filter className="h-3 w-3" />
              </button>
            </div>

            {isSearchFocused && normalizedQuery && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                {searchResults.length > 0 ? (
                  <>
                    {searchResults.map((memory) => (
                      <button
                        key={memory.id}
                        type="button"
                        onMouseDown={() => {
                          setSearchQuery(memory.title);
                          onSelectMemory(memory);
                        }}
                        className="flex w-full items-center gap-3 border-b border-border/70 px-3 py-3 text-left transition-colors hover:bg-secondary/60 last:border-b-0"
                      >
                        <img
                          src={memory.imageUrl}
                          alt={memory.title}
                          className="h-12 w-12 rounded object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {memory.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {memory.date} • {formatGenres(memory.genres)} •{" "}
                            {memory.caption}
                          </p>
                        </div>
                      </button>
                    ))}
                    <div className="bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground">
                      View all results
                    </div>
                  </>
                ) : (
                  <div className="px-3 py-3 text-sm text-muted-foreground">
                    No matching memories found.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
          <button className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground transition-shadow hover:glow-pink">
            Login
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border bg-background px-4 py-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="mt-3 flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search memories..."
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;
