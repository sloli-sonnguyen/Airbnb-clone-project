import React, { useState, useEffect } from "react";
import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/index";
import axios from "axios";
import "./style.css";
import ImageGalerry from "./ImageGalerry";

function ProductDetailPage({ match }) {
  const id = match.params.id;
  const [product, setProduct] = useState({});
  const [hostInfo, setHostInfo] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/rooms/${id}`).then((res) => {
      console.log(res.data[0]);
      setProduct(res.data[0]);
    });
  }, [id]);

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
            <h2>{product.name}</h2>
            <p>{product.city}</p>
          </div>
          <ImageGalerry id={id} />
          <div className="container-body">
            <div className="order">
              <h2>{product.price}$/ đêm</h2>
              <button>Đặt phòng</button>
            </div>
            <div className="info">
              <div className="info__room">
                <h2>Toàn bộ căn hộ. Chủ nhà Trung Danny Home</h2>
                <p>
                  {product.total_bedrooms} phòng ngủ · {product.total_bathrooms}{" "}
                  phòng tắm
                </p>
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
                    Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng
                    cường 5 bước của Mochi.
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
                    Thêm ngày cho chuyến đi của bạn để nhận thông tin về chính
                    sách hủy cho đặt phòng này.
                  </p>
                </div>
              </div>
            </div>

            <div className="description">
              <p>
                THE STUDIO APARTMENT WITH GORGEOUS VIEW <br />
                <br />
                This apartment is 30 sqm and located in luxury and famous
                building of the center of SAIGON. <br />
                <br />
                ## PERFECT LOCATION <br />
                ★05 mins to District 1; <br />
                07 mins Bui Vien street; <br />
                10 mins to city centre and Ben Thanh market by taxi/Grab.
                <br />
                <br />
                AIRPORT PICK-UP SERVICE WITH FEE. <br />
              </p>
            </div>

            <div className="convenient">
              <div className="convenient__item">
                <p>{product.total_bedrooms}</p>
                <div className="convenient-item__icon">
                  <i className="fas fa-bed"></i>
                </div>
                <p>Phòng ngủ</p>
              </div>

              <div className="convenient__item">
                <p>{product.total_bathrooms}</p>
                <div className="convenient-item__icon">
                  <i className="fas fa-bath"></i>
                </div>
                <p>Phòng tắm</p>
              </div>

              <div className="convenient__item">
                <p>{product.has_tv}</p>
                <div className="convenient-item__icon">
                  <i class="fas fa-tv"></i>
                </div>
                <p>TV</p>
              </div>

              <div className="convenient__item">
                <p>{product.has_air_con}</p>
                <div className="convenient-item__icon">
                  <i className="fas fa-wind"></i>
                </div>
                <p>Điều hòa</p>
              </div>

              <div className="convenient__item">
                <p>{product.has_heating}</p>
                <div className="convenient-item__icon">
                  <i className="fas fa-fire"></i>
                </div>
                <p>Lò sưởi</p>
              </div>

              <div className="convenient__item">
                <p>{product.has_internet}</p>
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
                    src="https://cdn.dribbble.com/users/135467/screenshots/14766210/media/3a15772d1c21cb0a61a3c6755e711884.jpg?compress=1&resize=1000x750"
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
                  wants a homey, cozy place to stay at. Felt just like home, and
                  the host was really accommodating, friendly and quick to
                  answer messages. 10/10!
                </p>
              </div>
            </div>

            <div className="rating__item">
              <div className="rating-item__user-info">
                <div className="user-info__avatar avatar">
                  <img
                    src="https://cdn.dribbble.com/users/1231052/screenshots/7910419/image.png"
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
                  Danny was great with communication and accommodated so much.
                  Will definitely stay again.
                </p>
              </div>
            </div>

            <div className="rating__item">
              <div className="rating-item__user-info">
                <div className="user-info__avatar avatar">
                  <img
                    src="https://cdn.dribbble.com/users/3586023/screenshots/9470740/media/930123b1b8421c883326b5c5109ddc66.gif"
                    alt=""
                  />
                </div>
                <div className="user-info__name">
                  <h3>Do Duy Anh</h3>
                  <h3>3.0 ⭐</h3>
                </div>
              </div>
              <div className="rating-item__comment">
                <p>
                  Cute, cozy studio. Beyond my expectations. So clean and Trung
                  Danny was great with communication and accommodated so much.
                  Will definitely stay again.
                </p>
              </div>
            </div>
            <div className="rating__item">
              <div className="rating-item__user-info">
                <div className="user-info__avatar avatar">
                  <img
                    src="https://cdn.dribbble.com/users/1189769/screenshots/9866852/image.png?compress=1&resize=800x600"
                    alt=""
                  />
                </div>
                <div className="user-info__name">
                  <h3>Vu Minh Cong</h3>
                  <h3>4.0 ⭐</h3>
                </div>
              </div>
              <div className="rating-item__comment">
                <p>
                  Cute, cozy studio. Beyond my expectations. So clean and Trung
                  Danny was great with communication and accommodated so much.
                  Will definitely stay again.
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
