export default function Navbar() {
    return (
        <div className="navbar bg-white h-10">
            <div className="navbar-start">
                <a href="#" className="btn btn-ghost">Mohamed Kerrouche</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Websites</a></li>
                    <li><a>Writings</a></li>
                    <li><a>Drawings</a></li>
                </ul>
            </div>
            <div className="navbar-end mx-3">
                <a href="#" className="btn btn-ghost">About me</a>
            </div>
        </div>
    )
}
