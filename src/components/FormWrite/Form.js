import React, { useState, useEffect } from 'react';
import Input from '../form/Input.js';
import Select from '../form/Select.js';
import SubmitButton from '../form/SubmitButton.js';
import styles from './Form.module.css';

function Form({ btnText }) {
    const [formData, setFormData] = useState({
        name: '',
        dateShow: '',
        category_id: '',
    });

    const predefinedCategories = [
        { value: 'rock', label: 'Rock' },
        { value: 'pop', label: 'Pop' },
        { value: 'hip-hop', label: 'Hip Hop' },
    ];

    useEffect(() => {
        console.log('formData mudou:', formData);
    }, [formData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // // Verificar se pelo menos um campo não está vazio --> AQUI MATEI QUANDO TORNEI REQUIRED
        // if (formData.name.trim() === '' && formData.dateShow.trim() === '' && formData.category_id.trim() === '') {
        //     // Se todos os campos estiverem vazios, não faz nada
        //     return;
        // }

        // Recuperar os dados existentes do localStorage
        const existingData = JSON.parse(localStorage.getItem('formDataArray')) || [];

        // Adicionar o novo item ao array existente
        const updatedData = [...existingData, formData];

        // Salvar o array atualizado no localStorage
        localStorage.setItem('formDataArray', JSON.stringify(updatedData));

        // Limpar os dados do formulário se necessário
        setFormData({
            name: '',
            dateShow: '',
            category_id: '',
        });

        // Adicione aqui a lógica para enviar os dados para o backend, se necessário
    };

    return (
        <form className={styles.form} onSubmit={handleFormSubmit}>
            <Input
                type="text"
                text="Nome da banda"
                name="name"
                placeholder="Digite o nome da banda"
                value={formData.name}
                handleOnChange={handleInputChange}
            />
            <Input
                type="date"
                text="Data do show"
                name="dateShow"
                placeholder=""
                value={formData.dateShow}
                handleOnChange={handleInputChange}
            />

            <Select
                name="category_id"
                text="Selecione o gênero musical"
                options={predefinedCategories}
                value={formData.category_id}
                handleOnChange={handleInputChange}
            />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default Form;
