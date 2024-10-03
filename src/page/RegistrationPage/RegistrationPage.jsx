import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {RegisterInfo} from '../../components/Infoblock/InfoBlock'
import css from './RegistrationPage.module.css'

export default function RegistrationPage() {
    return (
       <div className={css.wrapper}>
        
        <div className={css.box}>
            <RegisterForm/>
        </div>
        <div className={css.boxItem}>
        <RegisterInfo/>
        </div>
       </div>
    )
};
