import styles from '../styles/components/footer.module.css'
export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.div}>
                <a href="https://www.linkedin.com/in/marta-santos-4a8309194/" target="_blank" >
                    <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/128/4701/4701533.png" />
                </a>
                <a href="mailto:martasilvaa325@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/128/4926/4926635.png" alt="" />
                </a>
                <a href="https://www.gov.br/saude/pt-br/composicao/saes/sangue/lista-de-hemocentros-no-brasil" target="_blank" rel="noopener noreferrer">
                    <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/128/1876/1876556.png" alt="" />
                </a>
            </div>
        </footer>
    )
}