import React, { useEffect, useState } from 'react';
import './Forms.module.css';

function Forms() {
    // Estado para armazenar os dados do localStorage
    const [formDataArray, setFormDataArray] = useState([]);

    useEffect(() => {
        // Recuperar os dados do localStorage
        const storedFormDataArray = localStorage.getItem('formDataArray');

        // Se houver dados no localStorage, atualize o estado
        if (storedFormDataArray) {
            setFormDataArray(JSON.parse(storedFormDataArray));
        }
    }, []); // O segundo parâmetro vazio [] garante que o useEffect seja executado apenas uma vez durante a montagem do componente

    return (
        <div className="container">
            <h1>Eventos na casa</h1>
            {formDataArray.map((formData, index) => (
                <div className="event-card" key={index}>
                    <p>Nome da Banda: {formData.name}</p>
                    <p>Data do Show: {formData.dateShow}</p>
                    <p>Gênero Musical: {formData.category_id}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Forms;
