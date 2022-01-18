import styles from "styles/header.module.scss";

function Header() {
    return (
        <header className={styles.header}>
            <div className="logo">Ritik Drona</div>
            <nav>
                <ul>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
