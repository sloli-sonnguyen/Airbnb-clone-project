import React from 'react';
import Navbar from '../common/navbar/navbar';
import Footer from '../common/footer/index';
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

            </main>
            <Footer />
        </div>
    );
}

export default ProductDetailPage;