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
    description:
      'This is the classic Battleship game created using HTML, CSS and JavaScript. Webpack is the bundler. The ships contain two unique skins and they can placed anywhere within the board using the drag-and-drop feature. The game is played against an AI by taking turns. The code has been unit-tested using Jest and the website is fully responsive across all devices.',
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
    description:
      'Swift-Post is a social media journaling app and users can store memories of their journeys and share them with everyone. It uses Node JS and Express on the backend and EJS as the templating engine and it uses MongoDB as the database. The website is fully responsive across all devices.Basic credentials (email/username, password) are used for authentication and handled by passport JS.',
  },
  {
    name: 'CV generator',
    link: 'https://cv-generator-nine.vercel.app/',
    image: cvApp,
    technology: ['React', 'Tailwind CSS', 'Vercel', 'Vite'],
    color: '#050505',
    description:
      "The Real-Time CV Generator is a  CV-generating web app created using React JS and Vite as a bundler. It uses React's useState hook and props to make it feel like the CV is generated in real time. The UI is intuitive and simple for the users to navigate. The CV can be printed for the users to use. ",
  },
  {
    name: 'Bangla-Bites',
    link: 'https://bangla-bites.vercel.app/',
    image: banglaBites,
    technology: ['GSAP', 'Tailwind CSS', 'JavaScript', 'Vite'],
    color: '#111111',
    description:
      "Bangla-Bites is a restaurant website created using HTML, CSS, JavaScript and GSAP as the animation library. The website contains various scroll-triggered animations and mouse animations for an immersive and distinctive experience. The navigation button's animation is done using pure CSS. The website is responsive.",
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
      className="pt-10 bg-neutralBlack pb-48 max-xs:px-4  px-8   flex justify-between gap-16
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

      <div
        className="w-full border-primary relative min-h-screen"
        ref={container}
      >
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
            description={project.description}
          />
        ))}
      </div>
    </motion.div>
  )
}
export default Projects
