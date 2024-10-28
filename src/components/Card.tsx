import { IProject } from "@/interfaces/IProjects";
import picture from "@/assets/images/Solaris.webp";
import picture2 from "@/assets/images/icone.png";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
    project: IProject;
    onClick?: () => void;
}

const Card = ({ className = "", project, onClick }: Props) => {
    const { t } = useTranslation();

    return (
        <div className={`card w-full max-w-80 h-60 max-h-60 text-white bg-base-100 shadow-xl shadow-primary/30 rounded-xl hover:scale-101 hover:shadow-xl hover:shadow-primary/30 cursor-pointer ${className}`} onClick={onClick}>
            <div className="h-2/3">
                <figure className="size-full p-5 flex items-center justify-center">
                    {project.title === "Sol@ris" || project.title === "Solaris" ? (
                        <img className="rounded-xl h-full object-contain" src={picture} alt={project.title} />
                    ) : (
                        <img className="rounded-xl h-full object-contain" src={picture2} alt={project.title} />
                    )}
                </figure>
            </div>
            <div className="p-3 h-1/3 bg-primary rounded-t-none rounded-xl flex flex-col ">
                <h2 className="card-title">{project.title}</h2>
                <div className="card-actions">
                    <button
                        className="text-white hover:text-secondary hover:underline"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.stopPropagation();
                            console.log("clicked on text");
                        }}
                    >
                        {t('checkItOut')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;