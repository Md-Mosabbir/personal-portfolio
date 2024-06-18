import { menuSlide, slide } from '../animations/hamburger'
import Option from './Option'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { AnimatePresence } from 'framer-motion'
const options = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
]

const SideMenu = ({ toggle, handleToggle }) => {
  return (
    <AnimatePresence mode="wait">
      {toggle && (
        <motion.section
          className="w-full fixed left-0 top-0 h-screen z-30 text-neutralWhite bg-neutralBlack"
          variants={menuSlide}
          initial="initial"
          exit="exit"
          animate="enter"
        >
          <nav>
            <ul className="flex w-full justify-between font-poppins font-400 text-base tracking-tight flex-col mt-[150px] gap-3">
              {options.map((option, i) => (
                <div key={i} className="w-full ml-10" onClick={handleToggle}>
                  <Option
                    data={{ ...option, index: i }}
                    variant={slide}
                    className={'option text-2xl font-bold  text-neutralWhite'}
                  />
                </div>
              ))}
            </ul>
          </nav>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

// Prop types
SideMenu.propTypes = {
  toggle: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
}

export default SideMenu
