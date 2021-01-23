import React, { useState } from 'react'
import axios from 'axios';
import { useHistory, Redirect } from "react-router-dom";
import './style.css';




function LoginPopup(props) {

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
          history.push('/s');
        } else {
          alert("Bạn nhập sai tài khoản. Vui lòng nhập lại !");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

    const { email, password } = loginInput;

    const { closeLoginPopup } = props;


    return (
        <div className="popup-login">
            <div className="popup__title">
                <button className="popup-login__btn popup-close" onClick={closeLoginPopup}>
                    <i className="fas fa-times"></i>
                </button>
                <p className="popup-title__text">Đăng nhập</p>
            </div>
            <div className="popup__input">
                <input
                    className="popup-login__input username"
                    type="text"
                    placeholder="Tên đăng nhập"
                    name="email"
                    value={email}
                    onChange={handleOnchangeInput}
                />
                <input name="password" value={password}  onChange={handleOnchangeInput}  className="popup-login__input password" type="password" placeholder="Mật khẩu" />
                <button onClick={onSubmit} className="popup-login__btn continue">Tiếp tục</button>
            </div>
            <div className="popup__hint">
                <p className="popup-hint__text">
                    Bạn chưa có tài khoản? <a className="signup" href="">Đăng ký</a>
                </p>
            </div>

            <div className="popup-login__overlay"></div>
        </div>
    );
}

export default LoginPopup;