// SubmenuHeader.js
import maracuyaImg from '../img/maracuya.png'; // Asegúrate de que la ruta sea correcta

const SubmenuHeader = () => {
    return (
        <header className="header-divider">
            <img className="logo-header" src={maracuyaImg} alt="Logo-header" />
            <span>universidad Maracuya</span>
        </header>
    );
};

export default SubmenuHeader;
