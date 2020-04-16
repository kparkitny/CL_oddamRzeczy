import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./style.scss";
import decorationImg from '../../../assets/Decoration.svg';
const Contact = () => {
    return (
        <section className="contactWrapper" id="contactSection">
            <div className="contactLeft"></div>
            <div className="contactRight">
                <h2 className="contactTitle">Skontaktuj się z nami</h2>
                <img src={decorationImg} alt="dekoracja" className="decorationImgStyle" />
                <Formik
                    initialValues={{
                        firstName: '',
                        email: '',
                        msg: ''
                    }}
                    validationSchema={Yup.object().shape({
                        firstName: Yup.string()
                            .min(2, "Imię musi składać się z przynajmniej trzech znaków")
                            .max(16, "Imię nie może być dłuższe niż 16 znaków")
                            .required('Imię jest wymaganym polem'),
                        email: Yup.string()
                            .email('Email jest niepoprawny')
                            .required('Email jest wymaganym polem'),
                        msg: Yup.string()
                            .min(120, "Wiadomość nie może być krótsza niż 120 znaków")
                            .required('Wiadomość jest wymaganym polem'),
                    })}
                    onSubmit={fields => {
                        const formData = {
                            "name": fields.firstName,
                            "email": fields.email,
                            "message": fields.msg
                        }
                            fetch(`  http://localhost:3000/posts`, {
                            method: 'POST',
                            headers: {
                                "Content-Type": 'application/json'
                            },
                            body: JSON.stringify(formData)
                        }).then(response => console.log(response))
                            .then(alert('Wiadomośc wysłana!'))
                    }}
                    render={({ errors, status, touched }) => (
                        <Form>
                            <div className="contactRightForm">
                                <label htmlFor="firstName" className="nameStyle">Wpisz swoje imię</label><br />
                                <Field name="firstName" placeholder="imię..." type="text" className={'formControl' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="formControlWrong" />
                            </div>
                            <div className="contactRightForm">
                                <label htmlFor="email" className="emailStyle">Wpisz swój e-mail</label><br />
                                <Field name="email" placeholder="e-mail..." type="text" className={'formControl' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="formControlWrong" />
                            </div>
                            <div className="contactRightForm">
                                <label htmlFor="msg" className="msgStyle">Wpisz swoją wiadomość</label><br />
                                <Field name="msg" placeholder="wiadomość..." type="text" className={'formControl' + (errors.msg && touched.msg ? ' is-invalid' : '')} />
                                <ErrorMessage name="msg" component="div" className="formControlWrong" />
                            </div>
                            <div className="contactRightForm">
                                <button type="submit" className="contactBtnStyle">Wyślij</button>
                            </div>
                        </Form>
                    )}
                />
            </div>
        </section>
    )
}
export default Contact;