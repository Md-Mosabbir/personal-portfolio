import { useTransform, motion } from "motion/react"

export default function AnimatedText({ text, scrollYProgress }: any) {

  const words = text.split(" ")

  return (
    <>
      {words.map((word: string, i: number) => {
        const start = i / words.length
        const end = start + 1 / words.length

        const delayStart = 0.6
        const duration = 1 - delayStart

        const opacity = useTransform(
          scrollYProgress,
          [delayStart + start * duration, delayStart + end * duration],
          [0, 1]
        )

        const y = useTransform(
          scrollYProgress,
          [delayStart + start * duration, delayStart + end * duration],
          [40, 0]
        )

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
