import React, { useState } from 'react';
import '../../Service.css';

const HomeService = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }



    return (
        <div className='home-service-container'>
            <div className='header-text'>
                <h1>
                    Bienvenido, Aidan Arlen Mateo Valdez
                </h1>
                <div className='head-header'>
                    <p>
                        La Universidad te da la bienvenida.
                        Administre su cuenta de estudiante y consulte nuestros
                        servicios que están disponibles.
                    </p>
                </div>
            </div>
            <div className='divider-cont'></div>

            <div className="accordion">

                <div className="accordion-item">
                    <div href="#" className={`accordion-head  ${menuVisible ? 'active' : ''}`} onClick={toggleMenu}>
                        <h5>
                            <div className="head-content">
                                <h5>
                                    Calificaciones de asignaturas período
                                    <strong>
                                        SEPTIEMBRE/DICIEMBRE 2024
                                    </strong>
                                </h5>
                                <strong>
                                    <div>
                                        <p>Haga
                                            <span>
                                                clic aquí
                                            </span>
                                            para que pueda consultar las calificaciones de las asignaturas inscritas.
                                        </p>
                                    </div>
                                </strong>
                            </div>
                        </h5>
                        <span className="accordion-icon">
                            <i className="fa-solid fa-caret-down"></i>
                        </span>
                    </div>


                    {/* Menu desplegable */}
                    {menuVisible && (
                        <div className="accordion-body">
                            <div className='accordion-innert'>
                                <div className='accordion-content'>

                                    <div className="card pricing">
                                        <span className="pricing-badge badge bg-primary">Aprobado</span>
                                        <div className="pricing-head">
                                            <div className="pricing-title">
                                                <h5 className="card-title title">
                                                    403306 - INTRODUCCIÓN A LA PSICOLOGÍA
                                                </h5>
                                                <small>4 crédito(s) | sección 741A</small><br /> LUISA FERNANDA PÉREZ GÓMEZ
                                            </div>
                                            <div className="card-text">
                                                <div className="card-text-nota">
                                                    <div className="text-nota">
                                                        <span className="nota-final">85</span>
                                                        <span className="sub-text">Suma Final</span>
                                                    </div>
                                                    <div className="text-nota">
                                                        <span className="nota-final">B</span>
                                                        <span className="sub-text">Nota Final</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="pricing-body">
                                            <ul className="pricing-features">
                                                <li>
                                                    <span>Asistencia</span> - <span><h6>9</h6></span>
                                                </li>
                                                <li>
                                                    <span>Primer Parcial</span> - <span><h6>16</h6></span>
                                                </li>
                                                <li>
                                                    <span>Trabajo Práctico</span> - <span><h6>25</h6></span>
                                                </li>
                                                <li>
                                                    <span>Examen Final</span> - <span><h6>35</h6></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className='accordion-content'>

                                    <div className="card pricing">
                                        <span className="pricing-badge badge bg-primary">Aprobado</span>
                                        <div className="pricing-head">
                                            <div className="pricing-title">
                                                <h5 className="card-title title">
                                                    403307 - PSICOLOGÍA EVOLUTIVA
                                                </h5>
                                                <small>3 crédito(s) | sección 742B</small><br /> CARLOS EDUARDO RIVERA MORA
                                            </div>
                                            <div className="card-text">
                                                <div className="card-text-nota">
                                                    <div className="text-nota">
                                                        <span className="nota-final">70</span>
                                                        <span className="sub-text">Suma Final</span>
                                                    </div>
                                                    <div className="text-nota">
                                                        <span className="nota-final">D</span>
                                                        <span className="sub-text">Nota Final</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="pricing-features">
                                                <li>
                                                    <span>Asistencia</span> - <span><h6>6</h6></span>
                                                </li>
                                                <li>
                                                    <span>Primer Parcial</span> - <span><h6>12</h6></span>
                                                </li>
                                                <li>
                                                    <span>Trabajo Práctico</span> - <span><h6>15</h6></span>
                                                </li>
                                                <li>
                                                    <span>Examen Final</span> - <span><h6>17</h6></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className='accordion-content'>
                                    {/* Cuarto Curso */}
                                    <div className="card pricing">
                                        <span className="pricing-badge badge bg-danger">Reprobado</span>
                                        <div className="pricing-head">
                                            <div className="pricing-title">
                                                <h5 className="card-title title">
                                                    403308 - FUNDAMENTOS DE LA PSICOLOGÍA
                                                </h5>
                                                <small>3 crédito(s) | sección 744C</small><br /> MARÍA PAOLA GARCÍA
                                            </div>
                                            <div className="card-text">
                                                <div className="card-text-nota">
                                                    <div className="text-nota">
                                                        <span className="nota-final">42</span>
                                                        <span className="sub-text">Suma Final</span>
                                                    </div>
                                                    <div className="text-nota">
                                                        <span className="nota-final">F</span>
                                                        <span className="sub-text">Nota Final</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="pricing-features">
                                                <li>
                                                    <span>Asistencia</span> - <span><h6>5</h6></span>
                                                </li>
                                                <li>
                                                    <span>Primer Parcial</span> - <span><h6>8</h6></span>
                                                </li>
                                                <li>
                                                    <span>Trabajo Práctico</span> - <span><h6>15</h6></span>
                                                </li>
                                                <li>
                                                    <span>Examen Final</span> - <span><h6>14</h6></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className='accordion-content'>
                                    {/* Quinto Curso */}
                                    <div className="card pricing">
                                        <span className="pricing-badge badge bg-primary">Aprobado</span>
                                        <div className="pricing-head">
                                            <div className="pricing-title">
                                                <h5 className="card-title title">
                                                    403309 - PSICOLOGÍA SOCIAL
                                                </h5>
                                                <small>3 crédito(s) | sección 745D</small><br /> ANDREA SERRANO
                                            </div>
                                            <div className="card-text">
                                                <div className="card-text-nota">
                                                    <div className="text-nota">
                                                        <span className="nota-final">88</span>
                                                        <span className="sub-text">Suma Final</span>
                                                    </div>
                                                    <div className="text-nota">
                                                        <span className="nota-final">B</span>
                                                        <span className="sub-text">Nota Final</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="pricing-features">
                                                <li>
                                                    <span>Asistencia</span> - <span><h6>10</h6></span>
                                                </li>
                                                <li>
                                                    <span>Primer Parcial</span> - <span><h6>18</h6></span>
                                                </li>
                                                <li>
                                                    <span>Trabajo Práctico</span> - <span><h6>30</h6></span>
                                                </li>
                                                <li>
                                                    <span>Examen Final</span> - <span><h6>40</h6></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className='accordion-content'>
                                    {/* Sexto Curso */}
                                    <div className="card pricing">
                                        <span className="pricing-badge badge bg-primary">Aprobado</span>
                                        <div className="pricing-head">
                                            <div className="pricing-title">
                                                <h5 className="card-title title">
                                                    403310 - PSICOLOGÍA COGNITIVA
                                                </h5>
                                                <small>3 crédito(s) | sección 746E</small><br /> JORGE LUIS GARCÍA
                                            </div>
                                            <div className="card-text">
                                                <div className="card-text-nota">
                                                    <div className="text-nota">
                                                        <span className="nota-final">92</span>
                                                        <span className="sub-text">Suma Final</span>
                                                    </div>
                                                    <div className="text-nota">
                                                        <span className="nota-final">A</span>
                                                        <span className="sub-text">Nota Final</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="pricing-features">
                                                <li>
                                                    <span>Asistencia</span> - <span><h6>10</h6></span>
                                                </li>
                                                <li>
                                                    <span>Primer Parcial</span> - <span><h6>22</h6></span>
                                                </li>
                                                <li>
                                                    <span>Trabajo Práctico</span> - <span><h6>28</h6></span>
                                                </li>
                                                <li>
                                                    <span>Examen Final</span> - <span><h6>42</h6></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                </div>

            </div>



            <div className="card">
                <div className="card-row-info">
                    <div class="card-info">
                        <div class="card card-full">
                            <div class="car-cont">
                                <div class="card-block">
                                    <div class="svg-img">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
                                            <rect x="5" y="7" width="60" height="56" rx="7" ry="7" fill="#8cbdff42" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></rect>
                                            <rect x="25" y="27" width="60" height="56" rx="7" ry="7" fill="#8cbdff42" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></rect>
                                            <rect x="15" y="17" width="60" height="56" rx="7" ry="7" fill="#fff" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></rect>
                                            <line x1="15" y1="29" x2="75" y2="29" fill="none" stroke="#2f5f8f" stroke-miterlimit="10" stroke-width="2"></line>
                                            <circle cx="53" cy="23" r="2" fill="#c4cefe"></circle>
                                            <circle cx="60" cy="23" r="2" fill="#c4cefe"></circle>
                                            <circle cx="67" cy="23" r="2" fill="#c4cefe"></circle>
                                            <rect x="22" y="39" width="20" height="20" rx="2" ry="2" fill="none" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></rect>
                                            <circle cx="32" cy="45.81" r="2" fill="none" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                                            <path d="M29,54.31a3,3,0,0,1,6,0" fill="none" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                                            <line x1="49" y1="40" x2="69" y2="40" fill="none" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                                            <line x1="49" y1="51" x2="69" y2="51" fill="none" stroke="#c4cefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                                            <line x1="49" y1="57" x2="59" y2="57" fill="none" stroke="#c4cefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                                            <line x1="64" y1="57" x2="66" y2="57" fill="none" stroke="#c4cefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                                            <line x1="49" y1="46" x2="59" y2="46" fill="none" stroke="#c4cefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                                            <line x1="64" y1="46" x2="66" y2="46" fill="none" stroke="#c4cefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                                        </svg>
                                    </div>
                                    <div class="text">
                                        <h5 class="title">Información Personal</h5>
                                        <p>Consulte las informaciones de su perfíl y mantenga los datos actualizados.</p>

                                    </div>
                                </div>
                                <div class="action">
                                    <a href="/profile-info/general" class="link"><span>Administre su Cuenta</span> <em class="icon ni ni-chevron-right"></em></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-info">
                        <div class="card card-full">
                            <div class="car-cont">
                                <div class="card-block">
                                    <div class="svg-img">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
                                            <path d="M26,70.78V24.5a7,7,0,0,1,7-7H69a9,9,0,0,1,9,9v49a7,7,0,0,1-7,7H16.55S25.72,78.89,26,70.78Z" fill="#fff" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                                            <path d="M7,30.5H26a0,0,0,0,1,0,0V73.9a8.6,8.6,0,0,1-8.6,8.6H13.6A8.6,8.6,0,0,1,5,73.9V32.5a2,2,0,0,1,2-2Z" fill="#8cbdff42" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                                            <circle cx="71.5" cy="21" r="13.5" fill="#fff" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                                            <rect x="34" y="33.5" width="16" height="8" rx="1" ry="1" fill="#c4cefe"></rect>
                                            <line x1="35" y1="46.5" x2="67" y2="46.5" fill="none" stroke="#c4cefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                                            <line x1="35" y1="53.5" x2="67" y2="53.5" fill="none" stroke="#c4cefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                                            <line x1="35" y1="59.5" x2="67" y2="59.5" fill="none" stroke="#c4cefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                                            <line x1="35" y1="64.5" x2="67" y2="64.5" fill="none" stroke="#c4cefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                                            <line x1="35" y1="71.5" x2="51" y2="71.5" fill="none" stroke="#c4cefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                                            <path d="M75.24,23.79a5.2,5.2,0,0,1-6.42,2.57,5.78,5.78,0,0,1-3.26-7.25,5.25,5.25,0,0,1,6.8-3.47,5.35,5.35,0,0,1,2,1.34l2.75,2.75" fill="none" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                                            <polyline points="77.75 16.61 77.75 20.61 73.75 20.61" fill="none" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                                        </svg>
                                    </div>
                                    <div class="text">
                                        <h5 class="title">Configuración de seguridad</h5>
                                        <p>Mantenga el control de acceso de su cuenta segura.</p>
                                    </div>
                                </div>
                                <div class="action">
                                    <a href="/profile-info/settings" class="link"><span>Ver Configuración</span> <em class="icon ni ni-chevron-right"></em></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-info">
                        <div class="card card-full">
                            <div class="car-cont">
                                <div class="card-block">
                                    <div class="svg-img">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
                                            <path d="M68.14,80.86,30.21,72.69a5.93,5.93,0,0,1-4.57-7l12.26-56A6,6,0,0,1,45,5.14l28.18,6.07L85.5,29.51,75.24,76.33A6,6,0,0,1,68.14,80.86Z" fill="#eff1ff" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                                            <polyline points="73 12.18 69.83 26.66 85.37 30.08" fill="#eff1ff" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                                            <path d="M66.26,71.15,29.05,82.46a6,6,0,0,1-7.46-4L4.76,23.15a6,6,0,0,1,4-7.47l27.64-8.4L56.16,17.39,70.24,63.68A6,6,0,0,1,66.26,71.15Z" fill="#8cbdff42" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                                            <polyline points="36.7 8.22 41.05 22.53 56.33 17.96" fill="#8cbdff42" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                                            <path d="M68,85H29a6,6,0,0,1-6-6V21a6,6,0,0,1,6-6H58L74,30.47V79A6,6,0,0,1,68,85Z" fill="#fff" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                                            <polyline points="58 16 58 31 74 31.07" fill="#fff" stroke="#2f5f8f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                                            <line x1="45" y1="41" x2="61" y2="41" fill="none" stroke="#c4cefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                                            <line x1="35" y1="48" x2="61" y2="48" fill="none" stroke="#c4cefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                                            <line x1="35" y1="55" x2="61" y2="55" fill="none" stroke="#c4cefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                                            <line x1="35" y1="63" x2="61" y2="63" fill="none" stroke="#c4cefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                                            <line x1="35" y1="69" x2="51" y2="69" fill="none" stroke="#c4cefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line><text transform="translate(34.54 43.18) scale(0.99 1)" font-size="9.31" fill="#2f5f8f" font-family="Nunito-Black, Nunito Black">$</text>
                                        </svg>
                                    </div>
                                    <div class="text">
                                        <h5 class="title">Historial de Pagos</h5>
                                        <p>Consulte y descargue los pagos realizados con tarjetas de crédito en la plataforma.</p>
                                    </div>
                                </div>
                                <div class="action">
                                    <a href="/service/payment-history" class="link"><span>Ver Historial</span> <em class="icon ni ni-chevron-right"></em></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default HomeService;