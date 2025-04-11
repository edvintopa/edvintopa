import TechCard from '../../Cards/TechCard/TechCard'
import techStack from '../../../assets/data/techstack.json'

const TechStack: React.FC = () => {
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
            {techStack.map((tech, index) => (
                <TechCard key={index} icon={tech.icon} title={tech.title} description={tech.description} />
            ))}
        </div>
    )
}

export default TechStack