import { motion } from 'framer-motion'
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 },
  },
}
const ProjectCard = ({ name, number, link }) => {
  return (
    <motion.article
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div className="flex justify-between items-center">
        <h3 className="pl-1 font-poppins text-base">{name}</h3>
        <h2 className="font-poppins text-2xl text-primary">{number}</h2>
      </div>

      <a href={link}>
        <div className="bg-neutralBlack min-w-[380px] h-64"></div>
      </a>
    </motion.article>
  )
}

export default ProjectCard
