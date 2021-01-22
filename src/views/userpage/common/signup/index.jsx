import React, { useState } from 'react';
import './style.css';




function SignupPopup(props) {
    const { closeSignupPopup } = props;


    return (
        <div className="popup-signup">
            <div className="popup__title">
                <button className="popup-signup__btn popup-close" onClick={closeSignupPopup}>
                    <i className="fas fa-times"></i>
                </button>
                <p className="popup-title__text">Đăng ký</p>
            </div>
            <div className="popup__input">
                <input className="lastname" type="text" placeholder="Họ" />
                <input className="firstname" type="text" placeholder="Tên" />
                <p className="popup-input__text">
                    Đảm bảo rằng tên bạn nhập khớp với tên trên giấy tờ tùy thân do chính
                    phủ cấp của bạn
          </p>
                <input
                    className="normal username"
                    type="text"
                    placeholder="Địa chỉ email"
                />
                <p className="popup-input__text">
                    Chúng tôi sẽ gửi phiếu thu và xác nhận chuyến đi qua email cho bạn
          </p>
                <input className="normal password" type="password" placeholder="Mật khẩu" />
                <p className="popup-input__text">
                    Bằng cách chọn Đồng ý và tiếp tục dưới đây, tôi đồng ý với
            <a href="./">Điều khoản dịch vụ</a>,
            <a href="./">Điều khoản dịch vụ thanh toán</a>,
            <a href="./">Chính sách về quyền riêng tư</a> và
            <a href="./">Chính sách không phân biệt</a> của Airbnb
          </p>
                <button className="popup-signup__btn continue">Đồng ý và tiếp tục</button>
            </div>
            <div className="popup__hint">
                <p className="popup-hint__text">
                    Bạn đã có tài khoản? <a className="signup" href="./">Đăng nhập</a>
                </p>
            </div>
        </div>
    );
}

export default SignupPopup;