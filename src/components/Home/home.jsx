import React from 'react';
import './home.css'

export const Home = () => {
    return (
        <section>
            <div className="cardBox">
                <div className="card">
                    <div>
                        <div className="numbers">1,504</div>
                        <div className="cardName">Estudiantes Activos</div>
                    </div>
                    <div className="iconBx">
                        <i className="fa-regular fa-user"></i>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">320</div>
                        <div className="cardName">Cursos Ofrecidos</div>
                    </div>
                    <div className="iconBx">
                        <i className="fa-solid fa-book-open"></i>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">284</div>
                        <div className="cardName">Comentarios Recibidos</div>
                    </div>
                    <div className="iconBx">
                        <i className="fa-regular fa-comment"></i>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">7,842</div>
                        <div className="cardName">Ingresos por Inscripciones</div>
                    </div>
                    <div className="iconBx">
                        <i className="fa-solid fa-money-bills"></i>
                    </div>
                </div>
            </div>

            <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Últimos Estudiantes Inscritos</h2>
                        <a href="#null" className="btn">Ver Todos</a>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Cursos Inscritos</th>
                                <th>Fecha de Inscripción</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Juan Pérez</td>
                                <td>Matemáticas, Física</td>
                                <td>01/10/2024</td>
                                <td><span className="status delivered">Inscrito</span></td>
                            </tr>
                            <tr>
                                <td>Alicia Gómez</td>
                                <td>Lengua, Historia</td>
                                <td>02/10/2024</td>
                                <td><span className="status pending">Pendiente de Pago</span></td>
                            </tr>
                            <tr>
                                <td>Roberto Sánchez</td>
                                <td>Geografía, Química</td>
                                <td>03/10/2024</td>
                                <td><span className="status return">Cancelado</span></td>
                            </tr>
                            <tr>
                                <td>María López</td>
                                <td>Inglés, Biología</td>
                                <td>04/10/2024</td>
                                <td><span className="status inProgress">En Proceso</span></td>
                            </tr>
                            <tr>
                                <td>María López</td>
                                <td>Inglés, Biología</td>
                                <td>04/10/2024</td>
                                <td><span className="status inProgress">En Proceso</span></td>
                            </tr>
                            <tr>
                                <td>María López</td>
                                <td>Inglés, Biología</td>
                                <td>04/10/2024</td>
                                <td><span className="status inProgress">En Proceso</span></td>
                            </tr>
                            <tr>
                                <td>María López</td>
                                <td>Inglés, Biología</td>
                                <td>04/10/2024</td>
                                <td><span className="status inProgress">En Proceso</span></td>
                            </tr>
                            <tr>
                                <td>María López</td>
                                <td>Inglés, Biología</td>
                                <td>04/10/2024</td>
                                <td><span className="status inProgress">En Proceso</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="recentCustomers">
                    <div className="cardHeader">
                        <h2>Últimos Profesores Registrados</h2>
                    </div>

                    <table>
                        <tbody>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profesor Pedro Martinez" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Pedro Martinez <br /> <span>Matemáticas</span></h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profesor Ana Fernández" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Ana Fernández <br /> <span>Historia</span></h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profesor Carla Jiménez" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Carla Jiménez <br /> <span>Física</span></h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profesor Luisa Fernández" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Luisa Fernández <br /> <span>Química</span></h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profesor Maria Peña" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Maria Peña <br /> <span>Literatura</span></h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profesor Daniela Mercedez" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Daniela Mercedez <br /> <span>Ciencias Sociales</span></h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profesor Daniel Rodriguez" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Daniel Rodriguez <br /> <span>Inglés</span></h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profesor Katherine Hernández" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Katherine Hernández <br /> <span>Orientaciones</span></h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
