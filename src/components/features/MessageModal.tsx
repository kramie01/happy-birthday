import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import type { Memory } from "@/data/mockData";

interface MessageModalProps {
  memory: Memory | null;
  onClose: () => void;
}

const MessageModal = ({ memory, onClose }: MessageModalProps) => {
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
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-background/60 p-2 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold text-primary">
                Message from {memory.caption}
              </span>
            </div>

            <h3 className="mb-4 pr-10 text-xl font-extrabold text-foreground sm:text-2xl">
              {memory.title}
            </h3>

            <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground sm:text-base">
              {memory.message}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MessageModal;
