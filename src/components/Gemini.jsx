import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { GoogleGeminiEffect } from './ui/google-gemini-effect'

export function GoogleGemini() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2])
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2])
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2])
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2])
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2])

  return (
    <div
      className="h-[400vh] bg-neutralBlack w-full   relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title={'A Small Introduction'}
        description={
          'I am a Front-end Developer with a passion for creating beautiful and functional user interfaces. I am a self-taught developer who loves to learn new things and solve problems. '
        }
      />
    </div>
  )
}
