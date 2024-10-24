import { IProject } from "@/interfaces/IProjects"

import picture from "@/assets/images/Solaris.webp"

interface Props {
    className?: string,
    project: IProject,
    onClick?: () => void,
}

const Card = ({ className = "", project, onClick }: Props) => {
    return (
        <div className={`card card-compact w-full shadow-xl rounded-2xl hover:scale-101 hover:shadow-2xl cursor-pointer ${className}`} onClick={onClick}>
            <div className="h-3/4">
                <figure className="size-full">
                    <img className="object-cover h-full w-auto max-w-full max-h-full"
                        // src={`@/assets/${project.imageName}.png`}
                        src={picture}
                        alt={project.title} />
                </figure>
            </div>
            <div className="card-body rounded-2xl bg-white h-1/4">
                <h2 className="card-title">{project.title} </h2>
                <div className="card-actions">
                    <button className="text-primary hover:text-accent hover:underline" onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.stopPropagation()
                        console.log("clicked on text")
                    }}>Check it out</button>
                </div>
            </div>
        </div>
    )
}

export default Card