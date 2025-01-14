import React, { useState } from 'react'
import data from './data/data'
import FAQItem from './FAQManager/FAQItem'
import './FAQ.css';
import FAQCreate from './FAQManager/FAQCreate';


const FAQ = () => {
    const [faquestion, setFaquestion] = useState(data)
    const [showCreateForm, setShowCreateForm] = useState(false);


    //Eliminar un anuncio basado en su id 
    const eliminarQuestion = (id) => {
        setFaquestion(faquestion.filter((question) => question.id !== id));
    }

    const addQuestion = (newQuestion) => {
        setFaquestion([...faquestion, newQuestion]);
    };

    return (
        <>

            {showCreateForm && <FAQCreate addQuestion={addQuestion} setShowCreateForm={setShowCreateForm} />}

            <div className='tema-title'>
                <h3>Preguntas y Respuestas</h3>
                <button className="Btn-create-disc" onClick={() => setShowCreateForm(!showCreateForm)} >
                    <div className="sign-create-disc">+</div>
                    <div className="text-create-disc">Crear Preguntas</div>
                </button>
            </div>

            <div className='faq-container'>
                {faquestion.map((question) => (
                    <FAQItem
                        key={question.id}
                        questions={question}
                        onClose={() => eliminarQuestion(question.id)}
                    />
                ))}
            </div >
        </>
    )
}

export default FAQ