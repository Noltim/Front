import Form from '../checkIn/Form';
import styles from './NewForm.module.css';

function NewForm(){
    return(
        <div className={styles.newform_container}>
            <h1>Agendamento</h1>
            <p>Agende o dia do seu show</p>
            <Form/>
        </div>
    )
}

export default NewForm