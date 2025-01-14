import React, { useState } from 'react';
import ProfileEdit from './ProfileEdit';
import ChangePassword from '../../ChangePassword/ChangePassword';


const ProfileInfoItem = ({ profileInf, type }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editableData, setEditableData] = useState(profileInf);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [isActivityLogged, setIsActivityLogged] = useState(false);

    const isProfileData = type === 'general';
    const isUniversityData = type === 'university';
    const isDataSetting = type === 'settings';

    const handleEditClick = (index) => {
        if (isUniversityData) {
            return;
        }
        if (index === 0) return;
        setIsEditing(true);
    };

    const handleSave = (updatedData) => {
        setEditableData(updatedData);
        setIsEditing(false);
    };

    const handleCancel = () => {

        setIsEditing(false);
    };

    if (isUniversityData && isEditing) {
        setIsEditing(false);
    }


    const handleShowChangePassword = () => {
        setShowChangePassword(true);
    };

    const handleCloseChangePassword = () => {
        setShowChangePassword(false);
    };

    const handleSwitchChange = () => {
        setIsActivityLogged(prevState => !prevState);
    };

    return (
        <div className="card-table">
            <div className="card-header">
                <h5>{isProfileData ? 'Información Personal' : isUniversityData ? 'Información Académica' : isDataSetting ? 'Seguridad de la cuenta' : ''}</h5>
                <p>
                    {isProfileData
                        ? 'Informaciones básicas de su cuenta, estas son las informaciones que la Universidad utilizará para comunicarse con usted.'
                        : isUniversityData
                            ? 'Informaciones básicas de su cuenta académica de la Universidad.'
                            : isDataSetting
                                ? 'Estas configuraciones le ayudarán a mantener su cuenta segura.'
                                : ''
                    }
                </p>
            </div>

            <div className="card">
                <div className="data-list">
                    {isDataSetting ? (
                        <div className="settings-container">
                            {/* <!-- Primer bloque de configuración --> */}
                            <div class="settings-content">
                                <div class="settings-text">
                                    <h6>Guardar mis registros de actividad</h6>
                                    <p>Usted puede almacenar todas las actividades de inicio de sesión incluyendo las actividades inusual detectadas.</p>
                                </div>

                                <div className="setting-block">
                                    <label className="switch">
                                        <div className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                id="switch"
                                                checked={isActivityLogged}
                                                onChange={handleSwitchChange}
                                            />
                                            <label htmlFor="switch"></label>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* <!-- Segundo bloque de configuración --> */}
                            <div class="settings-content settings-password">
                                {/* <!-- Fila con texto y switch --> */}
                                <div class="row">
                                    <div class="settings-text">
                                        <h6>Cambiar Contraseña</h6>
                                        <p>Contraseña para entrar a la plataforma.</p>
                                    </div>

                                    <div class="setting-block">
                                        <button type="button" className='btn-ChPassword' onClick={handleShowChangePassword}>
                                            Cambiar Contraseña
                                        </button>

                                        {showChangePassword && (
                                            <ChangePassword
                                                onClose={handleCloseChangePassword}
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* <!-- Alerta debajo de la fila --> */}
                                <div class="Chg-alert">
                                    <div class="alert alert-icon">
                                        <em className='icon'>
                                            <i class="fa-solid fa-circle-exclamation"></i>
                                        </em>

                                        Al momento que se realice el <strong>Cambio de Contraseña</strong>, el sistema le pedirá iniciar sesión con su
                                        <a href=" " className="alert-link">Nueva Contraseña</a>.
                                    </div>
                                </div>
                            </div>
                        </div>


                    ) : isEditing ? (
                        <ProfileEdit
                            profileInf={editableData}
                            onSave={handleSave}
                            onCancel={handleCancel}
                        />
                    ) : (
                        profileInf.map((item, index) => (
                            <div
                                className="dataItem"
                                key={index}
                                onClick={() => handleEditClick(index)}
                            >
                                <div className="dataInf">
                                    <span className="data-label">{item.label}</span>
                                    <span className="data-value">{item.value}</span>
                                </div>

                                <div className="dataInf-end">
                                    <span className="data-more">
                                        <em>
                                            <i className={`icon-perf ${item.iconClass}`}></i>
                                        </em>
                                    </span>
                                </div>
                            </div>
                        ))
                    )}

                </div>
            </div>
        </div>
    );
};

export default ProfileInfoItem;
