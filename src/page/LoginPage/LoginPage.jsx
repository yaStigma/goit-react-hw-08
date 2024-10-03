import LoginForm from '../../components/LoginForm/LoginForm'
import {LoginInfo} from '../../components/Infoblock/InfoBlock'
import css from './LoginPage.module.css'

export default function LoginPage() {
    return (
        <div className={css.wrapper}>
        <LoginForm/>
        <LoginInfo/>
       </div>
    )
};
