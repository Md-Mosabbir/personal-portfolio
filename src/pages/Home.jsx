import { motion } from 'framer-motion'
import Arrow from '../assets/images/svg/arrow.svg'
import Github from '../assets/images/svg/github.svg'
import LinkedIn from '../assets/images/svg/linkedin.svg'
import Mail from '../assets/images/svg/mail.svg'

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }

  const asideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.4 } },
  }

  return (
    <motion.section
      className="h-[85vh] px-8 flex justify-between overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="font-poppins pt-24 " variants={textVariants}>
        <span
          className="  font-400 text-neutralBlack text-xl
          max-sm:text-[1.1rem] max-lg:text-base
          max-xs:text-[0.8rem]"
        >
          Hello, I am
        </span>
        <h1
          className="text-7xl    text-neutralBlack font-700  tracking-[-1.395px] max-w-[1340px] 
            
            max-lg:text-5xl 
            max-sm:h-auto max-sm:text-2xl max-sm:max-w-[360px]
            max-xs:text-[1.5rem]"
        >
          MD MOSABBIR HOSSAIN KHAN
        </h1>
        <h2
          className="text-secondary text-[40px] mt-2 font-400 
          max-lg:text-base 
          max-sm:text-[1.1rem]
          max-xs:text-[0.6rem]"
        >
          Passionate Front-end Developer🔥!
        </h2>
      </motion.div>

      <motion.aside className="pt-24  w-[20%] " variants={asideVariants}>
        <ul
          className="flex flex-col items-end gap-24
          max-lg:gap-16
        max-xs:gap-8"
        >
          <li
            className="
            max-sm:w-10
          max-xs:w-6"
          >
            <a
              href="https://github.com/Md-Mosabbir/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="github" />
            </a>
          </li>
          <li
            className="max-sm:w-10
          max-xs:w-6"
          >
            <a
              href="https://www.linkedin.com/in/mosabbir-khan-867b641a5/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} alt="linkedin" />
            </a>
          </li>
          <li
            className="  max-sm:w-10
          max-xs:w-6"
          >
            <a
              href="mailto:mosabbir.fwd@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Mail} alt="mail" />
            </a>
          </li>
        </ul>

        {/* <LinkCard link={'mailto:mosabbir.fwd@gmail.com'} name={'MAIL'} /> */}
      </motion.aside>

      <motion.div className="absolute bottom-0 left-1/2 p-1 flex flex-col justify-center items-center gap-2">
        <p
          className="font-poppins text-xs
        max-sm:text-[0.8rem]
        max-xs:text-[0.6rem]
        "
        >
          See My Projects
        </p>
        <img
          src={Arrow}
          alt="swipe-down"
          className="max-sm:w-16
          max-xs:w-6"
        />
      </motion.div>
    </motion.section>
  )
}
