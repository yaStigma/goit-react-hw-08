import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import css from "./RegisterForm.module.css"


export default function RegisterForm() {
    // const FeedbackSchema = Yup.object().shape({
    //     name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    //     number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").matches(/^[0-9-]+$/, "Phone number is not valid").required("Phone number is required"),
    // });


    return (
        <Formik
            initialValues={""} 
            // onSubmit={handleSubmit}
            // validationSchema={FeedbackSchema}
        >
            
        </Formik>
    );
};
