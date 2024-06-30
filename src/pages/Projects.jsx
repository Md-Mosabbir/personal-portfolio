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
      'The Battleship Game Project is a web-based recreation of the classic naval combat game, built with Webpack, HTML, CSS, and JavaScript. This project offers a dynamic and engaging user experience, featuring comprehensive unit testing with Jest to ensure reliable and robust gameplay. Designed with responsiveness in mind, the game provides a seamless experience on desktops, tablets, and mobile devices.\nUtilizing a modern development stack, the project employs Webpack for efficient module bundling, HTML for structure, CSS for responsive styling, and JavaScript for interactive game logic. Each component is rigorously tested with Jest, ensuring that the game functions correctly and smoothly. The clean and user-friendly interface makes it easy for players of all ages to navigate and enjoy the game.\nOne of the standout features of this Battleship Game Project is its customizable ship skins, allowing players to choose from multiple designs and enhance the visual appeal of their gameplay. The interactive gameplay includes intuitive drag-and-drop functionality for placing ships and engaging turn-based combat mechanics, capturing the essence of the classic Battleship game while providing a modern twist.\nOverall, this project showcases modern web development practices, combining sleek design, reliable functionality, and an engaging user experience. It serves as an excellent example of a fully functional, tested, and responsive web application.',
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
      'Swift-Post is a sophisticated full-stack social media journaling web application where users can chronicle and archive their life moments, sharing them with a global audience. Built on Node.js and Express, with EJS for templating, and leveraging Vite and Tailwind CSS for frontend development, Swift-Post offers a seamless user experience.\nAt its core, Swift-Post enables users to create personal journals enriched with text and multimedia entries, fostering a digital repository of memories. The Node.js backend ensures robust data handling, user authentication, and database interactions, prioritizing security and reliability.\nOn the frontend, Vite facilitates rapid development with modern JavaScript modules, while Tailwind CSS delivers responsive and customizable styling, ensuring a polished interface across devices. Users can effortlessly navigate and interact with their journals, leveraging EJS for dynamic content rendering and a fluid user interface.\nKey features include intuitive journal management, seamless sharing capabilities for publishing journals, and fostering connections through shared experiences. Swift-Post embodies a contemporary approach to digital journaling, empowering users to curate their stories while fostering community engagement.\nWith its blend of powerful backend functionality and modern frontend design principles, Swift-Post redefines social media journaling by providing a robust platform for personal storytelling and connection in a digital landscape.',
  },
  {
    name: 'CV generator',
    link: 'https://cv-generator-nine.vercel.app/',
    image: cvApp,
    technology: ['React', 'Tailwind CSS', 'Vercel', 'Vite'],
    color: '#050505',
    description:
      'The Real-Time CV Generator is an innovative web application built with React.js and powered by Vite, a lightning-fast bundler. This tool allows users to create and customize their CVs in real-time, with instant updates and a user-friendly interface.\nUtilizing React.js, the CV generator offers a dynamic and responsive experience, enabling users to input and edit their professional information seamlessly. Vite optimizes the development process by providing quick module bundling and efficient dependency management, ensuring a smooth and efficient workflow.\nKey features include a live preview of the CV as it is being edited, allowing users to visualize the layout and content in real-time. The application supports multiple sections such as personal information, education, work experience, skills, and projects, each customizable to suit individual preferences.\nDesigned for practicality, the CV generator includes a printable output feature, ensuring that the finalized CV can be easily exported or printed for use in job applications or networking purposes. The interface is intuitive, guiding users through the process of creating a professional CV with ease.\nBy combining the robust capabilities of React.js for dynamic UI components and Vite for rapid development and bundling, the Real-Time CV Generator sets a new standard for efficient and user-centric CV creation, empowering users to craft personalized and polished resumes effortlessly.',
  },
  {
    name: 'Bangla-Bites',
    link: 'https://bangla-bites.vercel.app/',
    image: banglaBites,
    technology: ['GSAP', 'Tailwind CSS', 'JavaScript', 'Vite'],
    color: '#111111',
    description:
      "Bangla-Bites is a contemporary restaurant website crafted with JavaScript, HTML, and CSS, enhanced with GSAP for smooth scroll animations and responsive design principles. This visually appealing site showcases a modern and sleek interface, aimed at providing an immersive dining experience online.\nThe website features optimized images and responsive animations, ensuring fast loading times and seamless transitions across various devices. GSAP (GreenSock Animation Platform) adds fluidity to the user experience, with smooth scroll animations that enhance navigation and engagement.\nKey highlights of Bangla-Bites include a user-friendly layout that showcases the restaurant's ambiance and menu offerings effectively. The design focuses on intuitive navigation, allowing visitors to explore different sections such as menu options, reservations, and location details effortlessly.\nBuilt with performance in mind, the website leverages CSS for sleek styling and HTML for structured content presentation. JavaScript enhances interactivity, providing functionalities such as interactive menus, image galleries, and contact forms for reservations.\nBangla-Bites not only serves as an informative platform for potential customers but also reflects the restaurant's commitment to quality and modern aesthetics. It exemplifies how a well-crafted web presence can enhance the dining experience by seamlessly blending visual appeal with functionality and user engagement.",
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

      <div className="w-full border-primary relative h-[700vh]" ref={container}>
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
