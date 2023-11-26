import Form from '../FormWrite/Form';
import styles from './NewForm.module.css';

function NewForm(){
    return(
        <div className={styles.newform_container}>
            <h1>Agendamento</h1>
            <p>Escolhe o melhor dia para seu show</p>
            <Form btnText="Agendar"/>
        </div>
    )
}

export default NewForm