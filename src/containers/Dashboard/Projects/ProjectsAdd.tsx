import { IProject } from "@/interfaces/IProjects"
import ProjectsService from "@/service/ProjectsService"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ProjectsAdd = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const navigate = useNavigate();

  const displayInfos = () => {
    console.log('Title : ', title)
    console.log('Description : ', description)
    console.log('Type : ', type)
  }

  const handleSubmit = async () => {
    const newProject = {
      title: title,
      description: description,
      type: type ? type : 'web',
    };

    try {
      if (newProject.title && newProject.description) {
        await ProjectsService.addProject(newProject);
        console.log('Project added');
        clearProject();
      } else {
        console.error('All fields are required');
      }
    } catch (error) {
      console.error('Error adding project: ', error);
    }
  };

  const clearProject = () => {
    setTitle('');
    setDescription('');
    setType('web');
  }

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
            <label className="label flex-shrink-0">Type : </label>
            <select value={type} onChange={(e) => { setType(e.target.value) }} className="select select-bordered w-full max-w-xs">
              <option value="web">Web</option>
              <option value="app">App</option>
            </select>
          </div>
          <div className="flex flex-row justify-center gap-2 pt-5">
            <button className="btn btn-warning" onClick={() => navigate(-1)}>Cancel</button>
            <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
            <button className="btn btn-secondary" onClick={clearProject}>Clear</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsAdd