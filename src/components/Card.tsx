import React from 'react';
import { IProject } from "@/interfaces/IProjects";
import placeholderImage from "@/assets/images/placeholder.webp";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
    project: IProject;
    onClick?: () => void;
}

const Card = ({ className = "", project, onClick }: Props) => {
    const { t } = useTranslation();

    const loadImage = async (imageName: string) => {
        try {
            const image = await import(`@/assets/images/${imageName.toLowerCase()}.webp`);
            return image.default;
        } catch (error) {
            console.warn(`Image ${imageName} not found, using placeholder.`);
            return placeholderImage;
        }
    };

    const [imageSrc, setImageSrc] = React.useState<string>(placeholderImage);

    React.useEffect(() => {
        if (project.title) {
            loadImage(project.title).then(setImageSrc);
        }
    }, [project.title]);

    return (
        <div
            className={`card w-full h-60 max-h-60 text-white bg-base-100 shadow-xl shadow-primary/30 rounded-xl hover:scale-101 hover:shadow-xl hover:shadow-primary/30 cursor-pointer ${className}`}
            onClick={onClick}
        >
            <div className="h-2/3">
                <figure className="size-full p-5 flex items-center justify-center">
                    <img
                        className="rounded-xl h-full object-contain"
                        src={imageSrc}
                        alt={project.title}
                    />
                </figure>
            </div>
            <div className="p-3 h-1/3 bg-primary rounded-t-none rounded-xl flex flex-col space-y-1">
                <h2 className="card-title">{project.title}</h2>
                <div className="card-actions">
                    <button
                        className="text-white hover:text-secondary hover:underline"
                    onClick={(e) => {
                        e.stopPropagation();
                        
                    }}>
                        {t('checkItOut')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;