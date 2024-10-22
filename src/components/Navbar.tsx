import { useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation(); // Pour obtenir la route actuelle

    return (
        <div className="navbar bg-white h-10 fixed">
            <div className="navbar-start">
                <a href="/" className="btn btn-ghost">Mohamed Kerrouche</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="px-1 flex space-x-16">
                    <li>
                        <a href="/projects" className={`hover:text-purple-700 ${location.pathname === '/projects' ? 'border-b-2 border-purple-700 hover:text-black pb-1' : ''}`}>Projects</a>
                    </li>
                    <li>
                        <a href="/writings" className={`hover:text-purple-700 ${location.pathname === '/writings' ? 'border-b-2 border-purple-700 hover:text-black pb-1' : ''}`}>Writings</a>
                    </li>
                    <li>
                        <a href="/drawings" className={`hover:text-purple-700 ${location.pathname === '/drawings' ? 'border-b-2 border-purple-700 hover:text-black pb-1' : ''}`}>Drawings</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end mx-3">
                <a href="/about" className={`hover:text-purple-700 ${location.pathname === '/about' ? 'border-b-2 border-purple-700 hover:text-black pb-1' : ''}`}>
                    About me
                </a>
            </div>
        </div>
    );
}
