import type { ReactNode } from "react";
import { motion } from "motion/react";
import { fadeUp } from "../../lib/portfolio-utils";

export default function SectionHeader({
  title,
  intro,
}: {
  title: ReactNode;
  intro?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl">

      <motion.h2
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.05 }}
        className="text-display mt-4 text-4xl sm:text-5xl lg:text-6xl text-foreground"
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}
