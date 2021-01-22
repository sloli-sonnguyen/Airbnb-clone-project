import React, { useState } from 'react'
import axios from 'axios';
import { useHistory, Redirect } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'



const Login = () => {
  let history = useHistory();
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });

  function handleOnchangeInput(e) {
    const value = e.target.value;
    setLoginInput({
      ...loginInput,
      [e.target.name]: value
    });
  }

  function onSubmit(e) {
    console.log(loginInput);
    axios.post('http://localhost:5000/login-user', loginInput)
      .then(function (response) {
        if (response.data.message === 'success') {
          localStorage.setItem('adminLogin', true);
          history.push('/dashboard');
        } else {
          alert("Bạn nhập sai tài khoản. Vui lòng nhập lại !");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const { email, password } = loginInput;
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" name="email" value={email} onChange={handleOnchangeInput} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name="password" value={password} onChange={handleOnchangeInput} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton onClick={onSubmit} color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
