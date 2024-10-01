import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'


export default function Navigation() {
    return (
        <nav className={css.box}>
        {/* <NavLink className={css.link} to="/">
        <button type="button" className={css.button}>Home </button>
          
        </NavLink> */}
        
          <NavLink className={css.link} to="/contacts">
            <button type="button" className={css.button}>Contacts</button>
            
          </NavLink>
        
      </nav>

    )
};
