import { NavLink, Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <header className="h-36  flex justify-end py-10 px-8 items-center gap-14   ">
        <nav className="w-[500px]">
          <ul className="flex w-full justify-between font-poppins font-400 text-base  tracking-tight">
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'projects'}>Projects</NavLink>
            </li>
            <li>
              <NavLink to={'about me'}>About Me</NavLink>
            </li>
          </ul>
        </nav>
        <button className="font-inter text-base w-52 h-20 bg-primary font-700 rounded-3xl">
          <NavLink to={'contact'}>Contact Me</NavLink>
        </button>
      </header>
      <Outlet />
    </>
  )
}

export default Navigation
