import { Link, useLocation } from 'react-router-dom';
import Theme from '@/components/Theme';
import { Language } from './Language';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <div className="navbar bg-base-100 h-10 fixed shadow-md px-5">
            <div className="navbar-start">
                <Link to="/" className="hover:text-primary">Mohamed Kerrouche</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="px-1 flex space-x-16">
                    <li>
                        <Link to="/projects" className={`hover:text-primary ${location.pathname === '/projects' ? 'border-b-2 border-primary hover:text-black pb-1' : ''}`}>{t('projects')}</Link>
                    </li>
                    <li>
                        <Link to="/writings" className={`hover:text-primary ${location.pathname === '/writings' ? 'border-b-2 border-primary hover:text-black pb-1' : ''}`}>{t('writings')}</Link>
                    </li>
                    <li>
                        <Link to="/drawings" className={`hover:text-primary ${location.pathname === '/drawings' ? 'border-b-2 border-primary hover:text-black pb-1' : ''}`}>{t('drawings')}</Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className={`hover:text-primary text-accent ${location.pathname === '/dashboard' ? 'border-b-2 border-primary hover:text-black pb-1' : ''}`}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={`hover:text-primary ${location.pathname === '/contact' ? 'border-b-2 border-primary hover:text-black pb-1' : ''}`}>
                            {t('contact')}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end mx-3 gap-3">
                <Language></Language>
                <Theme></Theme>
            </div>
        </div>
    );
}
