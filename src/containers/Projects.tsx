import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { IProject } from "@/interfaces/IProjects";
import ProjectsService from "@/service/ProjectsService";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const { t } = useTranslation();

  const fetchProjects = async (type?: string) => {
    const data = await ProjectsService.getAllProjects(type);
    setProjects(data);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-full bg-base-300 pb-16">
        <h1 className="text-2xl text-center font-bold text-neutral mt-10">{t('explore')}</h1>
        <div className="flex flex-row gap-5 mt-10 mb-10 mx-auto">
          <button className="btn btn-primary w-1/3" onClick={() => fetchProjects()}>{t('all')}</button>
          <button className="btn btn-primary w-1/3" onClick={() => fetchProjects('web')}>{t('web')}</button>
          <button className="btn btn-primary w-1/3" onClick={() => fetchProjects('app')}>{t('app')}</button>
        </div>
        <div className="grid grid-cols-3 gap-10 px-[10%]">
          {projects.length > 0 ? (
            projects.map((project: IProject) => (
              <Card key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))
          ) : (
            <p>{t('noProjects')}</p>
          )}
        </div>
      </div>
      {selectedProject && (
        <Modal key={selectedProject.id} project={selectedProject} onClose={() => setSelectedProject(null)} title={selectedProject.title} content={selectedProject.description}></Modal>
      )}
    </>
  );
}
