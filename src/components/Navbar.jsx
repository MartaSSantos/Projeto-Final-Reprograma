import { Link } from "react-router-dom";
import styles from '../styles/components/navbar.module.css'

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <a href="#">
                <img className={styles.logo} src="https://cdn-icons-png.flaticon.com/128/5572/5572079.png" alt="desenho de maos uma de uma pessoa preta e outra de uma pessoa branca e uma gota de sangue no meio das duas" />
            </a>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item} >
                    <Link to="/informacao">Informação</Link>
                </li>
                <li className={styles.item} >
                    <Link to="/beneficios">Benefícios</Link>
                </li>
            </ul>
        </nav>
    )
}