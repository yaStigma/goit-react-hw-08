import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import HomePage from '../../page/HomePage/HomePage';
import  ContactsPage from '../../page/ContactsPage/ContactsPage';
import LoginPage from '../../page/LoginPage/LoginPage';
import RegistrationPage from '../../page/RegistrationPage/RegistrationPage'

// import css from "./App.module.css"
import Layout from "../Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";


export default function App() {
const dispatch = useDispatch();
// const isLoggedIn = useSelector(selectIsLoggedIn);


// useEffect(()=>{
//  if (isLoggedIn) {
//   dispatch(fetchContacts())
//  }
    
// }, [dispatch, isLoggedIn])

useEffect (() => {
  dispatch(refreshUser())
}, [dispatch])

  return (
    <Layout>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/register" element={<RegistrationPage />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/contacts" element={<ContactsPage/>} />
</Routes>
</Layout>

  );
}