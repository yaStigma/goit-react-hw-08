import SearchBox from '../../components/SearchBox/SearchBox'
import ContactList from '../../components/ContactList/ContactList'
import ContactForm from '../../components/ContactForm/ContactForm'

export default function ContactsPage() {
    return (
       <div>
<ContactForm/>
        <SearchBox/>
<ContactList/>
       </div>
    )
};
