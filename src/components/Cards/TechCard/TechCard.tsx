type TechCardProps = {
    icon: string
    title: string
    description: string
}

const TechCard: React.FC<TechCardProps> = ({ icon, title, description }) => {
    return (
        <div className="flex items-center bg-white dark:bg-neutral-800 rounded shadow p-2 w-full min-w-[250px]">
            <div className="flex-shrink-0">
                <img src={icon} alt={title} className="w-10 h-10 drop-shadow" />
            </div>
            <div className="ml-4 flex-grow text-left">
                <h3 className="text-md font-bold dark:text-white">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>
            </div>
        </div>
    )
}

export default TechCard