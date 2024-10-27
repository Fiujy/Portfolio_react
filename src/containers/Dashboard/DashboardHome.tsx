import { Table } from '@/components/Table'
import ProjectsService from '@/service/ProjectsService';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {

  const [projects, setProjects] = useState<any[]>([]); 

  const fetchProjects = async () => {
    const data = await ProjectsService.getAllProjects(); 
    setProjects(data); 
  }

  useEffect(() => {
    fetchProjects();
  }, [])

  return (
    <>
      <div className='w-10/12 mx-auto py-10 space-y-5'>
        <button className="btn btn-primary"><Link to="/dashboard/projects/add">Add a project</Link></button>
        <Table data={projects} setData={setProjects}></Table>
      </div>
    </>
  )
}

export default DashboardHome