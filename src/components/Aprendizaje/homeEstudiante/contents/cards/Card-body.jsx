//import perfil from '../../../../../assets/imgs/customer.jpeg'
import React, { useState } from 'react';
import './Card-body.css'
import ReinscripcionCard from './ReinscripcionCard';
import AutodeskCard from './AutodeskCard';
import ProfileCard from './ProfileCard';
import AccessCard from './AccessCard'
import StudentStatus from './StudentStatus';
import ContactCard from './ContactCard';
import SubjectsTable from './SubjectsTable';


const ProfileInfo = () => {

    const [activeDatos, setActiveDatos] = useState('datosUniversitarios')

    const toggleDatos = (tab) => {
        setActiveDatos(tab)
    }

    return (
        <>
            <div className='grid-container'>
                <div className='grid-left'>
                    <div className='tab-content'>
                        <ReinscripcionCard />
                        <AutodeskCard />
                        <ProfileCard />
                        <AccessCard />
                    </div>

                </div>

                <div className='grid-right'>
                    <ul className='nav nav-pills'>
                        <li className='nav-item'>
                            <p className={`nav-link ${activeDatos === 'datosUniversitarios' ? 'active' : ''}`}
                                onClick={() => toggleDatos('datosUniversitarios')}>
                                Datos Universitarios</p>
                        </li>
                        <li className='nav-item'>
                            <p className={`nav-link ${activeDatos === 'DatosPersonales' ? 'active' : ''}`}
                                onClick={() => toggleDatos('DatosPersonales')}>
                                Datos Personales</p>
                        </li>
                    </ul>
                    {activeDatos === 'datosUniversitarios' && (
                        <div className='tab-content'>
                            <StudentStatus />
                            <ContactCard />
                            <SubjectsTable />
                        </div>
                    )}

                    {activeDatos === 'DatosPersonales' && (
                        <div className='tab-content'>
                            <ContactCard />
                        </div>
                    )}

                </div>

            </div>
        </>
    );
};

export default ProfileInfo;
