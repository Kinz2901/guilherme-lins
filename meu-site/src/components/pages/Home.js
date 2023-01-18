import styles from './Home.module.css';
import { FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import react from '../../img/react-logo.png';
import js from '../../img/js-logo.png';
import html from '../../img/logo-html-5.png';
import css from '../../img/logo-css-3.png';

function Home() {
    return (
        <div>
            <div className={styles.fundo}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h2>Olá, eu sou o</h2>
                        <h1>Guilherme Lins!</h1>
                        <p>E-mail : guilhermelins978@gmail.com</p>
                        <p>Estudante de Desenvolvimento web.</p>
                        <div className={styles.logos}>
                            <img className={styles.react} src={react}></img>
                            <img className={styles.js} src={js}></img>
                            <img className={styles.html}  src={html}></img>
                            <img className={styles.css}  src={css}></img>
                        </div>
                        </div>
                            <div className={styles.foto}>
                            </div>
                        <div className={styles.icons_bar}>
                        <ul>
                            <li><a href="https://github.com/Kinz2901" target="_blank"><FaGithub/></a></li>
                            <li><a href="https://www.instagram.com/guillins15/" target="_blank"><FaInstagram/></a></li>
                            <li><a href="https://www.linkedin.com/in/guilherme-lins-ab2ab3255/" target="_blank"><FaLinkedin/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.fundo_dois}>
                <p>O futuro nos espera! &#x1F680;</p>
            </div>
        </div>
    )
}

export default Home