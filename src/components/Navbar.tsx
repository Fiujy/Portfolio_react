import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation(); // Pour obtenir la route actuelle

    return (
        <div className="navbar bg-white h-10">
            <div className="navbar-start">
                <a href="/" className="btn btn-ghost">Mohamed Kerrouche</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="px-1 flex space-x-16">
                    {/* Websites */}
                    <li>
                        <a
                            href="/websites"
                            className={`hover:text-orange-400/50 ${location.pathname === '/websites' ? 'border-b-2 border-orange-400 pb-1' : ''}`}
                        >
                            Websites
                        </a>
                    </li>

                    {/* Writings */}
                    <li>
                        <a
                            href="/writings"
                            className={`hover:text-orange-400/50 ${location.pathname === '/writings' ? 'border-b-2 border-orange-400 pb-1' : ''}`}
                        >
                            Writings
                        </a>
                    </li>

                    {/* Drawings */}
                    <li>
                        <a
                            href="/drawings"
                            className={`hover:text-orange-400/50 ${location.pathname === '/drawings' ? 'border-b-2 border-orange-400 pb-1' : ''}`}
                        >
                            Drawings
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end mx-3">
                <a
                    href="/about"
                    className={`hover:text-orange-400/50 ${location.pathname === '/about' ? 'border-b-2 border-orange-400 pb-1' : ''}`}
                >
                    About me
                </a>
            </div>
        </div>
    );
}
