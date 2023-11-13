import { NavLink, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Navigation = () => {
  const [visible, setVisible] = useState(false)

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  }

  return (
    <>
      <motion.header
        className="h-36 flex justify-end py-10 px-8 items-center gap-14  "
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <button
          onClick={() => setVisible(visible ? false : true)}
          className=" hidden font-inter text-[1.3rem] w-24 h-16 bg-primary z-50 font-700 rounded-2xl 
          max-lg:block max-lg:fixed
          "
        >
          {visible ? 'Menu' : 'Close'}
        </button>
        <nav
          className={`w-[500px] ${
            !visible ? 'block' : 'hidden'
          } max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-screen max-lg:z-20  max-lg:w-full   max-lg:bg-accent`}
        >
          <ul className="flex w-full justify-between font-poppins font-400 text-base tracking-tight max-lg:flex-col max-lg:mt-[150px] max-lg:gap-3 ">
            <motion.li
              variants={navVariants}
              className="max-lg:border max-lg:px-4 max-lg:py-8  "
            >
              <NavLink to={'/'}>Home</NavLink>
            </motion.li>
            <motion.li
              variants={navVariants}
              className="max-lg:border max-lg:px-4 max-lg:py-8"
            >
              <NavLink to={'projects'}>Projects</NavLink>
            </motion.li>
            <motion.li
              variants={navVariants}
              className="max-lg:border max-lg:px-4 max-lg:py-8"
            >
              <NavLink to={'about me'}>About Me</NavLink>
            </motion.li>
          </ul>
        </nav>

        <NavLink to={'contact'} className="!border-b-0  max-lg:hidden">
          <button className="font-inter text-base w-52 h-20 bg-primary font-700 rounded-3xl">
            Contact Me
          </button>
        </NavLink>
      </motion.header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Navigation
