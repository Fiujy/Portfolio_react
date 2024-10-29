import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { IProject } from "@/interfaces/IProjects";
import ProjectsService from "@/service/ProjectsService";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const { t, i18n } = useTranslation();

  const fetchProjects = async (type?: string) => {
    const data = await ProjectsService.getAllProjects(type);
    setProjects(data);
  }

  const getDescriptionByLanguage = (description: string, descriptionFr: string | undefined, currentLanguage: string) => {
    if (currentLanguage === 'fr' && descriptionFr) {
      return descriptionFr;
    }

    return description;
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
        <div className="">
          <div className="grid grid-cols-3 gap-5 px-[18%]">
            {projects.length > 0 ? (
              projects.map((project: IProject) => (
                <div key={project.id} className="col-span-1">
                  <Card className="" key={project.id} project={project} onClick={() => setSelectedProject(project)} />
                </div>
              ))
            ) : (
              <p>{t('noProjects')}</p>
            )}
          </div>
        </div>
      </div>
      {selectedProject && (
        <Modal key={selectedProject.id} project={selectedProject} onClose={() => setSelectedProject(null)} title={selectedProject.title} 
          content={getDescriptionByLanguage(selectedProject.description, selectedProject.descriptionFr, i18n.language)}>
        </Modal>
      )}
    </>
  );
}
