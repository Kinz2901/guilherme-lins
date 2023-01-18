import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.container}>
            <h1>
                <Link to='/'>Guilherme Lins</Link>
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='sobremim'>Sobre mim</Link>
                </li>
                <li>
                    <Link to='habilidades'>Habilidades</Link>
                </li>
                <li>
                    <Link to='portifolio'>Portifólio</Link>
                </li>
            </ul>
        </nav>
    )
    }

    export default Navbar
