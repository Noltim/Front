import Input from '../form/Input.js';
import Select from '../form/Select.js';
import SubmitButton from '../form/SubmitButton.js';
import styles from './Form.module.css';

function Form({btnText}) {
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

            <Select name="category_id" text="Selecione o gênero musical" />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default Form