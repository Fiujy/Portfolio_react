interface Props {
    data: any[]; 
}

export const Table = ({ data }: Props) => {

    if(data.length === 0) {
        return <div>No Data Available</div>
    }

    const keys = Object.keys(data[0]);

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
                                <button className="btn btn-primary">Show</button>
                                <button className="btn btn-warning">Edit</button>
                                <button className="btn btn-error">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
