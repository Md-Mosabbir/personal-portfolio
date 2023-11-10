import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <main className="mt-10 mb-8 px-8 h-screen flex justify-between gap-10">
      <h1 className="font-poppins text-7xl font-600">Projects.</h1>

      <div className="  w-1/2 h-full grid grid-cols-2 gap-3 ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </main>
  )
}

export default Projects
