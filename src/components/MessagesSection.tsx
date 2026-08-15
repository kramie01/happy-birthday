import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { memories, birthdayName, featuredMessage, type Memory } from "@/data/mockData";
import MessageModal from "./MessageModal";

const MessagesSection = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  return (
    <section id="messages" className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <h2 className="mb-2 text-3xl font-extrabold text-foreground sm:text-4xl">
          Birthday <span className="text-primary">Messages</span>
        </h2>
      </motion.div>

      {/* Featured message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-10 max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8"
      >
        <div className="mb-4 flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-primary" />
          <span className="text-sm font-bold text-primary">Featured Message</span>
        </div>
        <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground sm:text-base">
          {featuredMessage}
        </p>
      </motion.div>

      {/* Memory messages */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {memories.map((memory, i) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedMemory(memory)}
            className="group cursor-pointer rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
          >
            <div className="mb-3 flex items-center gap-3">
              <img
                src={memory.imageUrl}
                alt={memory.title}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-bold text-foreground">{memory.title}</h4>
              </div>
            </div>
              <p className="line-clamp-5 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
              {memory.message}
            </p>

            <p className="mt-5 text-xs text-muted-foreground">- {memory.caption}</p>

            {memory.message.length > 120 && (
              <p className="mt-3 text-xs font-semibold text-primary transition-colors group-hover:text-primary/80">
                Read full message →
              </p>
            )}
          </motion.div>
        ))}
      </div>

      <MessageModal memory={selectedMemory} onClose={() => setSelectedMemory(null)} />
    </section>
  );
};

export default MessagesSection;
