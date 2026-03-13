"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { fadeInUp, staggerContainer } from "../animations/reveal"

const experiences = [
  {
    year: "2023",
    title: "WordPress Developer Trainee",
    description:
      "First professional development experience focused on WordPress customization and real production workflows.",
  },
  {
    year: "2024",
    title: "Full-Stack E-commerce Development",
    description:
      "Built a complete e-commerce platform using MedusaJS, Node.js, and Next.js deployed on Microsoft Azure.",
  },
  {
    year: "2025",
    title: "Full-Stack Developer at Chatpoka",
    description:
      "Worked on multiple startup projects including NextGen Circuits (Next.js frontend migration), TechFlow.live backend development, and Cloudflare R2 streaming infrastructure.",
  },
]

const Timeline = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 100, damping: 30 }
  )

  // Background transition
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 0.85],
    ["#d4d4d4", "#000000", "#000000", "#d4d4d4"]
  )

  // Text color reacts with background
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 0.85],
    ["#000000", "#ffffff", "#ffffff", "#000000"]
  )

  const subText = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["#4b5563", "#9ca3af", "#9ca3af", "#4b5563"]
  )

  return (
    <motion.section
      ref={sectionRef}
      className="pt-40 pb-56 relative overflow-hidden min-h-[200vh]"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-32"
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center mb-4"
            variants={fadeInUp}
            style={{ color: textColor }}
          >
            Experience
          </motion.h2>

          <motion.p
            className="text-center"
            variants={fadeInUp}
            style={{ color: subText }}
          >
            Key milestones that shaped my{" "}
            <span className="text-brand font-medium">engineering journey</span>.
          </motion.p>
        </motion.div>

        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 w-0.5 h-full bg-brand/20">
            <motion.div
              className="w-full bg-brand origin-top shadow-[0_0_30px_rgba(63,198,116,0.9)]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Items */}
          <motion.div className="space-y-64">

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-14 sm:pl-24"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >

                {/* Dot */}
                <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-brand rounded-full border-4 border-black shadow-[0_0_20px_rgba(63,198,116,0.9)]" />

                {/* Content */}
                <div>
                  <span className="text-sm font-semibold text-brand tracking-wide">
                    {exp.year}
                  </span>

                  <motion.h3
                    className="text-2xl font-semibold mt-2 mb-3"
                    style={{ color: textColor }}
                  >
                    {exp.title}
                  </motion.h3>

                  <motion.p
                    className="leading-relaxed max-w-xl"
                    style={{ color: subText }}
                  >
                    {exp.description}
                  </motion.p>
                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}

export default Timeline
