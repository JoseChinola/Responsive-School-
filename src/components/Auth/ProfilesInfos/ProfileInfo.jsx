import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import dataProfile from './data/dataProfile';
import dataUniversiry from './data/dataUniversiry';
import ProfileInfoItem from './infoManager/ProfileInfoItem';
import dataSetting from './data/dataSetting';
import './ProfileInfo.css';

const ProfileInfo = () => {
  const [profileInf, setProfileInf] = useState(dataProfile);
  const { section } = useParams(); 

  // Actualizar los datos basados en la sección
  useEffect(() => {
    if (section === 'university') {
      setProfileInf(dataUniversiry);
    } else if (section === 'settings') {
      setProfileInf(dataSetting);
    } else {
      setProfileInf(dataProfile);
    }
  }, [section]); // Solo se vuelve a ejecutar cuando 'section' cambia

  return (
    <div className="profile-container">
      <div className="profile-title">
        <h2>Mi perfil</h2>
        <p>
          Información relacionada de su cuenta en la Universidad.
          Por favor mantenga sus datos actualizados.
        </p>
      </div>
      <div className="profile-nav-title">
        <ul className="nav-profile">
          <li className={`nav-item ${section === 'general' ? 'active' : ''}`}>
            <Link to="/profile-info/general" className="nav-link">
              Información General
            </Link>
          </li>
          <li className={`nav-item ${section === 'university' ? 'active' : ''}`}>
            <Link to="/profile-info/university" className="nav-link">
              Universidad
            </Link>
          </li>
          <li className={`nav-item ${section === 'settings' ? 'active' : ''}`}>
            <Link to="/profile-info/settings" className="nav-link">
              Configuración de la cuenta
            </Link>
          </li>
        </ul>
      </div>

      <div className="profile-card">
        <ProfileInfoItem profileInf={profileInf} type={section} />
      </div>
    </div>
  );
};

export default ProfileInfo;
