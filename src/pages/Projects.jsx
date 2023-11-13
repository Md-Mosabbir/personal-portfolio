import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
}

const Projects = () => {
  return (
    <motion.main
      className="mt-10 mb-8 px-8 h-screen flex justify-between gap-10 
      max-3xl:flex-col "
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      variants={fadeInAnimationVariants}
    >
      <motion.h1
        className="font-poppins text-7xl font-600
        max-lg:text-5xl
         
        max-xs:text-2xl"
        variants={fadeInAnimationVariants}
      >
        Projects.
      </motion.h1>

      <div
        className="w-1/2 h-full  
      max-3xl:w-3/4 max-3xl:self-end 
      max-xl:w-full
      
      max-md:h-auto max-md:overflow-y-scroll max-md:p-4
      "
      >
        <div
          className="flex justify-between gap-8
        max-md:flex-wrap"
        >
          <ProjectCard
            name={'BattleShip'}
            number={'1'}
            link={'https://md-mosabbir.github.io/Battleship/'}
          />
          <ProjectCard
            name={'Weather-App'}
            number={'2'}
            link={'https://md-mosabbir.github.io/Weather-App/'}
          />
        </div>
        <div
          className="flex justify-between gap-8
        max-md:flex-wrap"
        >
          <ProjectCard
            name={'CV generator'}
            number={'3'}
            link={'https://cv-generator-nine.vercel.app/'}
          />
          <ProjectCard
            name={'Galactic Recall'}
            number={'4'}
            link={'https://galactic-recall.vercel.app/'}
          />
        </div>
      </div>
    </motion.main>
  )
}
export default Projects
