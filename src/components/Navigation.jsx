import { NavLink, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Option from './Option'
import SideMenu from './SideMenu'

const Navigation = () => {
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

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
      name: 'About Me',
      link: '/about me',
    },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  }

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
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
      <motion.header className="h-30 flex justify-end py-5 px-4 lg:py-10 lg:px-8 items-center gap-14 bg-neutralBlack">
        {!visible && (
          <button
            onClick={handleToggleMenu}
            className="font-inter text-base w-24 h-14 bg-primary font-700 rounded-3xl z-50"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        )}

        {!visible && (
          <SideMenu toggle={menuOpen} handleToggle={handleToggleMenu} />
        )}

        {visible && (
          <nav className="w-[500px]">
            <ul className="flex w-full justify-between font-poppins font-400  tracking-tight">
              {options.map((option, i) => (
                <Option
                  key={i}
                  data={option}
                  variant={navVariants}
                  className="text-base lg:text-xl font-bold text-neutralWhite px-2 py-1"
                />
              ))}
            </ul>
          </nav>
        )}

        <NavLink to={'contact'} className="!border-b-0 xl:block hidden">
          <button className="font-inter text-base w-48 h-16 bg-primary font-700 rounded-3xl">
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
