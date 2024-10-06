import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
// import css from "./App.module.css"
import Layout from "../Layout/Layout";
import { Routes, Route } from "react-router-dom";
import {  selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";


const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy (() => import ('../../pages/ContactsPage/ContactsPage')) ;
const LoginPage = lazy (()=> import('../../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy (() => import('../../pages/RegistrationPage/RegistrationPage'));


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
      <Suspense fallback={null}>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/" />} />   
<Route path="/login" element={ <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
<Route path="/contacts" element={ <PrivateRoute component={<ContactsPage/>} redirectTo="/login" /> } />   
</Routes>
</Suspense>
</Layout>
)
  );
}