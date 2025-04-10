type Project = {
  header: string
  description: string
  photoUrl?: string
}

type ProjectCardProps = {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { header, description, photoUrl } = project

  return (
    <div className="bg-white dark:bg-neutral-800 rounded shadow overflow-hidden">
      {photoUrl && (
        <div className="mb-0">
          <img
            src={photoUrl}
            alt={header}
            className="w-full h-25 object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 dark:text-white">{header}</h2>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard