export const menuItems = {
    menu: [
        { name: 'home-service', label: 'Inicio', icon: 'fa-house', to: '/service/home-service' },
        { name: 'class-schedule', label: 'Horarios de clases', icon: 'fa-calendar-alt', to: '/service/class-schedule' },
    ],
    services: [
        { name: 'subject-relation', label: 'Relación de Materias', icon: 'fa-book-open', to: '/service/service-materia' },
        { name: 'completed-courses', label: 'Asignaturas Cursadas', icon: 'fa-check-circle', to: '/service/materia-cursada' },
        { name: 'subject-periods', label: 'Asignaturas Períodos', icon: 'fa-calendar-check', to: '/service/asignatura-periodo' },
        { name: 're-registration', label: 'Reinscripción', icon: 'fa-user-edit', to: '/service/reinscripcion' },
        { name: 'subject-selection', label: 'Selección Asignaturas', icon: 'fa-list-alt', to: '/service/seleccion-asignatura' },
    ],
    treasury: [
        { name: 'account-status', label: 'Estado de Cuenta', icon: 'fa-wallet', to: '/service/financial-state' },
        { name: 'announcement', label: 'Procesar pago', icon: 'fa-credit-card', to: '/service/process-payment' },
        { name: 'payment-history', label: 'Historial de Pagos', icon: 'fa-file-invoice-dollar', to: '/service/payment-history' },
    ],
    UMa: [
        { name: 'back', label: 'Regresar', icon: 'fa-arrow-left', to: '/' },
    ],
};