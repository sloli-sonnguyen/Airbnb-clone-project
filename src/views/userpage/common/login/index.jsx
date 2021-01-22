import React, { useState } from 'react';
import './style.css';




function LoginPopup(props) {

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
                />
                <input className="popup-login__input password" type="password" placeholder="Mật khẩu" />
                <button className="popup-login__btn continue">Tiếp tục</button>
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