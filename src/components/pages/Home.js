import style from './Home.module.css';
import barFoto from '../../img/briga-de.gif'
import LinkButton from '../layout/LinkButton';
function Home() {
    return (
        <section className={style.home_container}>
            <h1>Bem-vindo ao <span>O Bar Sem Nome</span></h1>
            <p>Ambiente calmo e familiar</p>
            <LinkButton to='/newform' text='Agende aqui!'/>
            <img src={barFoto} alt="AV2" />
        </section>
    )
}

export default Home