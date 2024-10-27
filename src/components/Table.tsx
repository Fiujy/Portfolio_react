interface Props {
    data: any[]; 
    // children: React.ReactNode[];
}

export const Table = ({ data }: Props) => {

    if(data.length === 0) {
        return <div>No Data Available</div>
    }

    const keys = Object.keys(data[0]);

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* Head */}
                <thead>
                    <tr>
                        {keys.map((key: string) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {keys.map((key) => (
                                <td key={key}>{(item as any)[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
