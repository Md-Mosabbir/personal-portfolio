import { useEffect, useState } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Navigation from './components/Navigation'

import FullPages from './pages'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import AboutMe from './pages/AboutMe'

export default function App() {
  const [isLandscape, setIsLandscape] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleOrientationChange = () => {
      const isLandscape = window.matchMedia('(orientation: landscape)').matches
      const isMobile = window.innerWidth <= 980 // Typical mobile device width threshold
      setIsLandscape(isLandscape)
      setIsMobile(isMobile)
    }

    window.addEventListener('resize', handleOrientationChange)
    window.addEventListener('orientationchange', handleOrientationChange)

    // Initial check
    handleOrientationChange()

    return () => {
      window.removeEventListener('resize', handleOrientationChange)
      window.removeEventListener('orientationchange', handleOrientationChange)
    }
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navigation />}>
        <Route index element={<FullPages />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about me" element={<AboutMe />} />
        <Route path="contact" element={<Contact />} />
      </Route>,
    ),
  )

  return (
    <div>
      {isMobile && isLandscape && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[1000000000] flex items-center justify-center bg-neutralBlack text-neutralWhite">
          Please rotate your device or resize it for the best experience.
        </div>
      )}
      <RouterProvider router={router} />
    </div>
  )
}
