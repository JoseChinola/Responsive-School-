import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

import Footer from '../components/Footer/Footer';
import { Topbar } from '../components/topbar/Topbar';
import HeaderPage from '../components/header/Header';
import Aside from '../components/aside/asidebar';
import PrimaryAside from './PrimaryAside';
import ServiceRoutes from './ServiceRoutes';
import MenuAsignatura from './MenuAsignatura';
import TopbarService from '../components/topbar/TopbarService';

const AuthRoutes = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    }

    // Obtén la ubicación actual de la ruta
    const location = useLocation();

    // Determina si estamos en la página de "service"
    const isServicePage = location.pathname.includes('/service');
    const isAsignaturaPage = location.pathname.includes('/Asignatura');
    

    let content;

    if (isServicePage) {
        content = (
            <div className='container-service'>
                <ServiceRoutes />
            </div>
        );
    } else if (isAsignaturaPage) {

        content = (
            <div className='container-asignatura'>
                <TopbarService />
                <MenuAsignatura />
            </div>
        );
    } else {
        content = (
            <>
                <Topbar onToggle={toggleMenu} />
                <HeaderPage />
                <PrimaryAside toggleMenu={toggleMenu} />
                <Footer />
            </>
        );
    }

    return (
        <>
            <div className="container">
                <Aside isActive={isMenuActive ? 'menu-active' : ''} />

                <div className={`main ${isMenuActive ? 'active-menu' : ''}`}>
                    {content}
                </div>
            </div>
        </>
    );
};

export default AuthRoutes;
