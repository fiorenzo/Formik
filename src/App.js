import React from "react";
import './index.css';
import { useFormik} from 'formik'
// TODO: import useFormik from formik library


const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
function App() {

  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      alert("Login Successful")
    },
    validate: values =>{
      let errors = {};
      if(!values.email) errors.email = 'Field Required';
      if(!regEmail.test(values.email)) errors.email = 'Username should be an email';
      if(!values.password) errors.password = 'Field Required';
      return errors;
    }
  });



  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <div>Email:</div>
      <input type="text" id="emailField" name="email" onChange={formik.handleChange} value={formik.values.email}/>
      {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}        
      <div>Password:</div>
      <input type="text" id="pswField" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
      {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}                
      <button type="submit" id="submitBtn" onClick={formik.handleSubmit}>Submit</button>
    </form>      
  </div>
);
}

export default App;
