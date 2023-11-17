import { motion } from 'framer-motion'
import avatar from '../assets/images/png/avatar.jpg'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 }, // Adjust the duration as needed
  },
}

const AboutMe = () => {
  return (
    <motion.div
      className="mt-10 px-8 flex justify-start flex-col gap-10 h-screen"
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      variants={fadeInAnimationVariants}
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
        <p className="w-full text-[20px] max-xs:text-[15px]">
          Welcome to my corner of the digital realm! I&apos;m Mosabbir, a
          passionate front-end developer with a knack for crafting visually
          stunning and functionally impeccable websites. With a toolkit that
          includes HTML, CSS, and JavaScript, I bring digital visions to life.
          But that&apos;s not where it stops – I&apos;ve embraced the power of
          React, Git, and Tailwind CSS to elevate the web development
          experience. My journey in the world of code is a thrilling adventure
          where pixels meet purpose. Armed with a keen eye for design and an
          unwavering commitment to user experience, I specialize in turning
          ideas into interactive and responsive web solutions. I believe in the
          magic that happens when clean code and creative design converge. In
          this fast-paced digital landscape, I am dedicated to staying on the
          cutting edge of technology and design trends. The challenge of
          transforming concepts into seamless, dynamic websites fuels my passion
          for coding. Collaborative by nature, I thrive in team environments and
          am always ready to bring fresh ideas to the table. Beyond the lines of
          code, I&apos;m a professional with a jolly demeanor, committed to
          fostering positive and efficient working relationships. I&apos;m not
          just here to build websites; I&apos;m here to create digital
          experiences that leave a lasting impression. Let&apos;s embark on this
          digital journey together. I&apos;m excited to bring your web vision to
          life, one pixel at a time!
        </p>
        <div className="">
          <img
            src={avatar}
            alt={avatar}
            className="h-full  aspect-square w-[1000px] object-cover border border-accent shadow max-lg:w-[700px] "
          />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutMe
