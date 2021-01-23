import React from 'react';
import Navbar from '../common/navbar/navbar';
import Footer from '../common/footer/index';
import { Link } from 'react-router-dom';
import './homepage.css';


function HomePage(props) {
    return (
        <div className="HomePage">
            <header className="header">
                <div className="header__inner">
                    <Navbar />
                </div>
            </header>
            <main className="main">
                {/* intro */}
                <div class="homepage__intro">
                    <div class="homepage__intro-container">
                        <div class="homepage__intro-content">
                            <div class="homepage__intro-content__title">Chỗ ở độc đáo</div>
                            <div class="homepage__intro-content__text">
                                Lều vải, nhà trên cây và nhiều loại hình nhà ở khác – những không gian này không chỉ đơn thuần là nơi để ngủ.
                            </div>
                        </div>
                    </div>
                </div>

                {/* experiences */}
                <div className="experiences">
                    <div className="experiences__intro">
                        <div className="experiences-intro__wrapper">
                            <h1>Trải nghiệm trực tuyến</h1>
                            <p>
                                Gặp gỡ mọi người trên khắp thể giới trong khi thử làm những điều mới
                                mẻ. Tham gia các phiên video tương tác, truyền trực tiếp do những
                                người tổ chức trải nghiệm có một không hai dẫn dắt - trải nghiệm mọi
                                hoạt động mà không cần rời khỏi nhà.
                            </p>
                        </div>
                        <div className="btn-wrapper">
                            <button className="btn-wrapper__btn">Khám phá tất cả</button>
                        </div>
                    </div>
                    <div className="experiences__grid">
                        <div className="experiences-grid__item">
                            <div className="experiences-grid-item__quoteWrapper">
                                <h4>Học cách nấu canh sủi cảo ở Thượng Hải</h4>
                            </div>
                        </div>
                        <div className="experiences-grid__item">
                            <div className="experiences-grid-item__quoteWrapper">
                                <h4>Nữ quyền, bích họa đường phố và graffiti</h4>
                            </div>
                        </div>
                        <div className="experiences-grid__item">
                            <div className="experiences-grid-item__quoteWrapper">
                                <h4>Ghé hậu trường với ảo thuật gia New York</h4>
                            </div>
                        </div>
                        <div className="experiences-grid__item">
                            <div className="experiences-grid-item__quoteWrapper">
                                <h4>Tự pha cocktail & "tám" chuyện giới tính</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3 small box */}
                <div class="three-small-box">
                    <div class="three-small-box-container">
                        <Link className="special-link" to="/s/products" class="three-small-box__box">
                            <div class="image__box">
                                <img src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=480" alt="c" />
                            </div>
                            <div class="content__box">
                                <h3 class="title__box">Chỗ ở độc đáo</h3>
                                <p class="para__box">Những không gian mà không chỉ là nơi để ngủ.</p>
                            </div>
                        </Link>
                        <div class="three-small-box__box">
                            <div class="image__box">
                                <img src="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=480" alt="a" />
                            </div>
                            <div class="content__box">
                                <h3 class="title__box">Trải nghiệm trực tuyến</h3>
                                <p class="para__box">Các hoạt động độc đáo mà chúng ta có thể cùng nhau trải nghiệm, dưới sự dẫn dắt của rất nhiều người tổ chức.</p>
                            </div>
                        </div>
                        <div class="three-small-box__box">
                            <div class="image__box">
                                <img src="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=480" alt="b" />
                            </div>
                            <div class="content__box">
                                <h3 class="title__box">Nhà nguyên căn</h3>
                                <p class="para__box">Những chỗ ở riêng thoải mái, có không gian dành cho bạn bè hoặc gia đình.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;