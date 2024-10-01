import { Link } from "react-router-dom"
import css from './Logo.module.css'


export default function Logo() {
    return (
        <Link to="/" className={css.logo}>
           <button type="button" className={css.btn}>
            phone<span className={css.accent}>BOOK</span>
            </button>
            </Link>
    )
};
