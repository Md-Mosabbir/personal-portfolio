import { motion } from 'framer-motion'
import avatar from '../assets/images/png/avatar.jpg'
import Logo from '../components/Logo'

import HTML from '../assets/images/logos/html.png'
import CSS from '../assets/images/logos/css.png'
import JS from '../assets/images/logos/js.png'
import REACT from '../assets/images/logos/react.png'
import NODE from '../assets/images/logos/node.png'
import MONGO from '../assets/images/logos/mongo.png'

const AboutMe = () => {
  return (
    <motion.div
      className="mt-10 px-8 flex justify-start flex-col gap-10 h-screen"
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <h1
        className="font-poppins text-7xl font-600
      max-lg:text-5xl
      max-xs:text-2xl"
      >
        About Me
      </h1>
      <div
        className="flex justify-between items-start gap-32 pb-16 
      max-xl:flex-wrap-reverse max-xl:gap-12  max-xl:justify-center"
      >
        <p className="w-full text-[20px] max-xs:text-[15px] leading-9 pt-10 rounded-2xl">
          Welcome, I greet you with the greetings of peace. I am a passionate,
          visionary, and creative individual wanting to use my knowledge to help
          solve real-world problems. I specialize in front-end development, but
          I do have a grasp of back-end development. I have used{' '}
          {<Logo src={HTML} alt={'HTML logo'} />} HTML,{' '}
          {<Logo src={CSS} alt={'CSS logo'} />} CSS and{' '}
          {<Logo src={JS} alt={'Javascript logo'} />} Javascript for a long time
          to create different kinds of projects. Later, I learned{' '}
          {<Logo src={REACT} alt={'React js logo'} />} React JS and developed
          various SPA (Single Page Application). Also, I studied various web
          animation frameworks and library includes Framer Motion and GSAP. I
          also had the opportunity to learn about{' '}
          {<Logo src={NODE} alt={'Node js logo'} />} Node js and{' '}
          {<Logo src={MONGO} alt={'MongoDB logo'} />} MongoDB to understand the
          world of Back-end development. Moreover, I stay updated with the
          latest trends within the web development community and try to learn
          some new techniques or libraries.
        </p>
        <div className="">
          <img
            src={avatar}
            alt={avatar}
            className="h-full  aspect-square w-[1000px] object-cover border border-accent shadow max-lg:w-[700px] rounded-3xl"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutMe
