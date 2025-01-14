// src/components/ChangePassword.js
import React, { useState } from 'react';

const ChangePassword = ({ onClose }) => {
    const [actualPassword, setActualPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [activeNav, setActiveNav] = useState('AccPlataforma');

    const handleNavClick = (navItem, e) => {
        e.preventDefault();
        setActiveNav(navItem);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            // Lógica para cambiar la contraseña
            alert("Contraseña cambiada con éxito.");
            onClose();
        } else {
            alert("Las contraseñas no coinciden.");
        }
    };

    const handleCancel = () => {
        // Lógica para cerrar el modal sin hacer nada
        onClose();
    };

    return (
        <div className="change-password-modal">
            <form onSubmit={handleSubmit}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Cerrar modal */}
                        <button type="button" className="close" onClick={handleCancel}>
                            <em>
                                <i className="icon fa-solid fa-xmark"></i>
                            </em>
                        </button>

                        <div className="modal-body">
                            <h5 className="title">Cambio de Contraseña</h5>
                            <ul className="nav-profile">
                                <li
                                    className={`nav-item ${activeNav === 'AccPlataforma' ? 'active' : ''}`}
                                >
                                    <a className="nav-link" href=" " onClick={(e) => handleNavClick('AccPlataforma', e)}>
                                        Acceso a la plataforma
                                    </a>
                                </li>

                            </ul>

                            <div className="modal-body-content">
                                <div className="body-panee active">
                                    <div className="card">
                                        <div className="card-form">
                                            <div className="form-group">
                                                <label className="form-label">Contraseña Actual</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="actualPwd"
                                                    value={actualPassword}
                                                    onChange={(e) => setActualPassword(e.target.value)}
                                                    placeholder="Introduzca su contraseña actual"
                                                />
                                            </div>
                                        </div>

                                        <div className="card-form">
                                            <div className="form-group">
                                                <label className="form-label">Nueva Contraseña</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className="form-control"
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                    placeholder="Especifique su contraseña nueva"
                                                />
                                            </div>
                                        </div>

                                        <div className="card-form">
                                            <div className="form-group">
                                                <label className="form-label">Repetir Contraseña</label>
                                                <input
                                                    type="password"
                                                    id="passwordR"
                                                    name="passwordR"
                                                    className="form-control"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    placeholder="Repita la nueva contraseña"
                                                />
                                            </div>
                                        </div>

                                        <div className="card-form">
                                            <ul className="change-list-form align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                                                <li>
                                                    <button
                                                        type="submit"
                                                        id="cambiarC"
                                                        className="btn btn-updatePassword"
                                                    >
                                                        Actualizar Contraseña
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        type="button"
                                                        className="btn btn-cancelPassword"
                                                        onClick={handleCancel}
                                                    >
                                                        Cancelar
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;
