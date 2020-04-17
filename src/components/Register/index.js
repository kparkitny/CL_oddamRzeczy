import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoginBox from "../Home/HomeHeader/LoginBox/";
import NavBox from "../Home/HomeHeader/NavBox/";
import Footer from "../Home/Footer"
import "./style.scss";
import decorationImg from "../../assets/Decoration.svg";

const Register = () => {
  return (
    <>
      <div className="topContainer">
        <LoginBox />
        <NavBox />
      </div>
      <section className="registerWrapper">
        <div className="registerCenter">
          <h2 className="registerTitle">Nowe konto</h2>
          <img src={decorationImg} alt="dekoracja" className="decorationImgStyle" />
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
                .min(6, 'Hasło jest za krótkie - minimum to 6 znaków')
                .required('Hasło jest wymaganym polem'),
              passwordConfirm: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Hasła muszą być identyczne')
                .min(6, 'Hasło jest za krótkie - minimum to 6 znaków')
                .required('Powtórz hasło'),
            })}
            onSubmit={fields => {
              alert('Konto zostało utworzone');
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
                  <Field name="password" type="password" className={'registerFormControl' + (errors.password && touched.password ? ' is-invalid' : '')} />
                  <ErrorMessage name="password" component="div" className="registerFormControlWrong" />
                </div>

                <div className="registerForm">
                  <label htmlFor="passwordConfirm" className="registerPassStyle">Powtórz hasło</label><br />
                  <Field name="passwordConfirm" type="password" className={'registerFormControl' + (errors.passwordConfirm && touched.passwordConfirm ? ' is-invalid' : '')} />
                  <ErrorMessage name="passwordConfirm" component="div" className="registerFormControlWrong" />
                </div>

                <div className="registerForm">
                  <ul className="registerFormBtn">
                    <li>
                      <button type="reset" className="registerBtnNewAccountStyle">aWyczyść</button>
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
      <Footer />
    </>
  )
}
export default Register;
