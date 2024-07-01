import { motion, useScroll, useTransform } from 'framer-motion'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import Tabs from './Tabs'
import bg from '../assets/images/png/bgCard.png'
const ProjectCard = ({
  name,
  color,
  technology,
  description,
  link,
  image,
  rotationProgress,
  range,
}) => {
  const container = useRef()

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  })

  const scaleImage = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scaleCards = useTransform(rotationProgress, range.range, [
    1,
    range.target,
  ])

  return (
    <motion.article
      ref={container}
      className="card w-full border  border-primary/[0.3] shadow-inner  sticky top-0   my-4 rounded-3xl px-2 py-2 mb-16 sm:px-8 sm:py-5"
      style={{
        scale: scaleCards,
        background: color,
      }}
    >
      <div className="flex justify-between items-center">
        <h3 className="pl-1 text-neutralWhite font-poppins text-xl sm:text-2xl font-700">
          {name}
        </h3>
      </div>
      <div className="flex gap-2 my-3 flex-wrap">
        {technology.map((tech) => (
          <Tabs key={tech} title={tech} />
        ))}
      </div>

      <div className="flex flex-col gap-3 ">
        <div
          className="xl:w-[65%] overflow-hidden rounded-lg flex pt-4"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <motion.img
            style={{ scale: scaleImage }}
            src={image}
            alt={image}
            className=" sm:mt-8 ml-auto h-full w-full sm:w-[90%] object-center rounded-lg   shadow"
          />
        </div>
        <a href={link} className="sm:rotate-1" target="_blank" rel="noreferrer">
          <Tabs title="Live Demo" />
        </a>
      </div>
      <div className="my-3 text-[1rem] sm:text-[1.1rem] font-poppins text-neutralWhite rounded-3xl">
        {description}
      </div>
    </motion.article>
  )
}

// Prop types
ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rotationProgress: PropTypes.object.isRequired,
  range: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  technology: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProjectCard
