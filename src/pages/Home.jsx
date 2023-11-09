import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Arrow from '../assets/images/svg/arrow.svg'
export const Home = () => {
  return (
    <main className=" h-[355px] px-8 mt-24 flex justify-between items-center">
      <div className="font-poppins">
        <span className=" text-xl font-400  text-neutralBlack ">Hi, I am</span>
        <h1 className=" text-7xl text-neutralBlack font-600 tracking-[-1.395px] w-[1070px] h-[246px] ">
          MD MOSABBIR HOSSAIN KHAN
        </h1>
        <h2 className="text-secondary text-[40px] mt-2 font-400">
          Passionate Front-end Developer🔥!
        </h2>
      </div>
      <aside className=" h-full">
        <ul className=" text-base font-inter font-600  flex flex-col justify-between items-center  h-full mt-[60px] ">
          <li className="h-16 bg-secondary w-32 flex items-center justify-center transform -rotate-90 origin-top">
            <a href="">GITHUB</a>
          </li>
          <li className="h-16 bg-secondary w-32 flex items-center justify-center transform -rotate-90 origin-top">
            <a href="">LINKEDIN</a>
          </li>
          <li className="h-16 bg-secondary w-32 flex items-center justify-center transform -rotate-90 origin-top">
            <a href="">MAIL</a>
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
