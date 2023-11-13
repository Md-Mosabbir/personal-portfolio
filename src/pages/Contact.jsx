import Github from '../assets/images/svg/github.svg'
import LinkedIn from '../assets/images/svg/linkedin.svg'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import InputFiled from '../components/InputFiled'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 }, // Adjust the duration as needed
  },
}

const Contact = () => {
  const form = useRef()

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_7klth62',
        'template_y3evmtr',
        form.current,
        'igQgmkYJhntMMUoQm',
      )
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <motion.section
      className="mt-10 px-8 flex justify-between gap-10 h-screen max-xl:flex-col   "
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      variants={fadeInAnimationVariants}
    >
      <div>
        <h1
          className="font-poppins text-7xl font-600
          max-lg:text-5xl
          max-xs:text-2xl"
        >
          Contact
        </h1>
        <ul className="flex gap-14 ">
          <li
            className="  max-lg:w-10
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
            className="  max-lg:w-10
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
        </ul>
      </div>

      <form
        className="min-w-[38rem] h-[42rem] px-8 py-7 mt-9  rounded-3xl shadow-lg flex flex-col items-center gap-7 bg-neutralWhite border-2  border-secondary 
        max-xl:self-end  max-xl:mt-0
        max-md:min-w-full"
        ref={form}
        onSubmit={sendEmail}
      >
        <InputFiled
          type={'text'}
          name={'from_name'}
          label={'Full-name'}
          placeholder={'Example: Md Mosabbir Hossain Khan'}
          id={'name'}
        />
        <InputFiled
          type={'email'}
          name={'from_email'}
          label={'Email'}
          placeholder={'Example: mosabbir.fwd@gmail.com'}
          id={'email'}
        />

        <textarea
          className="min-h-[200px] rounded-xl px-2 py-4 bg-accent font-poppins resize-none w-full"
          name="message"
          placeholder="Express your idea"
        />
        <button
          type="submit"
          className=" bg-neutralBlack text-neutralWhite w-48 h-20 text-inter-bold font-inter font-600 rounded-3xl
          max-lg:text-[1.3rem] max-lg:w-full max-lg:h-16  max-lg:rounded-2xl "
        >
          Submit
        </button>
      </form>
    </motion.section>
  )
}

export default Contact
