import React from "react";
import "./style.css";

function Footer(props) {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <div className="footer__first">
                    <ul className="footer__list">
                        <li className="footer__title">GIỚI THIỆU</li>
                        <li className="footer__item">Phương thức hoạt động của Airbnb</li>
                        <li className="footer__item">Trang tin tức</li>
                        <li className="footer__item">Airbnb Plus</li>
                        <li className="footer__item">Airbnb Luxe</li>
                        <li className="footer__item">HotelTonight</li>
                        <li className="footer__item">Airbnb for Work</li>
                        <li className="footer__item">Thế vận hội</li>
                        <li className="footer__item">Cơ hội nghề nghiệp</li>
                    </ul>

                    <ul className="footer__list">
                        <li className="footer__title">CỘNG ĐỒNG</li>
                        <li className="footer__item">Sự đa dạng và Cảm giác thân thuộc</li>
                        <li className="footer__item">
                            Tiện nghi phù hợp cho người khuyết tật
            </li>
                        <li className="footer__item">Đối tác liên kết Airbnb</li>
                        <li className="footer__item">Chỗ ở cho tuyến đầu</li>
                        <li className="footer__item">Mời bạn bè</li>
                    </ul>

                    <ul className="footer__list">
                        <li className="footer__title">ĐÓN TIẾP KHÁCH</li>
                        <li className="footer__item">Cho thuê nhà</li>
                        <li className="footer__item">Tổ chức Trải nghiệm trực tuyến</li>
                        <li className="footer__item">Tổ chức trải nghiệm</li>
                        <li className="footer__item">
                            Thông điệp từ Tổng giám đốc điều hành Brian Chesky
            </li>
                        <li className="footer__item">Đón tiếp khách có trách nhiệm</li>
                        <li className="footer__item">Ngôi nhà rộng mở</li>
                        <li className="footer__item">Trung tâm tài nguyên</li>
                        <li className="footer__item">Trung tâm cộng đồng</li>
                    </ul>

                    <ul className="footer__list">
                        <li className="footer__title">HỖ TRỢ</li>
                        <li className="footer__item">Thông tin cập nhật về COVID-19</li>
                        <li className="footer__item">Trung tâm trợ giúp</li>
                        <li className="footer__item">Các tùy chọn hủy</li>
                        <li className="footer__item">Hỗ trợ khu dân cư</li>
                        <li className="footer__item">Tin cậy và an toàn</li>
                    </ul>
                </div>
                <div className="footer__last">
                    <ul className="footer__infor">
                        <li className="item__infor">
                            © 2020 Airbnb, Inc. All rights reserved
            </li>
                        <li className="item__infor">·</li>
                        <li className="item__infor item__infor-access">Quyền riêng tư</li>
                        <li className="item__infor">·</li>
                        <li className="item__infor item__infor-access">Điều khoản</li>
                        <li className="item__infor">·</li>
                        <li className="item__infor item__infor-access">Sơ đồ trang web</li>
                    </ul>
                    <div className="container__language-money-social">
                        <div className="language-money">
                            <div className="language">
                                <i className="fas fa-globe"></i>
                                <p>Tiếng Việt(VN)</p>
                            </div>
                            <div className="money">
                                <i className="fas fa-dollar-sign"></i>
                                <p>USD</p>
                            </div>
                        </div>
                        <div className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;