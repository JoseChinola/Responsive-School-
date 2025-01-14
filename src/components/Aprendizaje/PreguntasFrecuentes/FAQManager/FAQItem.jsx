
const FAQItem = ({ questions, onClose }) => {
    const { question, answer } = questions;

    return (
        <div className="fast-q">
            <div className="card">
                <div>
                    <h3 className="title">{question}</h3>
                </div>

                <div className="parrafoBx">
                    <i className="fa-regular fa-comment"></i>
                    <div className='parrafo'>
                        <p>{answer}</p>
                    </div>
                </div>

                <div>
                    <button className="but-Cerrar" onClick={onClose}>
                        <span>Cerrar</span>
                        <svg width="15px" height="15px" viewBox="0 0 15 15">
                            <line x1="1" y1="1" x2="14" y2="14" stroke="black" strokeWidth="2" />
                            <line x1="1" y1="14" x2="14" y2="1" stroke="black" strokeWidth="2" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default FAQItem