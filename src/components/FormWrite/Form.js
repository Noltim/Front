import React, { useState } from 'react';
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Aqui você pode salvar os dados no localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Limpar os dados do formulário se necessário
        // setFormData({
        //     name: '',
        //     dateShow: '',
        //     category_id: '',
        // });

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
    )
}

export default Form;
