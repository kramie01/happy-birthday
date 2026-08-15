import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/layout/NavBar";
import HeroSpotlight from "./HeroSpotlight";
import MemoryGrid from "./MemoryGrid";
import MemoryModal from "./MemoryModal";
import MessagesSection from "./MessagesSection";
import GallerySection from "./GallerySection";
import type { Memory } from "@/data/mockData";
import { Heart, Music, Music2 } from "lucide-react";

interface DashboardProps {
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

const Dashboard = ({ isMusicPlaying, onToggleMusic }: DashboardProps) => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background"
    >
      <NavBar onSelectMemory={setSelectedMemory} />
      <HeroSpotlight onSelectMemory={setSelectedMemory} />
      <div id="memory-grid">
        <MemoryGrid onSelectMemory={setSelectedMemory} />
      </div>
      <MessagesSection />
      <GallerySection />
      <MemoryModal
        memory={selectedMemory}
        onClose={() => setSelectedMemory(null)}
      />

      <button
        type="button"
        onClick={onToggleMusic}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-border bg-background/95 px-4 py-2 text-xs font-semibold text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-secondary"
      >
        {isMusicPlaying ? (
          <Music2 className="h-4 w-4 text-primary" />
        ) : (
          <Music className="h-4 w-4" />
        )}
        {isMusicPlaying ? "Music On" : "Music Off"}
      </button>

      {/* Footer */}
      <footer className="border-t border-border py-12 text-center">
        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          Made with <Heart className="h-4 w-4 fill-primary text-primary" /> for
          Gwenny
        </p>
      </footer>
    </motion.div>
  );
};

export default Dashboard;
