import Logo from "../Logo/Logo";
import Navigation from '../Navigation/Navigation'
import UserMenu from '../UserMenu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'
import css from './AppBar.module.css'

export default function AppBar() {
    return (
        <header className={css.wrapper}>
<Logo/>
<Navigation/>
<UserMenu/>
<AuthNav/>
        </header>
    )
};
