import { IProject } from '@/interfaces/IProjects';
import { useEffect } from 'react';

interface Props {
    project: IProject;
    onClose: () => void;
}

const Modal = ({ project, onClose }: Props) => {

    // Empêche le scrolling de l'arrière-plan quand la modal est ouverte
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <>
            {/* Overlay pour cliquer en dehors de la modal et la fermer */}
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={onClose}>
                {/* Modal */}
                <div className="modal-box relative bg-white p-6 rounded-lg max-w-xl  overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <h4 className="text-xl mb-4">{project.title}</h4>
                    
                    {/* Contenu avec gestion de l'overflow */}
                    <div className="overflow-auto max-h-[300px]">
                        <p className="mb-4 text-ellipsis overflow-hidden">{project.description}</p>
                    </div>
                    
                    <div className="modal-action">
                        <button className="btn btn-primary" onClick={onClose}>Fermer</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
