import { IProject } from '@/interfaces/IProjects';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    project: IProject;
    onClose: () => void;
    title: string;
    content: string;
}

const Modal = ({ project, onClose, title, content }: Props) => {

    const { t } = useTranslation();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={onClose}>
                <div className="modal-box relative bg-base-100 p-6 rounded-lg max-w-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <h4 className="text-xl mb-4">{title}</h4>                    
                    <div className="overflow-auto max-h-[300px]">
                        <p className="mb-4 text-ellipsis overflow-hidden">{content}</p>
                    </div>
                    
                    <div className="modal-action">
                        <button className="btn btn-primary" onClick={onClose}>{t('close')}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
