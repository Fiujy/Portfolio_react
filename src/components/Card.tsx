interface Props {
    className?: string,
    title: string,
}

const Card = ({ className = "", title = "" }: Props) => {
    return (
        <div className={`card card-compact w-full shadow-xl ${className}`}>
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body bg-white">
                <h2 className="card-title">{title} </h2>
                <div className="card-actions">
                    <button className="btn btn-primary text-purple-800 hover:text-purple-950">See more</button>
                </div>
            </div>
        </div>
    )
}

export default Card