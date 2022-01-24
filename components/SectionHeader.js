import styles from 'styles/section-header.module.scss'

function SectionHeader({ text }) {
    return (
        <div className={styles.sectionHeader}>
            <div>{text}</div>
            <h2>{text}</h2>
        </div>
    )
}

export default SectionHeader
