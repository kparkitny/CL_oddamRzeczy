import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LoginBox from "../Home/HomeHeader/LoginBox/";
import NavBox from "../Home/HomeHeader/NavBox/";
import Footer from "../Home/Footer"
import "./style.scss";
import decorationImg from '../../assets/Decoration.svg';

const Login = () => {
  return (
    <>
    <div className="topContainer">
      <LoginBox />
      <NavBox />
    </div>
    <section className="loginWrapper">

    <div className="loginCenter">
        <h2 className="loginTitle">Logowanie</h2>
        <img src={decorationImg} alt="dekoracja" className="decorationImgStyle"/>
      <Formik
          initialValues={{
              email: '',
              password: ''
          }}
          validationSchema={Yup.object().shape({
              email: Yup.string()
                  .email('Email jest niepoprawny')
                  .required('Email jest wymaganym polem'),
             password: Yup.string()
                  .min(6, 'Hasło jest za krótkie - minimum to 6 znaków.')
                  // .matches(/[a-zA-Z]/, 'Hasło może zawierać tylko małe i duże litery')
                  .required('Hasło jest wymaganym polem'),
          })}
          onSubmit={fields => {
              alert('Zalogowano poprawnie');
          }}
          render={({ errors, status, touched }) => (
              <Form>
                  <div className="loginForm">
                      <label htmlFor="email" className="loginEmailStyle">Email</label><br />
                      <Field name="email" type="text" className={'loginFormControl' + (errors.email && touched.email ? ' is-invalid' : '')} />
                      <ErrorMessage name="email" component="div" className="loginFormControlWrong" />
                  </div>
                  <div className="loginForm">
                      <label htmlFor="password" className="loginPassStyle">Hasło</label><br />
                      <Field name="password" type="password" className={'loginFormControl' + (errors.password && touched.password ? ' is-invalid' : '')} />
                      <ErrorMessage name="password" component="div" className="loginFormControlWrong" />
                  </div>
                  <div className="loginForm">
                  <ul className="loginFormBtn">
                    <li>
                      <button onClick="window.location.href='/register'" className="loginBtnNewAccountStyle">Założ konto</button>
                    {/* <NavLink to="/register">Założ konto</NavLink> */}
                    </li>
                    <li>
                      <button type="submit" className="loginBtnStyle">Wyślij</button>
                    </li>
                  </ul>     
                  </div>
              </Form>
          )}
      />
      </div>
</section>
  <Footer />
</>
  )
}
export default Login;

