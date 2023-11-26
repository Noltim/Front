import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/icons8-cerveja-100.png"

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Av2" />
        </Link>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/forms" >Agendamentos</Link>
          </li>
          <li>
            <Link to="/company" >Empresa</Link>
          </li>
          <li>
            <Link to="/contact" >Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar