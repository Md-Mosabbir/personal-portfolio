import Arrow from '../assets/images/svg/arrow.svg'
import Github from '../assets/images/svg/github.svg'
import LinkedIn from '../assets/images/svg/linkedin.svg'
import Mail from '../assets/images/svg/mail.svg'
import ImageWindow from '../components/ImageWindow'

import AbstractOne from '../assets/images/png/Abs-3.jpg'
import AbstractTwo from '../assets/images/png/Abs-2.jpg'
import AbstractThree from '../assets/images/png/Abs.jpg'

const Home = () => {
  return (
    <section className="h-[110vh] px-8 flex justify-between  overflow-hidden bg-neutralBlack">
      <div className="font-poppins pt-14 w-full  flex justify-center ml-30">
        <div className="text-neutralWhite">
          <p
            className="font-400 relative  text-xl
          max-sm:text-[1.1rem] max-lg:text-base
          max-xs:text-[0.8rem] w-full after:content-[''] after:absolute after:top-1/2 after:w-[82%] after:h-[5px] after:bg-primary after:mx-2 after:-translate-y-1/2 after:rounded-full"
          >
            Hello, I am
          </p>

          <div>
            <div className=" flex gap-6 items-center">
              <span className="text-7xl font-600">MD</span>
              <ImageWindow
                img={AbstractOne}
                alt="An abstract art"
                className="w-72 h-20 "
              />
            </div>
            <div className=" flex gap-6 items-center">
              <ImageWindow
                img={AbstractTwo}
                alt="An abstract art"
                className="w-72 h-20"
              />
              <span className="text-7xl font-600 border-b-4 border-primary">
                MOSABBIR
              </span>
            </div>

            <div className=" flex gap-6 items-center">
              <span className="text-7xl font-600">HOSSAIN</span>
              <ImageWindow
                img={AbstractThree}
                alt="An abstract art"
                className="w-44 h-20"
              />
              <span className="text-7xl font-600">KHAN</span>
            </div>
          </div>
          <h2
            className="text-secondary text-[40px] mt-2 font-400 
          max-lg:text-base 
          max-sm:text-[1.1rem]
          max-xs:text-[0.6rem]"
          >
            Passionate Front-end Developer🔥!
          </h2>
        </div>
      </div>

      <aside className="pt-14  w-[5%]  ">
        <ul
          className="flex flex-col items-end gap-20
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
      </aside>

      <div className="absolute bottom-0 left-1/2 p-1  flex-col justify-center items-center gap-2 hidden ">
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
      </div>
    </section>
  )
}

export default Home
