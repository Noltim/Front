import Input from '../form/Input.js';
import Select from '../form/Select.js';
import SubmitButton from '../form/SubmitButton.js';
import styles from './Form.module.css';
import { useState } from 'react';

function Form({ btnText }) {
    // Exemplo de categorias predefinidas
    const predefinedCategories = [
        { value: 'rock', label: 'Rock' },
        { value: 'pop', label: 'Pop' },
        { value: 'hip-hop', label: 'Hip Hop' },
        // Adicione mais categorias conforme necessário
    ];

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome da banda"
                name="name"
                placeholder="Digite o nome da banda"
            />
            <Input
                type="date"
                text="Data do show"
                name="dateShow"
                placeholder=""
            />

            <Select
                name="category_id"
                text="Selecione o gênero musical"
                options={predefinedCategories}
                handleOnChange={handleCategoryChange}
                value={selectedCategory}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default Form;
