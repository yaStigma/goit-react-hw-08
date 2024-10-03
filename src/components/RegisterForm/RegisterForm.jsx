import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import css from "./RegisterForm.module.css"
import { nanoid } from 'nanoid';


export default function RegisterForm() {
    const FeedbackSchema = Yup.object().shape({
        username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Pleace, enter your name"),
        email: Yup.string().min(3, "Too Short!").max(50, "Too Long!").email('Invalid email')
                .required('Email required'),
                password: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Pleace, enter your password"),
    });
    
    const userNameFieldId = nanoid();
    const emailFieldId = nanoid();
    const passwordFieldId = nanoid();


    return (
        <>

        <Formik
            initialValues={""} 
            onSubmit={() => {}}
            validationSchema={FeedbackSchema}
        >
            
       
            	<Form className={css.form}>
                <h2>Register Form</h2>
                <div className={css.blok}>
                <label htmlFor={userNameFieldId}> Username:</label>
                <Field type="text" name="username" id={userNameFieldId} className={css.field}/>
				<ErrorMessage className={css.error} name="username" component="span" />
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
