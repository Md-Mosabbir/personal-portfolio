import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Props = {
  phrases: string[];
};

export function MaskText({ phrases }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, {
    amount: 0.75,
    once: true,
  });

  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0%",
      transition: {
        duration: 1.25,
        ease: [0.33, 1, 0.68, 1] as const,
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div ref={ref} className="flex items-center flex-col gap-1">
      {phrases.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          <motion.p
            custom={index}
            variants={animation}
            className="inline-block"
            initial="initial"
            animate={inView ? "enter" : "initial"}
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
