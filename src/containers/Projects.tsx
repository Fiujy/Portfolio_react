import Card from "@/components/Card";
import { IProject } from "@/interfaces/IProjects";
import ProjectsService from "@/service/ProjectsService";
import { useEffect, useState } from "react";

export default function Projects() {

  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const data = await ProjectsService.getAllProjects();
    setProjects(data);
  }

  useEffect(() => {
    fetchProjects();
  })

  return (
    <>
      <div className="flex flex-col min-h-full bg-white py-5">
        <div className="grid grid-cols-3 gap-36 px-[15%]">
          {projects.length > 0 ? (
            projects.map((project: IProject) => (
              <Card key={project.id} title={project.title} />
            ))
          ) : (
            <p>No Projects</p>
          )}
        </div>
      </div>
    </>
  );
}
