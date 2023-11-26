import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer(){
    return (
        <footer>
            <ul>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
                <p>
                    <span>Av2 de Dioguinho</span> &copy; 2023
                </p>
            </ul>
        </footer>
    )
}

export default Footer