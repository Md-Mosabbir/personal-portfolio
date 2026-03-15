"use client"

import { motion } from "motion/react"
import { useRef, useState, ReactNode } from "react"

type MagneticButtonProps = {
  children: ReactNode
}

type Position = {
  x: number
  y: number
}

export default function MagneticButton({ children }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()

    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)

    setPosition({ x: middleX, y: middleY })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <motion.div
      ref={ref}
      style={{ position: "relative" }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 50, damping: 10, mass: 0.1 }}
    >
      {children}
    </motion.div>
  )
}
