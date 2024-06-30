import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import { MacbookScrollDemo } from '../components/Mackbook'
import { GoogleGemini } from '../components/Gemini'
const FullPages = () => {
  return (
    <>
      <Home />
      <GoogleGemini />
      <MacbookScrollDemo />
      <Projects />
      <Contact />
    </>
  )
}

export default FullPages
