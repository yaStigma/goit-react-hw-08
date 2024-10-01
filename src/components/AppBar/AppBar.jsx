import Logo from "../Logo/Logo";
import SearchBox from '../../components/SearchBox/SearchBox'
import Navigation from '../Navigation/Navigation'
import UserMenu from '../UserMenu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'
import css from './AppBar.module.css'

export default function AppBar() {
    return (
        <header className={css.wrapper}>
<Logo/>
<Navigation/>
<SearchBox/>
<UserMenu/>
<AuthNav/>
        </header>
    )
};
