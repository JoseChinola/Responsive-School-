//import perfil from '../../../../../assets/imgs/customer.jpeg'
import React from 'react';
import './Card-body.css'
import ReinscripcionCard from './ReinscripcionCard';
import AutodeskCard from './AutodeskCard';
import ProfileCard from './ProfileCard';
import AccessCard from './AccessCard'
import StudentStatus from './StudentStatus';
import ContactCard from './ContactCard';
import SubjectsTable from './SubjectsTable';


const ProfileInfo = () => {
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
                            <a className='nav-link active' href="/null">Datos Universitarios</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="/null">Datos Personales</a>
                        </li>
                    </ul>

                    <div className='tab-content'>
                        <StudentStatus />
                        <ContactCard />
                        <SubjectsTable />
                    </div>
                </div>

            </div>
        </>
    );
};

export default ProfileInfo;
