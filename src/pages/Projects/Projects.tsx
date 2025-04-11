import ProjectCard from '../../components/Cards/ProjectCard/ProjectCard'
import projects from '../../assets/data/projects.json'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Projects Page</h1>
      <div className="columns-1 md:columns-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="mb-6 break-inside-avoid"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects