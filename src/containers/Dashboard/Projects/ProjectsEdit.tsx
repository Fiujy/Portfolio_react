import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProjectsService from "@/service/ProjectsService";

const ProjectsEdit = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [descriptionFr, setDescriptionFr] = useState('');
    const [type, setType] = useState('');
    const [link, setLink] = useState('');
    const navigate = useNavigate();

    const location = useLocation();
    const { project } = location.state; 

    const fetchProject = () => {
        setTitle(project.title);
        setDescription(project.description);
        setDescriptionFr(project.descriptionFr ?? '');
        setType(project.type ?? '');
        setLink(project.link ?? '');
    };

    useEffect(() => { 
        fetchProject();
    }, []);

    const handleSubmit = async () => {
        const updatedProject = {
            id: project.id,
            title: title,
            description: description,
            descriptionFr: descriptionFr,
            type: type ? type : 'web',
            link: link,
        };

        try {

            if (updatedProject.id === undefined) {
                console.error('Project ID is required');
                return;
            }

            if (updatedProject.title && updatedProject.description) {
                await ProjectsService.updateProject(updatedProject.id, updatedProject);
                console.log('Project updated');
                navigate(-1);
            } else {
                console.error('All fields are required');
            }
        } catch (error) {
            console.error('Error updating project: ', error);
        }
    };

    const clearProject = () => {
        setTitle('');
        setDescription('');
        setDescriptionFr('');
        setType('web');
        setLink('');
    };

    return (
        <>
            <div className="pt-10 space-y-3 flex justify-center min-h-screen bg-base-300">
                <div className="p-10 bg-base-100 space-y-5 h-full">
                    <div className='flex flex-row'>
                        <label className="label flex-shrink-0">Title : </label>
                        <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='flex flex-row items-start'>
                        <label className="label flex-shrink-0">Description : </label>
                        <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} className="textarea textarea-bordered max-w-xs" placeholder="Description"></textarea>
                    </div>
                    <div className='flex flex-row items-start'>
                        <label className="label flex-shrink-0">Description FR : </label>
                        <textarea value={descriptionFr} onChange={(e) => { setDescriptionFr(e.target.value) }} className="textarea textarea-bordered max-w-xs" placeholder="Description Fr"></textarea>
                    </div>
                    <div className='flex flex-row items-start'>
                        <label className="label flex-shrink-0">Type : </label>
                        <select value={type} onChange={(e) => { setType(e.target.value) }} className="select select-bordered w-full max-w-xs">
                            <option value="web">Web</option>
                            <option value="app">App</option>
                        </select>
                    </div>
                    <div className='flex flex-row'>
                        <label className="label flex-shrink-0">Link : </label>
                        <input value={link} onChange={(e) => { setLink(e.target.value) }} type="text" placeholder="Link" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex flex-row justify-center gap-2 pt-5">
                        <button className="btn btn-warning" onClick={() => navigate(-1)}>Cancel</button>
                        <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                        <button className="btn btn-secondary" onClick={clearProject}>Clear</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsEdit;