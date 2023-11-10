import Arrow from '../assets/images/svg/arrow.svg'
export const Home = () => {
  return (
    <main
      className=" h-[85vh]  px-8 
     flex justify-between"
    >
      <div className="font-poppins pt-24">
        <span className=" text-xl font-400  text-neutralBlack  ">
          Hello, I am
        </span>
        <h1 className=" text-7xl text-neutralBlack font-600 tracking-[-1.395px] w-[1070px] h-[246px]">
          MD MOSABBIR HOSSAIN KHAN
        </h1>
        <h2 className="text-secondary text-[40px] mt-2 font-400">
          Passionate Front-end Developer🔥!
        </h2>
      </div>
      <aside className="h-full">
        <ul className=" h-full text-base font-inter font-600  flex flex-col justify-center gap-36">
          <li className="h-16 bg-secondary w-32 flex items-center justify-center transform -rotate-90 origin-top">
            <a
              href="https://github.com/Md-Mosabbir/"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
          </li>
          <li className="h-16 bg-secondary w-32 flex items-center justify-center transform -rotate-90 origin-top">
            <a
              href="https://www.linkedin.com/in/mosabbir-khan-867b641a5/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
          </li>
          <li className="h-16 bg-secondary w-32 flex items-center justify-center transform -rotate-90 origin-top">
            <a href="mailto:mosabbir.fwd@gmail.com"> MAIL</a>
          </li>
        </ul>
      </aside>

      <div className="absolute bottom-0 left-1/2 p-1 flex flex-col justify-center items-center gap-2">
        <p className="font-poppins text-xs">See My Projects</p>
        <img src={Arrow} alt="swipe-down" />
      </div>
    </main>
  )
}
