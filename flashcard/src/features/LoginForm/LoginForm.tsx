import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { LoginFormInterface } from "./loginInterface";
import {setUser, currentUser} from './loginFormSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const LoginPage = (props: any) => {
  const loginPageStyle = {
    margin: "32px auto 37px",
    maxWidth: "530px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)"
  };
  const userek = useAppSelector(currentUser);
  const dispatch = useAppDispatch();

  return(
    <React.Fragment>
      <div className="container">
          {userek}
        <div className="login-wrapper" style={loginPageStyle}>
          <h2>Login Page</h2>
          <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(values) => {
                dispatch(setUser(values.email));
            }}
          >
              {({ errors, touched }) => (
                <Form className="form-container">
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field type="text" name="email" className={"form-control"} placeholder="Email" />
                    { touched.email && errors.email && <span className="help-block text-danger">{errors.email}</span> }
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" className={"form-control"} placeholder="Password" />
                    { touched.password && errors.password && <span className="help-block text-danger">{errors.password}</span> }
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </Form>
              )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginPage