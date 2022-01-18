import styles from '/styles/side-panel.module.scss'

function SidePanel() {
    return (
        <aside className={styles.sidePanel}>
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
            <div className={styles.socialLinks}>

            </div>
        </aside>
    )
}

export default SidePanel
