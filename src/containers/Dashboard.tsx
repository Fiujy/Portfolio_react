import { Table } from '@/components/Table'
import ProjectsService from '@/service/ProjectsService';
import { useEffect, useState } from 'react';

const Dashboard = () => {

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
        <Table data={projects}></Table>
      </div>
    </>
  )
}

export default Dashboard