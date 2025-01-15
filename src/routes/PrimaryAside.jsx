import { Routes, Route } from 'react-router-dom';

import { Home } from '../components/Home/home';

import HomeEstudiante from '../page/HomeEstudiante';
import Anuncio from '../components/Aprendizaje/Anucio/Anuncio';
import Asignacion from '../components/Aprendizaje/Asignacion/Asignacion';
import Asignaturas from '../components/Aprendizaje/Asignaturas/Asignaturas';
import ForoDiscusion from '../components/Aprendizaje/ForoDiscusion/ForoDiscusion';
import Videoconferencia from '../components/Aprendizaje/Videoconferencia/Videoconferencia';
import RecursosDigitales from '../components/Aprendizaje/RecursosDigitales/RecursosDigitales';
import FAQ from '../components/Aprendizaje/PreguntasFrecuentes/FAQ';
import GroupRecursos from '../components/Aprendizaje/RecursosDigitales/RecursoDManager/GroupRecursos';
import ProfileInfo from '../components/Auth/ProfilesInfos/ProfileInfo';
import Support from '../components/Support/Support';

const PrimaryAside = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<HomeEstudiante />} />
            <Route path='/anuncio' element={<Anuncio />} />
            <Route path='/asignaturas' element={<Asignaturas />} />
            <Route path='/foro' element={<ForoDiscusion />} />
            <Route path='/asignacion' element={<Asignacion />} />
            <Route path='/preguntas' element={<FAQ />} />
            <Route path='/recursos-digitales' element={<RecursosDigitales />} />
            <Route path='/video-conferencia' element={<Videoconferencia />} />
            <Route path='/db-ver-recursos' element={<GroupRecursos />} />
            <Route path='/profile-info' element={<ProfileInfo />} />
            <Route path="/profile-info/:section" element={<ProfileInfo />} />

            <Route path='/support' element={<Support />} />
        </Routes>
    );
};

export default PrimaryAside