import { useEffect, useState } from 'react';
import './asidebar.css';
import MainNavigation from "./NavigationItem/MainNavigation"
import SubmenuHeader from "./submenu/SubmenuHeader"
import SubmenuSection from './submenu/SubmenuSection';
import { submenuItems } from './const/submenuItems';
import { useLocation } from 'react-router-dom';
import { menuItems } from './const/menuItems';
import TopbarService from '../topbar/TopbarService';
import menuAsignatura from './const/menuAsignatura';

function Aside() {
    const [selectedLink, setSelectedLink] = useState('home');
    const [isSubmenuActive, setIsSubmenuActive] = useState(true);
    const [selectedSubmenuItem, setSelectedSubmenuItem] = useState('');
    const location = useLocation();

    // Manejo de la selección del menú principal
    const handleClick = (linkName) => {
        if (selectedLink === linkName) {
            setIsSubmenuActive(!isSubmenuActive);
        } else {
            setSelectedLink(linkName);
            setIsSubmenuActive(true);
        }
    };

    const handleSubmenuItemClick = (itemName) => {
        setSelectedSubmenuItem(itemName)
        return itemName
    };

    const isServicePage = location.pathname.includes('service');
    const isAsignaturaPage = location.pathname.includes('Asignatura');



    useEffect(() => {
        // Establecer valores predeterminados cuando el componente se monta
        setSelectedLink('home');
        setIsSubmenuActive(true);
        setSelectedSubmenuItem('home');

        if (isServicePage) {
            setSelectedLink('service');
            setSelectedSubmenuItem('home-service');
        }

        if (isAsignaturaPage) {
            setSelectedLink('asignaturas');
            setSelectedSubmenuItem('home-asignatura');
        }
    }, [isServicePage, isAsignaturaPage]);



    return (
        <>
            {/* Mostrar el Aside solo si no estamos en la página de 'service' */}
            {!isServicePage && !isAsignaturaPage && (
                <>
                    {/* Primer aside (navegación principal) */}
                    < MainNavigation selectedLink={selectedLink} handleClick={handleClick} />

                    {/* segunda aside (navegación secundaria) */}
                    <aside className={`submenu-navigation visible`}>
                        <SubmenuHeader />
                        <ul>
                            {/* Submenú asociado */}
                            {selectedLink === 'home' && (
                                <SubmenuSection
                                    sectionTitle="Inicio"
                                    description="Pagina Principal"
                                    items={submenuItems.home}
                                    selectedSubmenuItem={selectedSubmenuItem}
                                    onSubmenuItemClick={handleSubmenuItemClick}
                                />
                            )}

                            {selectedLink === 'service' && (
                                <SubmenuSection
                                    sectionTitle="Servicios"
                                    description="Servicios disponibles"
                                    items={submenuItems.service}
                                    selectedSubmenuItem={selectedSubmenuItem}
                                    onSubmenuItemClick={handleSubmenuItemClick}
                                />
                            )}

                            {selectedLink === 'learning' && (
                                <SubmenuSection
                                    sectionTitle="Aprendizaje"
                                    description="Gestión del aprendizaje"
                                    items={submenuItems.learning}
                                    selectedSubmenuItem={selectedSubmenuItem}
                                    onSubmenuItemClick={handleSubmenuItemClick}
                                />
                            )}

                            {selectedLink === 'account' && (
                                <SubmenuSection
                                    sectionTitle="Cuenta"
                                    description="Administración de la cuenta"
                                    items={submenuItems.account}
                                    selectedSubmenuItem={selectedSubmenuItem}
                                    onSubmenuItemClick={handleSubmenuItemClick}
                                />
                            )}

                            {selectedLink === 'support' && (
                                <SubmenuSection
                                    sectionTitle="Soporte"
                                    description="Soporte y tutoriales"
                                    items={submenuItems.support}
                                    selectedSubmenuItem={selectedSubmenuItem}
                                    onSubmenuItemClick={handleSubmenuItemClick}
                                />
                            )}
                        </ul>
                    </aside>
                </>
            )}


            {/* Si estamos en la página 'service', cambiar el diseño o mostrar otro contenido */}
            {isServicePage && (
                <>
                    <TopbarService />
                    <aside className='aside-service'>
                        <ul className='aside-service-ul'>
                            <SubmenuSection
                                sectionTitle="Menu"
                                items={menuItems.menu}
                                selectedSubmenuItem={selectedSubmenuItem}
                                onSubmenuItemClick={handleSubmenuItemClick}
                            />

                            <SubmenuSection
                                sectionTitle="Servicios"
                                items={menuItems.services}
                                selectedSubmenuItem={selectedSubmenuItem}
                                onSubmenuItemClick={handleSubmenuItemClick}

                            />

                            <SubmenuSection
                                sectionTitle="Tesorería"
                                items={menuItems.treasury}
                                selectedSubmenuItem={selectedSubmenuItem}
                                onSubmenuItemClick={handleSubmenuItemClick}
                            />

                            <SubmenuSection
                                sectionTitle="UMa"
                                items={menuItems.UMa}
                                selectedSubmenuItem={selectedSubmenuItem}
                                onSubmenuItemClick={handleSubmenuItemClick}
                            />
                        </ul>
                    </aside>
                </>
            )}


            {isAsignaturaPage && (
                <>
                    <aside className='aside-asignatura'>
                        <ul className='aside-service-ul'>
                            <SubmenuHeader />
                            <SubmenuSection
                                items={menuAsignatura}
                                selectedSubmenuItem={selectedSubmenuItem}
                                onSubmenuItemClick={handleSubmenuItemClick}
                            />
                        </ul>
                    </aside>
                </>
            )}
        </>
    );

}

export default Aside;