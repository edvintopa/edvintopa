import React from 'react'

type TechCardProps = {
    icon: string
    title: string
    description: string
}

const TechCard: React.FC<TechCardProps> = ({ icon, title, description }) => {
    return (
        <div
            className="bg-white dark:bg-neutral-800 rounded shadow p-4 w-full"
            title={description}
        >
            <div className="flex items-center space-x-4">
                <img src={icon} alt={title} className="w-10 h-10 drop-shadow" />
                <h3 className="text-md font-bold dark:text-white">{title}</h3>
            </div>
        </div>
    )
}

export default TechCard