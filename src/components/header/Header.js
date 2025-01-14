import { useLocation } from 'react-router-dom';

const HeaderPage = () => {
    const location = useLocation();  // Obtén la ubicación actual

    // El array headerContent con rutas, títulos y subtítulos
    const headerContent = [
        {
            title: "Página Principal",
            subTitle: "Inicio",
            icon: "fa-home",
            subTitle2: "Página Principal",
            path: "/"
        },
        {
            title: "Página Principal",
            icon: "fa-user",
            subTitle: "Inicio",
            subTitle2: "Página Principal Estudiante",
            path: "/profile"
        },
        {
            title: "Anuncios",
            icon: "fa-bullhorn",
            subTitle: "UMa",
            subTitle2: "Anuncios",
            path: "/anuncio"
        },
        {
            title: "Asignaturas",
            icon: "fa-book-open",
            subTitle: "Inicio",
            subTitle2: "Asignaturas",
            path: "/asignaturas"
        },
        {
            title: "Foro de discusión",
            icon: "fa-comments",
            subTitle: "UMa",
            subTitle2: "Foro de discusión",
            path: "/foro"
        },
        {
            title: "Asignación",
            icon: "fa-graduation-cap",
            subTitle: "UMa",
            subTitle2: "Asignación",
            path: "/asignacion"
        },
        {
            title: "Conferencia(s) Actividades",
            icon: "fa-video",
            subTitle: "UMa",
            subTitle2: "Conferencia(s)",
            path: "/video-conferencia"
        },
        {
            title: "Recursos digitales",
            icon: "fa-cloud",
            subTitle: "UMa",
            subTitle2: "Recursos digitales",
            path: "/recursos-digitales"
        },
        {
            title: "Preguntas frecuentes",
            icon: "fa-question-circle",
            subTitle: "Inicio",
            subTitle2: "Preguntas frecuentes",
            path: "/preguntas"
        },
        {
            title: "Base de Datos",
            icon: "fa-database",
            subTitle: "",
            subTitle2: "Recursos Digitales",
            path: "/db-ver-recursos"
        },
        {
            title: "Mi Perfil",
            icon: "fa-user",
            subTitle: "General",
            subTitle2: "Configuración de la cuenta",
            path: "/profile-info/general"
        },
        {
            title: "Mi Perfil",
            icon: "fa-user",
            subTitle: "Configuración de la cuenta",
            subTitle2: "university",
            path: "/profile-info/university"
        },
        {
            title: "Mi Perfil",
            icon: "fa-user",
            subTitle: "Configuración de la cuenta",
            subTitle2: "settings",
            path: "/profile-info/settings"
        },



        {
            title: "Tutoriales de la plataforma",
            icon: "fa-users",
            subTitle: "UMa",
            subTitle2: "Tutoriales",
            path: "/support"
        },
        {
            title: "Plataforma de servicio",
            icon: "fa-tools",
            subTitle: "UMa",
            subTitle2: "",
            path: "/service"
        },
        {
            title: "plataforma de clases",
            icon: "fa-book-open",
            subTitle: "UMa",
            subTitle2: "",
            path: "/asignatura"
        },
    ];

    // Buscar el contenido que corresponde a la ruta actual
    const currentHeader = headerContent.find((header) => header.path === location.pathname);


    // Si no se encuentra ningún contenido correspondiente, se puede mostrar un valor por defecto.
    const title = currentHeader ? currentHeader.title : "Página no encontrada";
    const subTitle = currentHeader ? currentHeader.subTitle : "";
    const subTitle2 = currentHeader ? currentHeader.subTitle2 : "";
    const icon = currentHeader ? currentHeader.icon : "";



    return (
        <div className="title-page">
            <h1>
                {/* Display icon if available */}
                {icon && <i className={`fa-solid ${icon}`} style={{ marginRight: '8px' }}></i>}
                {title}
            </h1>
            <ul>
                <li>{subTitle}</li>
                <li>{subTitle2}</li>
            </ul>
        </div>
    );
};

export default HeaderPage;
