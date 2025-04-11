type Tech = {
    name: string
    logo: string
}

type Project = {
    header: string
    description: string
    photoUrl?: string
    repoUrl?: string
    techStack?: Tech[]
}
  
type ProjectCardProps = {
    project: Project
}
  
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { header, description, photoUrl, repoUrl, techStack } = project

    const cardContent = (
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
                {techStack && techStack.length > 0 && (
                    <div className="mt-4 flex space-x-2 justify-center">
                        {techStack.map((tech, index) => (
                            <img
                                key={index}
                                src={tech.logo}
                                alt={tech.name}
                                title={tech.name}
                                className="w-6 h-6"
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
  
    return repoUrl ? (
        <a 
            href={repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
        >
            {cardContent}
        </a>
    ) : cardContent
}
  
export default ProjectCard