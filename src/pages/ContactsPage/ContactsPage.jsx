import ContactList from '../../components/ContactList/ContactList'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactForm from '../../components/ContactForm/ContactForm'
import css from './ContactsPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contacts/operations'


export default function ContactsPage() {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    
    useEffect(()=>{
     if (isLoggedIn) {
      dispatch(fetchContacts())
     }
        
    }, [dispatch, isLoggedIn])


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
