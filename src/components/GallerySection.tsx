import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { memories } from "@/data/mockData";

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <h2 className="mb-2 text-3xl font-extrabold text-foreground sm:text-4xl">
          Photo <span className="text-primary">Gallery</span>
        </h2>
      </motion.div>

      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {memories.map((memory, i) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group mb-4 cursor-pointer overflow-hidden rounded-xl break-inside-avoid"
            onClick={() => setLightbox(i)}
          >
            <div className="relative">
              <img
                src={memory.imageUrl}
                alt={memory.title}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/30" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background to-transparent p-3 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-xs text-muted-foreground">{memory.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-xl"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-4 top-4 rounded-full border border-border bg-secondary p-2 text-foreground"
              onClick={() => setLightbox(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={memories[lightbox].imageUrl}
              alt={memories[lightbox].title}
              className="max-h-[80vh] max-w-full rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 text-center">
              <p className="text-sm text-muted-foreground">{memories[lightbox].caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
