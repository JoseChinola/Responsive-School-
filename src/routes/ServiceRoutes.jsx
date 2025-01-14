import { Routes, Route } from 'react-router-dom';
import ClassSchedule from '../components/service/menu-service/class-schedule/ClassSchedule'
import HomeService from '../components/service/menu-service/home-service/HomeService'
import SubjectRelation from '../components/service/servicios/subject-relation/SubjectRelation';
import CompletedCourses from '../components/service/servicios/completed-courses/CompletedCourses';
import SubjecPeriods from '../components/service/servicios/subject-periods/SubjecPeriods';
import Registrations from '../components/service/servicios/re-registration/Registrations';
import SubjectSelection from '../components/service/servicios/subject-selection/SubjectSelection';
import AccountStatus from '../components/service/Tesoreria/account-status/AccountStatus';
import Announcement from '../components/service/Tesoreria/announcement/Announcement';
import PaymentHistory from '../components/service/Tesoreria/payment-history/PaymentHistory';



const ServiceRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/service/home-service' element={<HomeService />} />
                <Route path='/service/class-schedule' element={<ClassSchedule />} />
                <Route path='/service/service-materia' element={<SubjectRelation />} />
                <Route path='/service/materia-cursada' element={<CompletedCourses />} />
                <Route path='/service/asignatura-periodo' element={<SubjecPeriods />} />
                <Route path='/service/reinscripcion' element={<Registrations />} />
                <Route path='/service/seleccion-asignatura' element={<SubjectSelection />} />
                <Route path='/service/financial-state' element={<AccountStatus />} />
                <Route path='/service/process-payment' element={<Announcement />} />
                <Route path='/service/payment-history' element={<PaymentHistory />} />
            </Routes>
        </>

    );
};

export default ServiceRoutes