import React, { useState, useEffect } from "react";
import {useLocation, useHistory} from "react-router-dom";
import axios from "axios";
import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/index";
import "./style.css";
import { Link } from "react-router-dom";

function ProductsPage(props) {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState({
    home_type: ''
});
  let location = useLocation();
  let history = useHistory();
  let {search} = location;

  


  useEffect(() => {
    axios.get("http://localhost:5000/rooms" + search).then((res) => {
      const { data } = res;
      setProducts(data);
    });
  }, [search]);
  const listItems = products.map((item, index) => {
    return (
      <Link to={`/s/products/${item.id}`} key={index} className="grid-item">
        <div className="grid-item__img-container">
          <img src={item.url} alt="asa" />
        </div>
        <div className="grid-item__description">
          <p>Toàn bộ căn hộ · {item.city}</p>
          <p>{item.name}</p>
          <p>
            <span>{item.price} $</span>/đêm
          </p>
        </div>
      </Link>
    );
  });


  function handleOnchangeInput(e) {
    const value = e.target.value;
    setSearchInput({
      ...searchInput,
      [e.target.name]: value
    });
    history.push(`/s/products?home_type=${value}`);
  }

  function onChangeSelectPrice(e){
    const value = e.target.value;

    if(value === '1'){

    }
  }

//   function onSearchSubmit(){
//     console.log(searchInput);
//     history.push(`/s/products?city=${searchInput.city}`);
// }

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
            <h2>Chỗ ở </h2>
          </div>
          <div className="filter">
            <div className="filter__list-btn">
              <select onChange={handleOnchangeInput} name="hometype" className="hometype-select">
                <option >Loại nơi ở</option>
                <option value="villa">Villa</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="chalet">Chalet</option>
              </select>
              <select name="price" className="hometype-select">
                <option >Giá</option>
                <option value="0">Thấp đến cao</option>
                <option value="1">Cao đến thâp</option>
              </select>
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
                alt="asas"
              />
            </div>
            <p>
              <span>Hơn 80.000 khách đã ở tại Hà Nội.</span>
              Trung bình họ xếp hạng chỗ ở của mình ở mức 4.7/5 sao.
            </p>
            <p></p>
          </div>
          <div className="grid-container">{listItems}</div>

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
