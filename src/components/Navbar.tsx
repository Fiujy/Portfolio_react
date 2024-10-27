import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation(); // Pour obtenir la route actuelle

    return (
        <div className="navbar bg-white h-10 fixed shadow-md">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost">Mohamed Kerrouche</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="px-1 flex space-x-16">
                    <li>
                        <Link to="/projects" className={`hover:text-primary ${location.pathname === '/projects' ? 'border-b-2 border-primary hover:text-black pb-1' : ''}`}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/writings" className={`hover:text-primary ${location.pathname === '/writings' ? 'border-b-2 border-primary hover:text-black pb-1' : ''}`}>Writings</Link>
                    </li>
                    <li>
                        <Link to="/drawings" className={`hover:text-primary ${location.pathname === '/drawings' ? 'border-b-2 border-primary hover:text-black pb-1' : ''}`}>Drawings</Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className={`hover:text-primary text-accent ${location.pathname === '/dashboard' ? 'border-b-2 border-primary hover:text-black pb-1' : ''}`}>Dashboard</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end mx-3">
                <Link to="/contact" className={`hover:text-primary ${location.pathname === '/contact' ? 'border-b-2 border-primary hover:text-black pb-1' : ''}`}>
                    Contact
                </Link>
            </div>
        </div>
    );
}
