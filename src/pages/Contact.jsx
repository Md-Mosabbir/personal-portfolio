import { useState } from 'react'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import InputFiled from '../components/InputFiled'
import { motion } from 'framer-motion'
import MobileLinks from '../components/MobileLinks'

const Contact = () => {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const [inputValues, setInputValues] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })

  const sendEmail = (e) => {
    e.preventDefault()

    if (loading) {
      return // Do nothing if the form is already being submitted
    }

    setLoading(true)

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
          setSuccess(true)
          setLoading(false)
          // Clear input values after successful submission
          setInputValues({
            from_name: '',
            from_email: '',
            message: '',
          })

          // Hide success message after 5 seconds
          setTimeout(() => {
            setSuccess(false)
          }, 5000)
        },
        (error) => {
          console.log(error.text)
          setError('An error occurred. Please try again.')
          setLoading(false)
        },
      )
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputValues({
      ...inputValues,
      [name]: value,
    })
  }

  return (
    <motion.section className="py-12 px-8 flex justify-between items-center w-full   gap-10 min-h-screen flex-col bg-neutralBlack">
      <div>
        <h1
          className="font-poppins text-center text-7xl font-600 text-neutralWhite
          max-lg:text-5xl
          max-xs:text-2xl"
        >
          Contact
        </h1>
        <MobileLinks />
      </div>

      <form
        className="w-[36rem]  px-8 py-7 mt-4  rounded-3xl shadow-lg flex flex-col  items-center gap-7 
          max-xl:mt-0
        max-md:w-full"
        ref={form}
        onSubmit={sendEmail}
      >
        <InputFiled
          type={'text'}
          name={'from_name'}
          label={'Full-name'}
          placeholder={'Example: Md Mosabbir Hossain Khan'}
          id={'name'}
          value={inputValues.from_name}
          onChange={handleInputChange}
        />
        <InputFiled
          type={'email'}
          name={'from_email'}
          label={'Email'}
          placeholder={'Example: mosabbir.fwd@gmail.com'}
          id={'email'}
          value={inputValues.from_email}
          onChange={handleInputChange}
        />

        <textarea
          className="min-h-[200px]  px-2 py-4 border-y-2 bg-transparent font-poppins resize-none w-full text-neutralWhite "
          name="message"
          placeholder="Express your idea"
          value={inputValues.message}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-primary text-neutralBlack w-48 h-20 text-inter-bold font-inter font-600 rounded-3xl
          max-lg:text-[1.3rem] max-lg:w-full max-lg:h-16  max-lg:rounded-2xl "
          disabled={loading || success}
        >
          {loading ? (
            <span className="font-inter ml-2">Please Wait...</span>
          ) : (
            'Submit'
          )}
        </button>
        {success && (
          <span className="text-green-600 font-500">
            Submission successful!.
          </span>
        )}
        {error && <span className="text-red-600">{error}</span>}
      </form>
    </motion.section>
  )
}

export default Contact
