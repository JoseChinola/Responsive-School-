export const submenuItems = {
    home: [
        { name: 'home', label: 'Inicio', icon: 'fa-house', to: '/' },
    ],
    service: [
        { name: 'service', label: 'Servicios', icon: 'fa-building-columns', to: '/service/home-service' },
    ],
    learning: [
        { name: 'Inicio', label: 'Inicio', icon: 'fa-house', to: '/profile' },
        { name: 'anuncio', label: 'Anuncio', icon: 'fa-bullhorn', to: '/anuncio' },
        { name: 'asignatura', label: 'Asignaturas', icon: 'fa-book', to: '/asignaturas' },
        { name: 'foro', label: 'Foro de discusión', icon: 'fa-comments', to: '/foro' },
        { name: 'asignacion', label: 'Asignación', icon: 'fa-tasks', to: '/asignacion' },
        { name: 'videoconferencia', label: 'Videoconferencia', icon: 'fa-video', to: '/video-conferencia' },
        { name: 'recursoDigital', label: 'Recursos digitales', icon: 'fa-folder-open', to: '/recursos-digitales' },
        { name: 'preguntaFrec', label: 'Preguntas frecuentes', icon: 'fa-question-circle', to: '/preguntas' },
    ],
    account: [
        { name: 'perfil', label: 'Perfil', icon: 'fa-user', to: '/profile-info' },
        { name: 'cambioContrasena', label: 'Cambio de contraseña', icon: 'fa-key', to: '/profile-info' },
    ],
    support: [
        { name: 'Soporte', label: 'Soporte', icon: 'fa-headset', to: '/support' },
    ],
};