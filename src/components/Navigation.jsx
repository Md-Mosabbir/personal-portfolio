import { NavLink, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Option from './Option'
import SideMenu from './SideMenu'

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

const Navigation = () => {
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  }

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    // Set initial state
    handleResize()

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <motion.header
        className="h-36 flex justify-end py-10 px-8 items-center gap-14"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        {!visible && (
          <button
            onClick={handleToggleMenu}
            className="font-inter text-base w-28 h-16 bg-primary font-700 rounded-3xl z-50"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        )}

        {!visible && (
          <SideMenu toggle={menuOpen} handleToggle={handleToggleMenu} />
        )}

        {visible && (
          <nav className="w-[500px]">
            <ul className="flex w-full justify-between font-poppins font-400 text-base tracking-tight">
              {options.map((option, i) => (
                <Option
                  key={i}
                  data={option}
                  variant={navVariants}
                  className="text-xl font-bold text-neutralBlack"
                />
              ))}
            </ul>
          </nav>
        )}

        <NavLink to={'contact'} className="!border-b-0 max-lg:hidden">
          <button className="font-inter text-base w-52 h-20 bg-primary font-700 rounded-3xl">
            Contact Me
          </button>
        </NavLink>
      </motion.header>
      <main className="py-2 my-4">
        <Outlet />
      </main>
    </>
  )
}

export default Navigation
