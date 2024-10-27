import { Table } from '@/components/Table'
import ProjectsService from '@/service/ProjectsService';
import { useEffect, useState } from 'react';

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
      <div className='w-10/12 mx-auto pt-10'>
        <button className="btn btn-primary"><a href="/dashboard/projects/add">Ajouter</a></button>
        <Table data={projects}></Table>
      </div>
    </>
  )
}

export default DashboardHome