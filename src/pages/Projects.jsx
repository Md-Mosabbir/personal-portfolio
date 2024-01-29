import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import BattleShip from '../assets/images/png/Battleship.png'
import swiftPost from '../assets/images/png/Swift-Post.png'
import cvApp from '../assets/images/png/cv.png'
import banglaBites from '../assets/images/png/Bangla-bites.png'

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
      flex-col "
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
        className="w-1/2 h-full self-end
      max-3xl:w-3/4  
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
            image={BattleShip}
          />
          <ProjectCard
            name={'Swift-Post'}
            number={'2'}
            link={'https://swift-post.onrender.com/'}
            image={swiftPost}
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
            image={cvApp}
          />
          <ProjectCard
            name={'Bangla-Bites'}
            number={'4'}
            link={'https://bangla-bites.vercel.app/'}
            image={banglaBites}
          />
        </div>
      </div>
    </motion.main>
  )
}
export default Projects
