import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { setUser, currentUser } from "./loginFormSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {  } from "react-router-dom";

const LoginPage = (props: any) => {

 const [isLogin, setIsLogin] = useState(true);

 const switchAuthModeHandler = () => {
  setIsLogin((prevState) => !prevState);
 };

 const loginPageStyle = {
  margin: "32px auto 37px",
  maxWidth: "530px",
  background: "#fff",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
 };
 const userek = useAppSelector(currentUser);
 const dispatch = useAppDispatch();

 const submitHandler = (values:any) => {

  const enteredEmail = values.email;
  const enteredPassword = values.password;
  let url;
  if (isLogin) {
   url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBN8wSj6RkcPtrbki8goPKY8CeFwZqQzYo";
  } else {
   url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBN8wSj6RkcPtrbki8goPKY8CeFwZqQzYo";
  }
  fetch(url, {
   method: "POST",
   body: JSON.stringify({
    email: enteredEmail,
    password: enteredPassword,
    returnSecureToken: true,
   }),
   headers: {
    "Content-Type": "application/json",
   },
  })
   .then((res) => {
    if (res.ok) {
     return res.json();
    } else {
     res.json().then((data) => {
      //show error
      console.log(data);
      const errorMessage = data.error.message;
      alert(errorMessage);
      throw new Error(errorMessage);
     });
    }
   })
   .then((data) => {
    // const expirationTime = new Date(
    //  new Date().getTime() + +data.expiresIn * 1000
    // );
    // console.log(data.expiresIn);
    // context.login(data.idToken, expirationTime.toISOString());
    // history.replace("/");

    // setUser???????????
    console.log('sdsdsd')
   })
   .catch((err) => {
    alert(err.message);
   });
 };

 return (
  <React.Fragment>
   <div className="container">
    {userek}
    <div className="login-wrapper" style={loginPageStyle}>
     <h2>Login Page</h2>
     <Formik
      initialValues={{
       email: "",
       password: "",
      }}
      onSubmit={(values) => {
       submitHandler(values);
      }}
     >
      {({ errors, touched }) => (
       <Form className="form-container">
        {isLogin ? "Login" : "Sign up"}
        <div className="form-group">
         <label htmlFor="email">Email</label>
         <Field
          type="text"
          name="email"
          className={"form-control"}
          placeholder="Email"
         />
         {touched.email && errors.email && (
          <span className="help-block text-danger">{errors.email}</span>
         )}
        </div>
        <div className="form-group">
         <label htmlFor="password">Password</label>
         <Field
          type="password"
          name="password"
          className={"form-control"}
          placeholder="Password"
         />
         {touched.password && errors.password && (
          <span className="help-block text-danger">{errors.password}</span>
         )}
        </div>
        <button>{isLogin ? "Login" : "Create Account"}</button>

        <button
         type="submit"
         className="btn btn-primary"
         onClick={switchAuthModeHandler}
        >
         {isLogin ? "Create new account" : "Login with existing account"}
        </button>
       </Form>
      )}
     </Formik>
    </div>
   </div>
  </React.Fragment>
 );
};

export default LoginPage;
