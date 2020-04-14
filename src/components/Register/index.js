import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { NavLink } from "react-router-dom";
import "./style.scss";
import decorationImg from '../../assets/Decoration.svg';

const Register = () => {
  return (
    <section className="registerWrapper">

    <div className="registerCenter">
        <h2 className="registerTitle">Nowe konto</h2>
        <img src={decorationImg} alt="dekoracja" className="decorationImgStyle"/>
      <Formik
          initialValues={{
              email: '',
              password: '',
              passwordConfirm: ''
          }}
          validationSchema={Yup.object().shape({
              email: Yup.string()
                  .email('Email jest niepoprawny')
                  .required('Email jest wymaganym polem'),
             password: Yup.string()
                  .min(6, 'Hasło jest za krótkie - minimum to 6 znaków.')
                  // .matches(/[a-zA-Z]/, 'Hasło może zawierać tylko małe i duże litery')
                  .required('Hasło jest wymaganym polem'),
             passwordConfirm: Yup.string()
                  .min(6, 'Hasło jest za krótkie - minimum to 6 znaków.')
                  // .matches(/[a-zA-Z]/, 'Hasło może zawierać tylko małe i duże litery')
                  .required('Powtórz hasło'),
          })}
          onSubmit={fields => {
              alert('Wykonano!');
          }}
          render={({ errors, status, touched }) => (
              <Form>
                  <div className="registerForm">
                      <label htmlFor="email" className="registerEmailStyle">Email</label><br />
                      <Field name="email" type="text" className={'registerFormControl' + (errors.email && touched.email ? ' is-invalid' : '')} />
                      <ErrorMessage name="email" component="div" className="registerFormControlWrong" />
                  </div>
                  <div className="registerForm">
                      <label htmlFor="password" className="registerPassStyle">Hasło</label><br />
                      <Field name="password" type="text" className={'registerFormControl' + (errors.password && touched.password ? ' is-invalid' : '')} />
                      <ErrorMessage name="password" component="div" className="registerFormControlWrong" />
                  </div>

                  <div className="registerForm">
                      <label htmlFor="passwordConfirm" className="registerPassStyle">Powtórz hasło</label><br />
                      <Field name="passwordConfirm" type="text" className={'registerFormControl' + (errors.passwordConfirm && touched.passwordConfirm ? ' is-invalid' : '')} />
                      <ErrorMessage name="passwordConfirm" component="div" className="registerFormControlWrong" />
                  </div>

                  <div className="registerForm">
                  <ul>
                    <li>
                      <button onclick="window.location.href='/register'" className="registerBtnNewAccountStyle">Założ konto</button>
                    {/* <NavLink to="/register">Założ konto</NavLink> */}
                    </li>
                    <li>
                      <button type="submit" className="registerBtnStyle">Wyślij</button>
                    </li>
                  </ul>     
                  </div>
              </Form>
          )}
      />
      </div>
</section>
  )
}
export default Register;

