import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import HomePage from '../../page/HomePage/HomePage';
import  ContactsPage from '../../page/ContactsPage/ContactsPage';
import LoginPage from '../../page/LoginPage/LoginPage';
import RegistrationPage from '../../page/RegistrationPage/RegistrationPage'
// import css from "./App.module.css"
import Layout from "../Layout/Layout";
import { Routes, Route } from "react-router-dom";
import {  selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";


export default function App() {
const dispatch = useDispatch();
const isRefreshing = useSelector(selectIsRefreshing);


useEffect (() => {
  dispatch(refreshUser())
}, [dispatch])

  return (
    isRefreshing ? (<b>Please wait, updating user info...</b>) :
    (
    <Layout>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/" />} />   
<Route path="/login" element={ <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
<Route path="/contacts" element={ <PrivateRoute component={<ContactsPage/>} redirectTo="/login" /> } />   
</Routes>
</Layout>
)
  );
}