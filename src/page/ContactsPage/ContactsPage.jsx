import ContactList from '../../components/ContactList/ContactList'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactForm from '../../components/ContactForm/ContactForm'
import css from './ContactsPage.module.css'


export default function ContactsPage() {
    return (
       <div className={css.wrapper}>
<div className={css.box}>
<ContactForm/>

</div>
<div className={css.boxItem}>
<SearchBox/>
<ContactList/>
</div>    
   </div>
    )
};
