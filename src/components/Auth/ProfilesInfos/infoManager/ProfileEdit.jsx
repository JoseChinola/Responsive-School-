import React, { useState } from 'react';

const ProfileEdit = ({ profileInf, onSave, onCancel }) => {
    // Mapeamos profileInf a un estado inicial
    const [formData, setFormData] = useState(
        Array.isArray(profileInf) // Verifica si profileInf es un array
            ? profileInf.reduce((acc, item) => {
                acc[item.label] = item.value;
                return acc;
            }, {})
            : {}
    );

   

    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        onCancel();
    };


    return (
        <div className="edit-form-container">
            <div className="card">
                <div className="edit-form">
                    <form className="form-edit" onSubmit={handleSubmit}>
                        <div className="info-edit">
                            {/* Correo Electrónico */}
                            <div className="dataInf">
                                <label htmlFor="email">Correo Electrónico</label>
                                <div className="form-icon">
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData['Correo Electrónico'] || ''}
                                        onChange={(e) =>
                                            handleInputChange('Correo Electrónico', e.target.value)
                                        }
                                    />
                                    <em>
                                        <i className="fa-solid fa-envelope"></i>
                                    </em>
                                </div>
                            </div>

                            {/* Fecha de Nacimiento */}
                            <div className="dataInf">
                                <label htmlFor="birthDate">Fecha de Nacimiento</label>
                                <div className="form-icon form-icon-right">
                                    <input
                                        type="text"
                                        id="birthDate"
                                        value={formData['Fecha de Nacimiento'] || ''}
                                        onChange={(e) =>
                                            handleInputChange('Fecha de Nacimiento', e.target.value)
                                        }
                                    />
                                    <em>
                                        <i className="icon-form fa-solid fa-cake-candles"></i>
                                    </em>
                                </div>
                            </div>

                            {/* Teléfono Residencial */}
                            <div className="dataInf">
                                <label htmlFor="homePhone">Teléfono Residencial</label>
                                <div className="form-icon">
                                    <input
                                        type="text"
                                        id="homePhone"
                                        value={formData['Teléfono'] || ''}
                                        onChange={(e) =>
                                            handleInputChange('Teléfono', e.target.value)
                                        }
                                    />
                                    <em>
                                        <i className="fa-solid fa-phone"></i>
                                    </em>
                                </div>
                            </div>

                            {/* Teléfono Celular */}
                            <div className="dataInf">
                                <label htmlFor="mobilePhone">Teléfono Celular</label>
                                <div className="form-icon">
                                    <input
                                        type="text"
                                        id="mobilePhone"
                                        value={formData['Celular'] || ''}
                                        onChange={(e) =>
                                            handleInputChange('Celular', e.target.value)
                                        }
                                    />
                                    <em>
                                        <i className="fa-solid fa-mobile-screen-button"></i>
                                    </em>
                                </div>
                            </div>

                            {/* Dirección */}
                            <div className="dataInf">
                                <label htmlFor="address">Dirección</label>
                                <div className="form-icon">
                                    <textarea
                                        id="address"
                                        value={formData['Dirección'] || ''}
                                        onChange={(e) =>
                                            handleInputChange('Dirección', e.target.value)
                                        }
                                    ></textarea>
                                    <em>
                                        <i className="fa-solid fa-location-dot"></i>
                                    </em>
                                </div>
                            </div>

                            {/* Provincia y Municipio */}
                            <div className="dataInf">
                                <label htmlFor="province">Provincia</label>
                                <div className="form-icon">
                                    <input
                                        type="text"
                                        id="province"
                                        value={formData['Provincia'] || ''}
                                        onChange={(e) =>
                                            handleInputChange('Provincia', e.target.value)
                                        }
                                    />
                                    <em>
                                        <i className="fa-solid fa-map-pin"></i>
                                    </em>
                                </div>

                                <br />
                                <br />

                                <label htmlFor="municipality">Municipio</label>
                                <div className="form-icon">
                                    <input
                                        type="text"
                                        id="municipality"
                                        value={formData['Municipio'] || ''}
                                        onChange={(e) =>
                                            handleInputChange('Municipio', e.target.value)
                                        }
                                    />
                                    <em>
                                        <i className="fa-solid fa-map-location-dot"></i>
                                    </em>
                                </div>
                            </div>

                            {/* Botones */}
                            <div className="dataInf">
                                <button type="submit" className="btn-save">
                                    Guardar
                                </button>

                                <button type='button' className="btn-cancelar" onClick={handleCancel}>
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileEdit;
