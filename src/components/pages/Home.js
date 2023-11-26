import style from './Home.module.css';
import barFoto from '../../img/briga-de.gif'
function Home() {
    return (
        <section className={style.home_container}>
            <h1>Bem-vindo ao <span>O Bar Sem Nome</span></h1>
            <p>Ambiente calmo e familiar</p>
            <a href='/'>Agendar show</a>
            <img src={barFoto} alt="AV2" />
        </section>
    )
}

export default Home