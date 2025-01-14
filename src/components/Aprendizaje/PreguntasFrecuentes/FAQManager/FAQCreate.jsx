import React, { useState } from 'react';

const FAQCreate = ({ addQuestion, setShowCreateForm }) => {
    const [question, setQuestion] = useState(""); // Estado para la pregunta
    const [answer, setAnswer] = useState(""); // Estado para la respuesta

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evitar el comportamiento por defecto del formulario

        // Validar que ambos campos no estén vacíos
        if (question.trim() === "" || answer.trim() === "") {
            alert("Por favor ingresa una pregunta y una respuesta.");
            return;
        }

        // Crear un nuevo FAQ con la pregunta y respuesta
        const newFAQ = {
            question,
            answer
        };

        // Llamar a la función addQuestion para agregar el nuevo FAQ
        addQuestion(newFAQ);

        // Limpiar los campos
        setQuestion("");
        setAnswer("");

        // Ocultar el formulario después de agregar la nueva FAQ
        setShowCreateForm(false);
    };

    return (
        <div className='faq-create-container'>
            <h2>Crear Nuevas Preguntas Frecuentes</h2>

            <form className='form-create-question' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="question">Pregunta:</label>
                    <input
                        type="text"
                        id="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)} 
                        placeholder='Escribe tu pregunta'
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor="answer">Respuesta:</label>
                    <textarea
                        id="answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder='Escribe la respuesta'
                    />
                </div>

                <div className="container-button-save">
                    <button className="save-button" type="submit">
                        <span className="IconContainer">
                            <svg viewBox="0 0 384 512" height="0.9em" className="icon">
                                <path
                                    d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                                ></path>
                            </svg>
                        </span>
                        <p className="text">Guardar</p>
                    </button>

                    <button className="cancel-button" type="button" onClick={() => setShowCreateForm(false)}>
                        <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 1024 1024">
                            <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                        </svg>
                        <span>Cancelar</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FAQCreate;
