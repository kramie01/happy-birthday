import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import type { Memory } from "@/data/mockData";

interface MemoryModalProps {
  memory: Memory | null;
  onClose: () => void;
}

const MemoryModal = ({ memory, onClose }: MemoryModalProps) => {
  return (
    <AnimatePresence>
      {memory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-background/60 p-2 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image */}
            <div className="relative h-64 sm:h-80">
              <img
                src={memory.imageUrl}
                alt={memory.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 overlay-gradient" />
              <div className="absolute bottom-4 left-6">
                <span className="text-6xl font-black text-foreground/20">
                  {memory.id}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {memory.date}
                </span>
              </div>
              <h3 className="mb-1 text-2xl font-extrabold text-foreground sm:text-3xl">
                {memory.title}
              </h3>
              <p className="mb-4 text-sm font-medium text-primary">
                {memory.caption}
              </p>
              <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground sm:text-base">
                {memory.message}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MemoryModal;
