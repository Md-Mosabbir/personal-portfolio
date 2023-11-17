import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'

const FullPages = () => {
  const [loading, setLoading] = useState(true)
  const controls = useAnimation()

  useEffect(() => {
    const loaderAnimation = async () => {
      await controls.start('visible')
      await new Promise((resolve) => setTimeout(resolve, 1500))
      await controls.start('hidden')
      setLoading(false)
    }

    loaderAnimation()
  }, [controls, loading])

  const loaderVariants = {
    hidden: { opacity: 0, y: '100%' },
    visible: { opacity: 1, y: '0%', transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50"
          variants={loaderVariants}
          initial="visible"
          animate={controls}
          exit="exit"
        >
          <motion.div className="flex flex-col items-center">
            <motion.h1
              className=" px-8 font-inter font-700 text-2xl font-bold mb-4 
            max-lg:text-xl 
            max-xl:text-base
            max-xs:text-[1.2rem]"
              initial={{ y: '50px' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Brace yourself, the website is loading!
            </motion.h1>
            <div className="w-32 h-2 bg-gray-300 rounded-md mt-2">
              <motion.div
                className="h-full bg-primary rounded-md"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <>
          <Home />
          <Projects />
          <Contact />
        </>
      )}
    </AnimatePresence>
  )
}

export default FullPages
