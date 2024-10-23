import { IProject } from "@/interfaces/IProjects";

const API_URL = import.meta.env.VITE_API_URL;

const ProjectsService = {
  getAllProjects: async (type?: string) => {
    try {
      let url = `${API_URL}/projects`;
      if (type) {
        url += `?type=${type}`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },

  getProjectById: async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/projects/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch project with id: ${id}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching project ${id}:`, error);
      return null;
    }
  },

  createProject: async (project: IProject) => {
    try {
      const response = await fetch(`${API_URL}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      });
      if (!response.ok) {
        throw new Error('Failed to create project');
      }
      return await response.json();
    } catch (error) {
      console.error('Error creating project:', error);
      return null;
    }
  },

  updateProject: async (id: number, project: IProject) => {
    try {
      const response = await fetch(`${API_URL}/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      });
      if (!response.ok) {
        throw new Error(`Failed to update project with id: ${id}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error updating project ${id}:`, error);
      return null;
    }
  },

  deleteProject: async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/projects/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Failed to delete project with id: ${id}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error deleting project ${id}:`, error);
      return null;
    }
  },
};

export default ProjectsService;
