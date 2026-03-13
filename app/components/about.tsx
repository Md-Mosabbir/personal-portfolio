"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

const topText =
  "I’m Mosabbir — a full-stack developer crafting modern, scalable web platforms where engineering meets thoughtful product design."


const bottomText =
  "I specialize in backend architecture, APIs, and building reliable systems using Node.js, Next.js, and modern cloud infrastructure."

function AnimatedText({ text, scrollYProgress }: any) {
  const words = text.split(" ")

  return (
    <>
      {words.map((word: string, i: number) => {
        const start = i / words.length
        const end = start + 1 / words.length

        const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
        const y = useTransform(scrollYProgress, [start, end], [40, 0])

        return (
          <motion.span
            key={i}
            style={{ opacity, y }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        )
      })}
    </>
  )
}

export default function About() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["300px end", "end end"]
  })

  const delayedProgress = useTransform(scrollYProgress, [0.1, 1], [0, 1])

  return (
    <section
      ref={ref}
      id="about"
      className="bg-black min-h-screen flex items-end overflow-hidden"
    >

      {/* ARC WRAPPER */}
      <div className="w-[120%] ">

        <div className="bg-gray-50 rounded-t-[100px] sm:rounded-t-[25%] border border-gray-200 flex flex-col min-h-screen">

          <div className="max-w-5xl mx-auto px-6 flex flex-col flex-1 justify-center text-center gap-12">

            {/* TOP TEXT */}
            <p className="text-3xl sm:text-4xl lg:text-5xl font-light leading-relaxed text-gray-900">
              <AnimatedText
                text={topText}
                scrollYProgress={scrollYProgress}
              />
            </p>

            {/* BOTTOM TEXT */}
            <div className="max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                <AnimatedText
                  text={bottomText}
                  scrollYProgress={delayedProgress}
                />
              </p>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mx-auto px-8 py-3 rounded-full border border-gray-300 text-sm tracking-wide text-gray-800 hover:bg-gray-900 hover:text-white transition"
            >
              About Me
            </motion.button>

          </div>

        </div>

      </div>

    </section>
  )
}
