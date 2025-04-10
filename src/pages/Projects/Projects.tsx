import ProjectCard from '../../components/Cards/ProjectCard/ProjectCard'
import projects from '../../assets/data/projects.json'

function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Projects Page</h1>
      <div className="columns-1 md:columns-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="mb-6 break-inside-avoid">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects