"use client"
import { useRouter } from "next/navigation";
import { motion, useScroll } from "motion/react"
import { useRef } from "react"
import { MaskText } from "./masktext";
import AnimatedText from "./text-animation-scroll";
const topText =
  ["I’m Mosabbir,  a full-stack developer,", "crafting modern,scalable web platforms", "where engineering meets thoughtful product design."]


const bottomText =
  "I specialize in backend architecture, APIs, and building reliable systems using Node.js, Next.js, and modern cloud infrastructure."


export default function About() {
  const ref = useRef(null)
  const router = useRouter()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["300px end", "end end"]
  })

  return (
    <section
      ref={ref}
      id="about"
      className="bg-black min-h-screen flex items-end overflow-hidden"
    >

      {/* ARC WRAPPER */}
      <div className="w-full ">

        <div className="bg-gray-50 rounded-t-[100px] sm:rounded-t-[25%] border border-gray-200 flex flex-col min-h-screen">

          <div className="max-w-5xl mx-auto px-6   flex flex-col flex-1 justify-center text-center gap-12">

            {/* TOP TEXT */}
            <div className="text-2xl sm:text-4xl lg:text-5xl font-light leading-relaxed text-gray-900">
              <MaskText phrases={topText} />
            </div>

            {/* BOTTOM TEXT */}
            <div className="max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                <AnimatedText
                  text={bottomText}
                  scrollYProgress={scrollYProgress}
                />
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mx-auto px-8 py-3 rounded-full border border-gray-300 text-sm tracking-wide text-gray-800 hover:bg-gray-900 hover:text-white transition"
              onClick={() => router.push("/about")}
            >
              About Me
            </motion.button>

          </div>

        </div>

      </div>

    </section>
  )
}
