import maracuya from '../../assets/icons/maracuya.png';
import { useState } from 'react';
import languages from './data/dataLang';
import dataProfile from './data/dataProfile';

const TopbarService = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [languageMenuVisible, setLanguageMenuVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const [profile] = dataProfile;  // Extraemos el primer elemento del array
    const { name, code, email, image } = profile;

    //Funcion para alternar la visibilidad del menu
    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
        setLanguageMenuVisible(false);
    }

    const toggleLanguageMenu = () => {
        setLanguageMenuVisible(!languageMenuVisible);
        setMenuVisible(false);
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setLanguageMenuVisible(false);
    };


    return (
        <div className="topbar-service">
            <div className='topbar-navv'>
                <div className="user">
                    <img src={maracuya} alt="User Profile" />
                </div>
            </div>


            <div className="search">

            </div>

            <div className="user-nav">
                <div className='user-idioma' onClick={toggleLanguageMenu}>
                    <img src={selectedLanguage.image} alt={selectedLanguage.name} />
                </div>

                <div className={`container-nav-topbarService ${menuVisible ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="user">
                        <img src={image} alt={name} />
                    </div>

                    <div className='user-name'>
                        <h5>
                            {name}
                            <i class="fa-solid fa-caret-down"></i>
                        </h5>
                    </div>
                </div>
                {/**Menu desplegable */}
                {menuVisible && (
                    <div className='dropdown-menu'>
                        <ul>
                            <div className='user-menu'>
                                <div className='menu-info'>
                                    <div className="user-info">
                                        <img src={image} alt="User Profile" />
                                    </div>
                                    <div className='info-user'>
                                        <h5>{name}</h5>
                                        <span>{code}</span>
                                        <span>{email}</span>
                                    </div>
                                </div>
                            </div>
                            <li>
                                <div className='perfil-config'>
                                    <span>
                                        <i class="fa-solid fa-user"></i> Ver Perfil
                                    </span>

                                </div>
                                <div className='perfil-config'>
                                    <span>
                                        <i class="fa-solid fa-gear"></i> Configuracion
                                    </span>
                                </div>

                            </li>
                            <li>
                                <div className='perfil-config'>
                                    <span>
                                        <i class="fa-solid fa-arrow-right-from-bracket icon-arrowleft"></i>  Regresar a Uma
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='perfil-config'>
                                    <span>
                                        <i class="fa-solid fa-arrow-right-from-bracket"></i> Salir
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}


                {/* Menú de idiomas */}
                {languageMenuVisible && (
                    <div className="dropdown-menu">
                        <ul>
                            {languages.map((language, index) => (
                                <li className='lang-content' key={index} onClick={() => handleLanguageSelect(language)}>
                                    <div className='user-idioma'>
                                        <img src={language.image} alt={language.name} />
                                    </div>
                                    <span>{language.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );
};


export default TopbarService