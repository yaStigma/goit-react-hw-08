import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import css from "./RegisterForm.module.css"
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';


export default function RegisterForm() {
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Pleace, enter your name"),
        email: Yup.string().min(3, "Too Short!").max(50, "Too Long!").email('Invalid email')
                .required('Email required'),
                password: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Pleace, enter your password"),
    });
    
    const initialValues = {
        name: "",
        email: "",
        password: "",
      };

    const nameFieldId = nanoid();
    const emailFieldId = nanoid();
    const passwordFieldId = nanoid();

    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
      console.log(values);
      dispatch(register(values));
      actions.resetForm();
    };

    return (
        <>

        <Formik
            initialValues={initialValues} 
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            
       
            	<Form className={css.form}>
                <h2>Register Form</h2>
                <div className={css.blok}>
                <label htmlFor={nameFieldId}> Username:</label>
                <Field type="text" name="name" id={nameFieldId} className={css.field}/>
				<ErrorMessage className={css.error} name="name" component="span" />
                </div>
                <div className={css.blok}>
                <label htmlFor={emailFieldId}> Email:</label>
                <Field type="email" name="email" id={emailFieldId} className={css.field}/>
                <ErrorMessage className={css.error} name="email" component="span" />
                </div>
                <div className={css.blok}>
                <label htmlFor={passwordFieldId}> Password:</label>
                <Field type="password" name="password" id={passwordFieldId} className={css.field}/>
                <ErrorMessage className={css.error} name="password" component="span" />
                </div>
				<button type="submit" className={css.button}>Register</button>
			</Form>
        </Formik>
        </>
    );
};
