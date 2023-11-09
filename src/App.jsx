// import { motion } from 'framer-motion'
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

  return <RouterProvider router={router} />
}
