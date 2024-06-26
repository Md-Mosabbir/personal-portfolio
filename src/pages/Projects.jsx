import { motion, useScroll } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import BattleShip from '../assets/images/png/Battleship.png'
import swiftPost from '../assets/images/png/Swift-Post.png'
import cvApp from '../assets/images/png/cv.png'
import banglaBites from '../assets/images/png/Bangla-bites.png'
import { useRef } from 'react'

const projects = [
  {
    name: 'BattleShip',

    link: 'https://md-mosabbir.github.io/Battleship/',
    image: BattleShip,
    technology: ['HTML', 'CSS', 'JavaScript', 'Jest', 'Webpack'],
    color: '#0d0d0d',
  },
  {
    name: 'Swift-Post',

    link: 'https://swift-post.onrender.com/',
    image: swiftPost,
    technology: [
      'EJS',
      'Vite',
      'Node.js',
      'Express',
      'MongoDB',
      'Tailwind CSS',
    ],
    color: '#090909',
  },
  {
    name: 'CV generator',
    link: 'https://cv-generator-nine.vercel.app/',
    image: cvApp,
    technology: ['React', 'Tailwind CSS', 'Vercel', 'Vite'],
    color: '#050505',
  },
  {
    name: 'Bangla-Bites',
    link: 'https://bangla-bites.vercel.app/',
    image: banglaBites,
    technology: ['GSAP', 'Tailwind CSS', 'JavaScript', 'Vite'],
    color: '#111111',
  },
]

const Projects = () => {
  const container = useRef()

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <motion.div
      className="pt-10 bg-neutralBlack pb-48 px-8   flex justify-between gap-16
      flex-col"
    >
      <motion.h1
        className="font-poppins text-neutralWhite text-center text-7xl font-600
        max-lg:text-5xl
         
        max-xs:text-2xl"
      >
        Projects
      </motion.h1>

      {/* Main container */}

      <div className="w-full border-primary relative h-[650vh]" ref={container}>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            link={project.link}
            image={project.image}
            rotationProgress={scrollYProgress}
            technology={project.technology}
            range={{
              range: [i * 0.25, 1],
              i,
              target: 1 - (projects.length - i) * 0.05,
            }}
            color={project.color}
          />
        ))}
      </div>
    </motion.div>
  )
}
export default Projects
