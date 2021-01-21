import React from 'react';
import Navbar from '../common/navbar/navbar';
import Footer from '../common/footer/index';
import './style.css';


function ProductsPage(props) {
    return (
        <div className="products-page">
            <header className="header">
                <div className="header__inner">
                    <Navbar />
                </div>
            </header>
            <main className="products-page__main">
                <div className="container">
                    <div className="intro">
                        <p>Hơn 300 chỗ ở</p>
                        <h2>Chỗ ở tại Hà Nội</h2>
                    </div>
                    <div className="filter">
                        <div className="filter__list-btn">
                            <button>Tùy chọn hủy linh hoạt</button>
                            <button>Loại nơi ở</button>
                            <button>Giá</button>
                            <button>Đặt ngay</button>
                            <button>Bộ lọc khác</button>
                        </div>
                        <div className="filter__map">
                            <button>
                                <i className="far fa-map"></i>Hiện bản đồ
                            </button>
                        </div>
                    </div>
                    <div className="record">
                        <div className="record__container-img">
                            <img
                                src="https://a0.muscache.com/airbnb/static/packages/icon-uc-trophy.9ee78aa1.gif"
                                alt=""
                            />
                        </div>
                        <p>
                            <span
                            >Hơn 80.000 khách đã ở tại Hà Nội.</span
                            >
          Trung bình họ xếp hạng chỗ ở của mình ở mức 4.7/5 sao.
        </p>
                        <p></p>
                    </div>
                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="grid-item__img-container">
                                <img
                                    src="https://a0.muscache.com/im/pictures/f108bdba-baca-4693-b043-1c216769770f.jpg?im_w=720"
                                    alt=""
                                />
                            </div>
                            <div className="grid-item__description">
                                <div className="grid-item-description__star">
                                    <i className="fas fa-star"></i>
                                    <p>4.93 (43)</p>
                                </div>
                                <p>Toàn bộ căn hộ · Ba Đình</p>
                                <p>Lily - LAURA Studio❣️CENTER of BADIN..</p>
                                <p><span>$20</span>/đêm</p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item__img-container">
                                <img
                                    src="https://a0.muscache.com/im/pictures/d68af3bf-65a5-410a-8aa4-56e7af6f86da.jpg?im_w=720"
                                    alt=""
                                />
                            </div>
                            <div className="grid-item__description">
                                <div className="grid-item-description__star">
                                    <i className="fas fa-star"></i>
                                    <p>4.67 (75)</p>
                                </div>
                                <p>Toàn bộ căn hộ · Ba Đình</p>
                                <p>Lily - LAURA Studio❣️CENTER of BADIN..</p>
                                <p><span >$18</span>/đêm</p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item__img-container">
                                <img
                                    src="https://a0.muscache.com/im/pictures/0ec329ab-6ad7-40ea-88e4-4c3e803c0891.jpg?im_w=720"
                                    alt=""
                                />
                            </div>
                            <div className="grid-item__description">
                                <div className="grid-item-description__star">
                                    <i className="fas fa-star"></i>
                                    <p>4.67 (75)</p>
                                </div>
                                <p>Toàn bộ căn hộ · Ba Đình</p>
                                <p>Lily - LAURA Studio❣️CENTER of BADIN..</p>
                                <p><span >$18</span>/đêm</p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item__img-container">
                                <img
                                    src="https://a0.muscache.com/im/pictures/595a332f-a48f-4956-89d8-80cb3dfa149a.jpg?im_w=720"
                                    alt=""
                                />
                            </div>
                            <div className="grid-item__description">
                                <div className="grid-item-description__star">
                                    <i className="fas fa-star"></i>
                                    <p>4.67 (75)</p>
                                </div>
                                <p>Toàn bộ căn hộ · Ba Đình</p>
                                <p>Lily - LAURA Studio❣️CENTER of BADIN..</p>
                                <p><span>$18</span>/đêm</p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item__img-container">
                                <img
                                    src="https://a0.muscache.com/im/pictures/18485690-95d0-4d8f-a9ce-ff553d791e38.jpg?im_w=720"
                                    alt=""
                                />
                            </div>
                            <div className="grid-item__description">
                                <div className="grid-item-description__star">
                                    <i className="fas fa-star"></i>
                                    <p>4.67 (75)</p>
                                </div>
                                <p>Toàn bộ căn hộ · Ba Đình</p>
                                <p>Lily - LAURA Studio❣️CENTER of BADIN..</p>
                                <p><span>$18</span>/đêm</p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item__img-container">
                                <img
                                    src="https://a0.muscache.com/im/pictures/45fd51c5-0cd5-4106-9737-a703b6917630.jpg?im_w=720"
                                    alt=""
                                />
                            </div>
                            <div className="grid-item__description">
                                <div className="grid-item-description__star">
                                    <i className="fas fa-star"></i>
                                    <p>4.67 (75)</p>
                                </div>
                                <p>Toàn bộ căn hộ · Ba Đình</p>
                                <p>Lily - LAURA Studio❣️CENTER of BADIN..</p>
                                <p><span >$18</span>/đêm</p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item__img-container">
                                <img
                                    src="https://a0.muscache.com/im/pictures/a366fe5e-c992-4c6d-b887-1496ebbcb482.jpg?im_w=720"
                                    alt=""
                                />
                            </div>
                            <div className="grid-item__description">
                                <div className="grid-item-description__star">
                                    <i className="fas fa-star"></i>
                                    <p>4.67 (75)</p>
                                </div>
                                <p>Toàn bộ căn hộ · Ba Đình</p>
                                <p>Lily - LAURA Studio❣️CENTER of BADIN..</p>
                                <p><span>$18</span>/đêm</p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item__img-container">
                                <img
                                    src="https://a0.muscache.com/im/pictures/0ec329ab-6ad7-40ea-88e4-4c3e803c0891.jpg?im_w=720"
                                    alt=""
                                />
                            </div>
                            <div className="grid-item__description">
                                <div className="grid-item-description__star">
                                    <i className="fas fa-star"></i>
                                    <p>4.67 (75)</p>
                                </div>
                                <p>Toàn bộ căn hộ · Ba Đình</p>
                                <p>Lily - LAURA Studio❣️CENTER of BADIN..</p>
                                <p><span>$18</span>/đêm</p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item__img-container">
                                <img
                                    src="https://a0.muscache.com/im/pictures/45fd51c5-0cd5-4106-9737-a703b6917630.jpg?im_w=720"
                                    alt=""
                                />
                            </div>
                            <div className="grid-item__description">
                                <div className="grid-item-description__star">
                                    <i className="fas fa-star"></i>
                                    <p>4.67 (75)</p>
                                </div>
                                <p>Toàn bộ căn hộ · Ba Đình</p>
                                <p>Lily - LAURA Studio❣️CENTER of BADIN..</p>
                                <p><span >$18</span>/đêm</p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item__img-container">
                                <img
                                    src="https://a0.muscache.com/im/pictures/0ec329ab-6ad7-40ea-88e4-4c3e803c0891.jpg?im_w=720"
                                    alt=""
                                />
                            </div>
                            <div className="grid-item__description">
                                <div className="grid-item-description__star">
                                    <i className="fas fa-star"></i>
                                    <p>4.67 (75)</p>
                                </div>
                                <p>Toàn bộ căn hộ · Ba Đình</p>
                                <p>Lily - LAURA Studio❣️CENTER of BADIN..</p>
                                <p><span>$18</span>/đêm</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- <div class="router-page">
                        <i class="fas fa-chevron-left"></i>
                    </div> --> */}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ProductsPage;