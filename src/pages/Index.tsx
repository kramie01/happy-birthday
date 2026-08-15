import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import EntryGate from "@/components/shared/EntryGate";
import Dashboard from "@/components/features/Dashboard";
import { useConfetti } from "@/hooks/use-confetti";

const Index = () => {
  const [entered, setEntered] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const fireConfetti = useConfetti();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/background-music.mp3");
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const handleEnter = () => {
    setEntered(true);
    fireConfetti();
    void audioRef.current
      ?.play()
      .then(() => setIsMusicPlaying(true))
      .catch(() => setIsMusicPlaying(false));
  };

  const handleToggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      void audio
        .play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => setIsMusicPlaying(false));
      return;
    }

    audio.pause();
    setIsMusicPlaying(false);
  };

  return (
    <AnimatePresence mode="wait">
      {!entered ? (
        <EntryGate key="gate" onEnter={handleEnter} />
      ) : (
        <Dashboard
          key="dashboard"
          isMusicPlaying={isMusicPlaying}
          onToggleMusic={handleToggleMusic}
        />
      )}
    </AnimatePresence>
  );
};

export default Index;
