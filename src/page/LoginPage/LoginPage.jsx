import LoginForm from '../../components/LoginForm/LoginForm'
import css from './LoginPage.module.css'

export default function LoginPage() {
    return (
        <div className={css.wrapper}>
        <div className={css.box}>
        <LoginForm/></div>
        <div className={css.boxItem}>
        <div className={css.block}>
        <h2>Welcome back to PhoneBook!</h2>
        <p>
        We&apos;re glad to see you again! Log in to access your digital address book and continue managing your contacts:
        </p>
<ul>
    <li>Quickly find the contacts you need with our powerful search functionality.
</li>
    <li>Edit and update your entries whenever you want, keeping your phone book always up-to-date.</li>
    <li>Add new contacts on the go, and categorize them for better organization.</li>
    <li>Access your data securely from any device, knowing that your information is always safe.</li>
</ul>
<p>
Don&apos;t waste time — simply enter your credentials and get back to your digital phone book!
</p>
<p>
Log in now and take control of your contact management!
        </p>
    </div>
        
        
        </div>
       </div>
    )
};
