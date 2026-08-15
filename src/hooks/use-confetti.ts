import { useCallback } from "react";
import confetti from "canvas-confetti";

export function useConfetti() {
  return useCallback(() => {
    const duration = 1000;
    const end = Date.now() + duration;

    const colors = ["#ffb6c1", "#ff69b4", "#fff", "#2b0769", "#ff1493"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Big center burst
    confetti({
      particleCount: 500,
      spread: 100,
      origin: { y: 0.5 },
      colors,
    });
  }, []);
}
