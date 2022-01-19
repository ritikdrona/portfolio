import contents from 'contents'
import styles from 'styles/projects.module.scss'

function Projects() {
    console.log(contents)
    return (
        <section className={styles.projectsSection} id="projects">
            <h2 data-content="Projects" className={styles.sectionHeader}>
                Projects
            </h2>
            <div className={styles.projectsContainer}>
                <div className={styles.card}>
                    <div className={styles.projectInfo}>
                        <div className={styles.projectInfoContainer}>
                            <h3>Adhyaaya 2020 Website</h3>
                            <ul className={styles.technologies}>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                        <ul className={styles.links}>
                            <li>
                                <a href="#">G</a>
                            </li>
                            <li>
                                <a href="#">L</a>
                            </li>
                        </ul>
                    </div>
                    <img src="/images/adhyaaya.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Projects
