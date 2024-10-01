import css from './AuthNav.module.css'

import { NavLink } from "react-router-dom"

export default function AuthNav() {
    return (
        <div className={css.box}>
        <NavLink className={css.link}  to="/register">
        <button type="button" className={css.button}>Register</button> 
        </NavLink>
        <NavLink className={css.link} to="/login">
        <button type="button" className={css.button}>Log In</button> 
        </NavLink>
      </div>
    )
};
