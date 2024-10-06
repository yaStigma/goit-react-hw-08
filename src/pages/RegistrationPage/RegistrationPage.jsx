import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from './RegistrationPage.module.css';

export default function RegistrationPage() {
    return (
       <div className={css.wrapper}>
        
        <div className={css.box}>
            <RegisterForm/>
        </div>
        <div className={css.boxItem}>
        <div className={css.block}>
        <h2>Welcome to PhoneBook!</h2>
        <p>
        Register now to gain access to a convenient tool for storing and managing your contacts. With PhoneBook, you can:
        </p>
<ul>
    <li>Save all your important numbers in one place — no more paper notebooks and lost contacts.</li>
    <li>Organize your contacts into groups for easy navigation, making it simple to find the right person among dozens or even hundreds of entries.</li>
    <li>Search for the contacts you need in seconds using a powerful search system.</li>
    <li>Edit information with just a couple of clicks — add or update phone numbers, addresses, and notes effortlessly.</li>
</ul>
<p>
We care about the security of your data — all contacts are stored in a secure cloud, and only you have access to them. Whether you&apos;re using a computer, tablet, or smartphone, you can quickly access your phone book from any device.
</p>
<p>
Start building your digital address book now and enjoy the ease of managing your contacts!
        </p>
    </div>
        </div>
       </div>
    )
};
