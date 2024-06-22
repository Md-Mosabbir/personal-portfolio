import { motion, useScroll, useTransform } from 'framer-motion'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import Tabs from './Tabs'
import bg from '../assets/images/png/bgCard.png'
const ProjectCard = ({
  name,
  color,
  technology,

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
      className="card w-full border  border-primary/[0.3] shadow-inner h-[150vh] sticky top-0   my-4 rounded-3xl px-8 py-5"
      style={{
        scale: scaleCards,
        background: color,
      }}
    >
      <div className="flex justify-between items-center">
        <h3 className="pl-1 text-neutralWhite font-poppins text-2xl font-700 max-sm:text-[1.1rem] max-lg:text-base">
          {name}
        </h3>
      </div>
      <div className="flex gap-2 flex-wrap">
        {technology.map((tech) => (
          <Tabs key={tech} title={tech} />
        ))}
      </div>

      <div className="flex gap-10 ">
        <div
          className="w-[50%] overflow-hidden rounded-3xl  flex   pt-4"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <a href={link} className="rotate-1" target="_blank" rel="noreferrer">
            <motion.img
              style={{ scale: scaleImage }}
              src={image}
              alt={image}
              className=" mt-8 ml-auto h-full w-[90%] object-center rounded-2xl   shadow"
            />
          </a>
        </div>
      </div>
      <div className="my-6 text-[1.1rem]  text-neutralWhite rounded-3xl px-4 py-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias,
        eaque odit quia aliquid quos exercitationem labore, nisi laborum
        laboriosam eos culpa impedit nam voluptas et commodi voluptate eius, ab
        saepe cupiditate incidunt iure adipisci id. Alias, sapiente, eos nihil
        rem placeat harum ex ut itaque iusto, ducimus modi velit nam soluta iure
        id. Voluptas est repudiandae hic cumque tempore! Ullam quo ad saepe
        perspiciatis doloribus! Distinctio optio saepe quis veritatis quia
        doloribus repellendus et magni repudiandae dolor! A quisquam nemo
        perferendis molestiae possimus rerum quod cum blanditiis eligendi
        provident eius natus excepturi explicabo error, recusandae et asperiores
        eos laboriosam fugiat obcaecati. Aliquam repellendus ducimus molestias
        vero quasi amet temporibus illum, dolorum doloremque eaque et dolores
        exercitationem iusto facilis non numquam est eos quam aliquid explicabo
        deserunt alias enim! Atque dolores ea beatae illo iusto. Cumque soluta
        beatae tenetur ad facilis? Saepe corrupti dolorum nesciunt sapiente
        dicta nemo assumenda temporibus? Doloremque officiis, eaque harum illum
        molestiae cupiditate possimus eveniet nihil aspernatur quod atque error!
        Voluptatum voluptatibus libero eos ratione asperiores error distinctio
        animi harum optio sint! Rem magnam explicabo necessitatibus excepturi
        debitis eligendi temporibus provident, assumenda illo. Repellendus,
        vitae! Soluta quae nulla atque excepturi deserunt optio impedit animi
        suscipit saepe.
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
}

export default ProjectCard
