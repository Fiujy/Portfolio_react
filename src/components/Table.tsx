import { useState } from "react";
import Modal from "./Modal";
import ProjectsService from "@/service/ProjectsService";
import { IProject } from "@/interfaces/IProjects";
import { Link } from "react-router-dom";

interface Props {
    data: any[];
    setData: React.Dispatch<React.SetStateAction<any[]>>;
}

export const Table = ({ data, setData }: Props) => {

    const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

    if (data.length === 0) {
        return <div>No Data Available</div>
    }

    const keys = Object.keys(data[0]);

    const handleDelete = async (id: number) => {
        const isConfirmed = window.confirm('Are you sure you want to delete this project?');
        if (isConfirmed) {
            try {
                await ProjectsService.deleteProject(id);
                setData(data.filter((item) => item.id !== id));
                console.log(`Project with id ${id} deleted`);
                // window.location.reload(); // Rafraîchir la page
            } catch (error) {
                console.error('Error deleting project: ', error);
            }
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        {keys.map((key: string) => (
                            <th key={key}>{key}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {keys.map((key) => (
                                <td key={key}>{(item as any)[key]}</td>
                            ))}
                            <td className="flex flex-row gap-2">
                                {/* <button className="btn btn-primary">Show</button> */}
                                <button className="btn btn-warning"><Link to={`/dashboard/projects/edit/${item.id}`} state={{ project: item }} >Edit</Link></button>
                                <button className="btn btn-error" onClick={() => { handleDelete(item.id) }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;