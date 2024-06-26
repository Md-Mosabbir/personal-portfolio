import Arrow from '../assets/images/svg/arrow.svg'
import Github from '../assets/images/svg/github.svg'
import LinkedIn from '../assets/images/svg/linkedin.svg'
import Mail from '../assets/images/svg/mail.svg'
import ImageWindow from '../components/ImageWindow'

import AbstractOne from '../assets/images/png/Abs-3.jpg'
import AbstractTwo from '../assets/images/png/Abs-2.jpg'
import AbstractThree from '../assets/images/png/Abs.jpg'

import { Spotlight } from '../components/ui/Spotlight'
import { GoogleGemini } from '../components/Gemini'
import Title from '../components/Title'

const Home = () => {
  return (
    <>
      <section className="h-[110vh] max-xs:px-4  px-8 flex justify-between  overflow-hidden bg-neutralBlack  w-full  antialiased">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="font-poppins pt-14 w-full  flex justify-center max-sm:justify-start max-xs:justify-center  ml-30">
          <div className="text-neutralWhite">
            <p className="font-400 relative  text-[1.2rem] lg:text-xl sm:text-base w-full after:content-[''] after:absolute after:top-1/2 after:w-0 after:lg:w-[82%] after:h-[5px] after:bg-primary after:mx-2 after:-translate-y-1/2 after:rounded-full">
              Hello, I am
            </p>

            <div className="flex flex-col gap-2">
              <div className=" flex  gap-2 items-center">
                <Title title="MD" />
                <ImageWindow
                  img={AbstractOne}
                  alt="An abstract art"
                  className="sm:h-16 sm:w-44 w-28 h-10 max-xs:w-20 max-xs:h-8 xl:h-[5.5rem] xl:w-64"
                />
              </div>
              <div className=" flex gap-2 items-center">
                <ImageWindow
                  img={AbstractTwo}
                  alt="An abstract art"
                  className=" w-28 h-10 max-xs:w-20 max-xs:h-8 sm:h-16 sm:w-40 xl:h-[5.5rem] xl:w-60"
                />
                <span className=" font-600 border-b-4 border-primary xl:text-7xl sm:text-5xl text-[2.5rem] max-xs:text-base">
                  MOSABBIR
                </span>
              </div>

              <div className=" flex gap-2 items-center">
                <Title title="HOSSAIN" />
                <ImageWindow
                  img={AbstractThree}
                  alt="An abstract art"
                  className=" max-xs:w-20 max-xs:h-8 w-24 h-10 sm:h-16 sm:w-32 xl:h-[5.5rem] xl:w-56"
                />
                <Title title="KHAN" />
              </div>
            </div>
            <h2
              className="text-secondary mt-2 font-400 lg:text-xl text-base max-sm:text-[1rem] 
        "
            >
              Passionate Front-end Developer🔥!
            </h2>
          </div>
        </div>

        <aside className="pt-14 hidden md:block  xl:w-[5%]  ">
          <ul className="flex flex-col items-end xl:gap-20 gap-6">
            <li>
              <a
                href="https://github.com/Md-Mosabbir/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Github} alt="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mosabbir-khan-867b641a5/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LinkedIn} alt="linkedin" />
              </a>
            </li>
            <li>
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
      <GoogleGemini />
    </>
  )
}

export default Home
