import css from './Section.module.css'

const Section = ({ title, children }) => {
    return (
        <section className={title ? css.superSection : css.baseSection}>
            {title && <h1>{title}</h1>}
            {children}
        </section>
    )
}

export default Section
