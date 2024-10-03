import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import css from "./LoginForm.module.css"
import { nanoid } from 'nanoid';


export default function LoginForm() {
    const FeedbackSchema = Yup.object().shape({
        email: Yup.string().min(3, "Too Short!").max(50, "Too Long!").email('Invalid email')
                .required('Email required'),
        password: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Pleace, enter your password"),
    });
    
    const emailFieldId = nanoid();
    const passwordFieldId = nanoid();

    const initialValues = {
        email: "",
        password: "",
      };
      const handleSubmit = (values, actions) => {
        console.log(values);
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
                <h2>Login Form</h2>
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
				<button type="submit" className={css.button}>Log in</button>
			</Form>
        </Formik>
        </>
    );
};
