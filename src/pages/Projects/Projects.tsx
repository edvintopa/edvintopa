import ProjectCard from '../../components/ProjectCard/projectcard'

const sampleProjects = [
  {
    header: 'Project Alpha',
    description:
      'Project Alpha is a fantastic project that demonstrates amazing functionality.',
    photoUrl:
      'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww'
  },
  {
    header: 'Project Beta',
    description:
      'Project Beta explores innovative design and creative concepts.'
  },
  {
    header: 'Project Beta',
    description:
      'Project Beta explores innovative design and creative concepts.'
  },
  {
    header: 'Project Beta',
    description:
      'Project Beta explores innovative design and creative concepts.'
  },
  {
    header: 'Project Beta',
    description:
      'Project Beta explores explores explores explores explores explores explores explores explores explores explores explores explores explores explores explores explores explores innovative design and creative concepts.'
  },
  {
    header: 'Project Gamma',
    description:
      'Project Gamma introduces cool features with a modern approach.',
    photoUrl:
      'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww'
  }
]

function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Projects Page</h1>
      <div className="columns-1 md:columns-3 gap-6">
        {sampleProjects.map((project, index) => (
          <div key={index} className="mb-6 break-inside-avoid">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects