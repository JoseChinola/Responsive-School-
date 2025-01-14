import { Routes, Route } from 'react-router-dom';

import ContentAsignatura from '../components/AsignaturaMenu/ContentAsignatura'
import HomeAsignatura from '../components/AsignaturaMenu/HomeAsignatura'
import SyllabusAsignatura from '../components/AsignaturaMenu/SyllabusAsignatura'
import ForoAsignatura from '../components/AsignaturaMenu/ForoAsignatura';


const MenuAsignatura = () => {

    return (
        <>
            <Routes>
                <Route path='/Asignatura/foro' element={<ForoAsignatura />} />
                <Route path='/Asignatura/bienvenida' element={< HomeAsignatura />} />
                <Route path='/Asignatura/syllabus' element={<SyllabusAsignatura />} />
                <Route path='/Asignatura/contenido' element={<ContentAsignatura />} />
            </Routes>
        </>

    );
};

export default MenuAsignatura