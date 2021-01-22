import React, { useState, useEffect } from 'react';
import Navbar from '../common/navbar/navbar';
import Footer from '../common/footer/index';
import axios from 'axios'
import './style.css';

function ProductDetailPage(props) {
    return (
        <div className="product-detail">
            <header className="header">
                <div className="header__inner">
                    <Navbar />
                </div>
            </header>
            <main className="product-detail__main">
                <div className="container">
                    <div className="intro">
                        <h2>DANNY’s STYLIST FREE GYM POOL APT in CBD, Bui Vien</h2>
                        <p>Quận 4, Thành phố Hồ Chí Minh, Việt Nam</p>
                    </div>
                    <div className="album">
                        <div className="item1 item">
                            <img
                                src="https://a0.muscache.com/im/pictures/e2fe7e30-da09-45cc-a76e-0dcc331d85b4.jpg?im_w=1200"
                                alt=""
                            />
                        </div>
                        <div className="item2 item">
                            <img
                                src="https://a0.muscache.com/im/pictures/cdc3ad53-ff83-40e2-aa26-e58f3501b1df.jpg?im_w=1440"
                                alt=""
                            />
                        </div>
                        <div className="item3 item">
                            <img
                                src="https://a0.muscache.com/im/pictures/cb426536-7119-4b44-a6c9-927e4f136b19.jpg?im_w=1440"
                                alt=""
                            />
                        </div>
                        <div className="item4 item">
                            <img
                                src="https://a0.muscache.com/im/pictures/38df7410-e23e-4169-8ca4-392daebfbabb.jpg?im_w=1440"
                                alt=""
                            />
                        </div>
                        <div className="item5 item">
                            <img
                                src="https://a0.muscache.com/im/pictures/52f5a3f6-aaaf-44a7-b15a-873ad93980da.jpg?im_w=1440"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="container-body">
                        <div className="order">
                            <h2>27$ /đêm</h2>
                            <button>Đặt phòng</button>
                        </div>
                        <div className="info">
                            <div className="info__room">
                                <h2>Toàn bộ căn hộ. Chủ nhà Trung Danny Home</h2>
                                <p>2 khách · Phòng studio · 1 giường · 1 phòng tắm</p>
                            </div>
                            <div className="info__avatar-host avatar">
                                <img
                                    src="https://a0.muscache.com/im/pictures/user/c99046ed-5bc7-4832-931f-f75b920ba7ed.jpg?im_w=240"
                                    alt="avatar_host"
                                />
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature__item">
                                <div className="feature-item__icon">
                                    <i className="fas fa-home"></i>
                                </div>
                                <div className="feature-item__text">
                                    <h4>Toàn bộ nhà</h4>
                                    <p>Bạn sẽ có căn hộ cho riêng mình.</p>
                                </div>
                            </div>
                            <div className="feature__item">
                                <div className="feature-item__icon">
                                    <i className="fas fa-hand-sparkles"></i>
                                </div>
                                <div className="feature-item__text">
                                    <h4>Vệ sinh tăng cường</h4>
                                    <p>
                                        Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng cường 5
                                        bước của Mochi.
              </p>
                                </div>
                            </div>
                            <div className="feature__item">
                                <div className="feature-item__icon">
                                    <i className="fas fa-door-open"></i>
                                </div>
                                <div className="feature-item__text">
                                    <h4>Tự nhận phòng</h4>
                                    <p>Tự nhận phòng bằng khóa thông minh.</p>
                                </div>
                            </div>
                            <div className="feature__item">
                                <div className="feature-item__icon">
                                    <i className="far fa-calendar-alt"></i>
                                </div>
                                <div className="feature-item__text">
                                    <h4>Chính sách hủy</h4>
                                    <p>
                                        Thêm ngày cho chuyến đi của bạn để nhận thông tin về chính sách
                                        hủy cho đặt phòng này.
              </p>
                                </div>
                            </div>
                        </div>

                        <div className="description">
                            <p>
                                THE STUDIO APARTMENT WITH GORGEOUS VIEW <br /><br />

            This apartment is 30 sqm and located in luxury and famous building
            of the center of SAIGON. <br /><br />

            ## PERFECT LOCATION <br />
            ★05 mins to District 1; <br />
            07 mins Bui Vien street; <br />
            10 mins to city centre and Ben Thanh market by taxi/Grab.
            <br /><br />

            AIRPORT PICK-UP SERVICE WITH FEE. <br />
                            </p>
                        </div>

                        <div className="convenient">
                            <div className="convenient__item">
                                <p>1</p>
                                <div className="convenient-item__icon">
                                    <i className="fas fa-bed"></i>
                                </div>
                                <p>Giường ngủ</p>
                            </div>

                            <div className="convenient__item">
                                <p>1</p>
                                <div className="convenient-item__icon">
                                    <i className="fas fa-bath"></i>
                                </div>
                                <p>Phòng tắm</p>
                            </div>

                            <div className="convenient__item">
                                <p>1</p>
                                <div className="convenient-item__icon">
                                    <i class="fas fa-tv"></i>
                                </div>
                                <p>TV</p>
                            </div>

                            <div className="convenient__item">
                                <p>1</p>
                                <div className="convenient-item__icon">
                                    <i className="fas fa-wind"></i>
                                </div>
                                <p>Điều hòa</p>
                            </div>

                            <div className="convenient__item">
                                <p>1</p>
                                <div className="convenient-item__icon">
                                    <i className="fas fa-fire"></i>
                                </div>
                                <p>Lò sưởi</p>
                            </div>

                            <div className="convenient__item">
                                <p>1</p>
                                <div className="convenient-item__icon">
                                    <i className="fas fa-wifi"></i>
                                </div>
                                <p>Internet (wifi)</p>
                            </div>
                        </div>
                    </div>
                    <div className="rating">
                        <div className="rating__item">
                            <div className="rating-item__user-info">
                                <div className="user-info__avatar avatar">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/user/7e89480f-c823-4923-a9ba-0a1c0f625f15.jpg?im_w=240"
                                        alt=""
                                    />
                                </div>
                                <div className="user-info__name">
                                    <h3>Nguyen Hoang Son</h3>
                                    <h3>5.0 ⭐</h3>
                                </div>
                            </div>
                            <div className="rating-item__comment">
                                <p>
                                    Absolutely great place to stay! Would recommend to anyone who
                                    wants a homey, cozy place to stay at. Felt just like home, and the
                                    host was really accommodating, friendly and quick to answer
                                    messages. 10/10!
            </p>
                            </div>
                        </div>

                        <div className="rating__item">
                            <div className="rating-item__user-info">
                                <div className="user-info__avatar avatar">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/user/2c129b57-6b64-4e74-908e-64aba6c7748c.jpg?im_w=240"
                                        alt=""
                                    />
                                </div>
                                <div className="user-info__name">
                                    <h3>Pham Huy Ky Anh</h3>
                                    <h3>4.0 ⭐</h3>
                                </div>
                            </div>
                            <div className="rating-item__comment">
                                <p>
                                    Cute, cozy studio. Beyond my expectations. So clean and Trung
                                    Danny was great with communication and accommodated so much. Will
                                    definitely stay again.
            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ProductDetailPage;