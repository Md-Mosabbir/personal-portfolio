const Navigation = () => {
  return (
    <header className="h-36  flex justify-end py-10 px-8 items-center gap-14">
      <nav className="w-[500px]">
        <ul className="flex w-full justify-between font-poppins font-400 text-xl  tracking-tight">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About Me</a>
          </li>
        </ul>
      </nav>
      <button className="font-inter text-base w-52 h-20 bg-primary font-700 rounded-3xl">
        Contact Me
      </button>
    </header>
  )
}

export default Navigation
